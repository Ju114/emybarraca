import type { Metadata } from "next";
import { Carousel } from "@/components/Carousel";
import { Hero } from "@/components/Hero";
import { getFeaturedBooks } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Inicio",
  description:
    "Descubre las novelas y relatos de Emy Barraca. Narrativa romantica y realista para lectores y editoriales.",
  pathname: "/",
});

export default function HomePage() {
  const featuredBooks = getFeaturedBooks();

  return (
    <div className="pageShell">
      <Hero />

      <section className={styles.featuredSection} aria-labelledby="obras-destacadas">
        <div className={styles.sectionHeader}>
          <h2 id="obras-destacadas" className="sectionTitle">
            Obras destacadas
          </h2>
          <p>
            Un recorrido por las novelas publicadas y por la obra en preparación, presentado
            con una lectura clara, visual y centrada en cada libro.
          </p>
        </div>
        <Carousel books={featuredBooks} />
      </section>
    </div>
  );
}
