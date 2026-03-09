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
  const pathways = [
    {
      title: "Sobre Emy",
      description:
        "Biografía, trayectoria literaria y reconocimientos organizados con una lectura clara y editorial.",
      href: "/sobre-emy",
      action: "Conocer a la autora",
    },
    {
      title: "Relatos",
      description:
        "Selección de relatos y microrrelatos publicados con acceso directo a su fuente original.",
      href: "/relatos",
      action: "Leer relatos",
    },
    {
      title: "Contacto",
      description:
        "Canales directos para consultas editoriales, entrevistas, propuestas y colaboraciones.",
      href: "/contacto",
      action: "Ir a contacto",
    },
  ];

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

      <section className={styles.exploreSection} aria-labelledby="explorar-web">
        <div className={styles.sectionHeader}>
          <h2 id="explorar-web" className="sectionTitle">
            Una web pensada para descubrir su universo literario
          </h2>
          <p>
            Recorre la trayectoria de la autora, consulta sus novelas publicadas y accede a
            relatos, microrrelatos y vías de contacto desde una misma experiencia editorial.
          </p>
        </div>

        <div className={styles.pathwaysGrid}>
          {pathways.map((item) => (
            <article key={item.href} className={styles.pathwayCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className="btn btnGhost" href={item.href}>
                {item.action}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
