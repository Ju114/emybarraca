import type { Metadata } from "next";
import { BookCard } from "@/components/BookCard";
import { books } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Novelas",
  description:
    "Catalogo de novelas de Emy Barraca con sinopsis, ambientacion y enlaces de compra.",
  pathname: "/novelas",
});

export default function NovelsPage() {
  const publishedCount = books.filter((book) => book.status === "published").length;
  const inProgressCount = books.filter((book) => book.status === "in-progress").length;

  return (
    <div className="pageShell">
      <header className={styles.intro}>
        <h1 className="pageTitle">Novelas</h1>
        <p className="pageLead">
          Obras publicadas y proyectos en desarrollo. Cada ficha incluye sinopsis,
          metadatos y opciones de compra.
        </p>
        <div className={styles.summaryStrip} aria-label="Resumen del catálogo">
          <article className={styles.summaryCard}>
            <p className={styles.summaryValue}>{publishedCount}</p>
            <p className={styles.summaryLabel}>Publicadas</p>
          </article>
          <article className={styles.summaryCard}>
            <p className={styles.summaryValue}>{inProgressCount}</p>
            <p className={styles.summaryLabel}>En desarrollo</p>
          </article>
          <article className={styles.summaryCard}>
            <p className={styles.summaryValue}>Rubeo</p>
            <p className={styles.summaryLabel}>Editorial de las novelas publicadas</p>
          </article>
        </div>
      </header>

      <section className={styles.grid}>
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </section>
    </div>
  );
}
