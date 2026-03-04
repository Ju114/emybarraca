import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBookBySlug } from "@/data/site";
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
    description: book.synopsis,
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.synopsis,
    image: book.coverImage,
    url: getCanonical(`/novelas/${book.slug}`),
    inLanguage: "es",
    author: {
      "@type": "Person",
      name: "Emy Barraca",
    },
    genre: book.genreOrTone ?? book.theme ?? "Narrativa",
    publisher: book.metadata.editorial || "EDITABLE",
    isbn: book.metadata.isbn || undefined,
    offers: isPublished
      ? {
          "@type": "Offer",
          url: book.amazonUrl,
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <div className="pageShell">
      <article className={styles.layout}>
        <Image
          src={book.coverImage}
          alt={`Portada de ${book.title}`}
          width={480}
          height={680}
          className={styles.cover}
          sizes="(max-width: 900px) 80vw, 380px"
          priority
        />

        <div className={styles.content}>
          <p className={styles.kicker}>{isPublished ? "Novela publicada" : "En proceso"}</p>
          <h1 className="pageTitle">{book.title}</h1>
          <p className={styles.synopsis}>{book.synopsis}</p>

          <dl className={styles.meta}>
            <div>
              <dt>Tipo</dt>
              <dd>{book.type}</dd>
            </div>
            {book.genreOrTone ? (
              <div>
                <dt>Genero/Tono</dt>
                <dd>{book.genreOrTone}</dd>
              </div>
            ) : null}
            {book.theme ? (
              <div>
                <dt>Tema</dt>
                <dd>{book.theme}</dd>
              </div>
            ) : null}
            {book.setting ? (
              <div>
                <dt>Ambientacion</dt>
                <dd>{book.setting}</dd>
              </div>
            ) : null}
            <div>
              <dt>Editorial</dt>
              <dd>{book.metadata.editorial || "EDITABLE"}</dd>
            </div>
            <div>
              <dt>ISBN</dt>
              <dd>{book.metadata.isbn || "EDITABLE"}</dd>
            </div>
            <div>
              <dt>Idioma</dt>
              <dd>{book.metadata.language || "Espanol"}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <Link className="btn btnGhost" href="/novelas">
              Volver al listado
            </Link>

            {isPublished && book.amazonUrl ? (
              <Link
                className="btn btnPrimary"
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar en Amazon
              </Link>
            ) : (
              <span className={styles.note}>Disponible proximamente</span>
            )}
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
