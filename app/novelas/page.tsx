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
  return (
    <div className="pageShell">
      <header className={styles.intro}>
        <h1 className="pageTitle">Novelas</h1>
        <p className="pageLead">
          Obras publicadas y proyecto en preparación, reunidos en un catálogo limpio y
          centrado en cada libro.
        </p>
      </header>

      <section className={styles.grid}>
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </section>
    </div>
  );
}
