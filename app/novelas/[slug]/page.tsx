import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCover } from "@/components/BookCover";
import {
  books,
  getBookBySlug,
  getBookDescription,
  hasBookPurchaseLink,
  isPlaceholderValue,
} from "@/data/site";
import { buildMetadata, getCanonical } from "@/lib/seo";
import styles from "./page.module.css";

type NovelPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: NovelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return buildMetadata({
      title: "Novela no encontrada",
      description: "La novela solicitada no existe.",
      pathname: `/novelas/${slug}`,
    });
  }

  return buildMetadata({
    title: book.title,
    description: getBookDescription(book),
    pathname: `/novelas/${book.slug}`,
    image: book.coverImage,
  });
}

export default async function NovelDetailPage({ params }: NovelPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const isPublished = book.status === "published";
  const description = getBookDescription(book);
  const purchaseUrl = hasBookPurchaseLink(book.amazonUrl) ? book.amazonUrl : undefined;
  const metadataItems = [
    { label: "Tipo", value: book.type },
    { label: "Género/Tono", value: book.genreOrTone },
    { label: "Tema", value: book.theme },
    { label: "Ambientación", value: book.setting },
    { label: "Editorial", value: isPlaceholderValue(book.metadata.editorial) ? undefined : book.metadata.editorial },
    { label: "ISBN", value: isPlaceholderValue(book.metadata.isbn) ? undefined : book.metadata.isbn },
    { label: "Idioma", value: isPlaceholderValue(book.metadata.language) ? undefined : book.metadata.language },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description,
    image: book.coverImage,
    url: getCanonical(`/novelas/${book.slug}`),
    inLanguage: "es",
    author: {
      "@type": "Person",
      name: "Emy Barraca",
    },
    genre: book.genreOrTone ?? book.theme ?? "Narrativa",
    publisher: isPlaceholderValue(book.metadata.editorial) ? undefined : book.metadata.editorial,
    isbn: isPlaceholderValue(book.metadata.isbn) ? undefined : book.metadata.isbn,
    offers: isPublished && purchaseUrl
      ? {
          "@type": "Offer",
          url: purchaseUrl,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <div className="pageShell">
      <article className={styles.layout}>
        <BookCover
          book={book}
          sizes="(max-width: 900px) 82vw, 384px"
          preload
          frameClassName={styles.coverFrame}
        />

        <div className={styles.content}>
          <p className={styles.kicker}>{isPublished ? "Novela publicada" : "En proceso"}</p>
          <h1 className="pageTitle">{book.title}</h1>
          <p className={styles.synopsis}>{description}</p>

          <dl className={styles.meta}>
            {metadataItems.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.actions}>
            <Link className="btn btnGhost" href="/novelas">
              Volver al listado
            </Link>

            {purchaseUrl ? (
              <Link
                className="btn btnPrimary"
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar en Amazon
              </Link>
            ) : !isPublished ? <span className={styles.note}>Proyecto en preparación</span> : null}
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
