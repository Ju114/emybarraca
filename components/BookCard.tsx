import Link from "next/link";
import { getBookDescription, getBookPurchaseUrl, type Book } from "@/data/site";
import { BookCover } from "./BookCover";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
  showMetadata?: boolean;
};

export function BookCard({ book, showMetadata = true }: BookCardProps) {
  const isPublished = book.status === "published";
  const description = getBookDescription(book);
  const purchaseUrl = getBookPurchaseUrl(book);

  return (
    <article className={styles.card}>
      <Link
        className={styles.coverLink}
        href={`/novelas/${book.slug}`}
        aria-label={`Ver ficha de ${book.title}`}
      >
        <BookCover
          book={book}
          sizes="(max-width: 700px) 72vw, 296px"
          frameClassName={styles.coverFrame}
        />
      </Link>

      <div className={styles.body}>
        <p className={styles.badge}>{isPublished ? "Publicada" : "En proceso"}</p>
        <h3 className={styles.title}>
          <Link href={`/novelas/${book.slug}`}>{book.title}</Link>
        </h3>
        <p className={styles.synopsis}>{description}</p>

        {showMetadata ? (
          <dl className={styles.meta}>
            {book.setting ? (
              <div>
                <dt>Ambientación</dt>
                <dd>{book.setting}</dd>
              </div>
            ) : null}
            {book.genreOrTone ? (
              <div>
                <dt>Género/Tono</dt>
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
          {purchaseUrl ? (
            <Link
              className="btn btnPrimary"
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar en Amazon
            </Link>
          ) : !isPublished ? <span className={styles.soon}>Proyecto en preparación</span> : null}
        </div>
      </div>
    </article>
  );
}
