import type { Metadata } from "next";
import Link from "next/link";
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
            Narrativas de identidad, afecto y retorno. Explora las novelas disponibles
            y descubre nuevos proyectos en marcha.
          </p>
        </div>
        <Carousel books={featuredBooks} />
      </section>

      <section className={styles.split} aria-label="Lectoras, lectores y colaboraciones">
        <article className="card">
          <h2 className="sectionTitle">Para lectoras y lectores</h2>
          <p>
            Consulta fichas detalladas, sinopsis y enlaces directos de compra para cada
            novela publicada.
          </p>
          <Link className="btn btnPrimary" href="/novelas">
            Ver catalogo de novelas
          </Link>
        </article>

        <article className="card">
          <h2 className="sectionTitle">Para editoriales y colaboradores</h2>
          <p>
            Conoce la trayectoria de la autora y utiliza el formulario de contacto para
            propuestas profesionales, entrevistas y eventos.
          </p>
          <Link className="btn btnGhost" href="/contacto">
            Contacto profesional
          </Link>
        </article>
      </section>
    </div>
  );
}
