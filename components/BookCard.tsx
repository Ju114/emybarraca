import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/site";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
  showMetadata?: boolean;
};

export function BookCard({ book, showMetadata = true }: BookCardProps) {
  const isPublished = book.status === "published";

  return (
    <article className={styles.card}>
      <Link
        className={styles.coverLink}
        href={`/novelas/${book.slug}`}
        aria-label={`Ver ficha de ${book.title}`}
      >
        <Image
          className={styles.cover}
          src={book.coverImage}
          alt={`Portada de ${book.title}`}
          width={430}
          height={600}
          sizes="(max-width: 600px) 70vw, (max-width: 1024px) 35vw, 300px"
          loading="lazy"
        />
      </Link>

      <div className={styles.body}>
        <p className={styles.badge}>{isPublished ? "Publicada" : "En proceso"}</p>
        <h3 className={styles.title}>
          <Link href={`/novelas/${book.slug}`}>{book.title}</Link>
        </h3>
        <p className={styles.synopsis}>{book.synopsis}</p>

        {showMetadata ? (
          <dl className={styles.meta}>
            {book.setting ? (
              <div>
                <dt>Ambientacion</dt>
                <dd>{book.setting}</dd>
              </div>
            ) : null}
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
          </dl>
        ) : null}

        <div className={styles.actions}>
          <Link className="btn btnGhost" href={`/novelas/${book.slug}`}>
            Ver ficha
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
            <span className={styles.soon}>Disponible proximamente</span>
          )}
        </div>
      </div>
    </article>
  );
}
