import type { Metadata } from "next";
import { getStories } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Relatos",
  description:
    "Selección de relatos y microrrelatos de Emy Barraca con enlace directo a su publicación original.",
  pathname: "/relatos",
});

export default function StoriesPage() {
  const stories = getStories();
  const groups = [
    {
      id: "relatos",
      title: "Relatos",
      description:
        "Textos narrativos de mayor aliento, publicados en medios, antologías o certámenes literarios.",
      items: stories.filter((story) => story.category === "relato"),
    },
    {
      id: "microrrelatos",
      title: "Microrrelatos",
      description:
        "Piezas breves donde la intensidad y la síntesis concentran la voz de la autora.",
      items: stories.filter((story) => story.category === "microrrelato"),
    },
  ];

  return (
    <div className="pageShell">
      <header className={styles.intro}>
        <h1 className="pageTitle">Relatos</h1>
        <p className="pageLead">
          Selección de relatos y microrrelatos con enlace directo a su publicación original.
        </p>
        <div className={styles.summaryStrip} aria-label="Resumen de publicaciones breves">
          {groups.map((group) => (
            <article key={group.id} className={styles.summaryCard}>
              <p className={styles.summaryValue}>{group.items.length}</p>
              <p className={styles.summaryLabel}>{group.title}</p>
            </article>
          ))}
        </div>
      </header>

      {groups.map((group) => (
        <section key={group.id} className={styles.group} aria-labelledby={`${group.id}-heading`}>
          <div className={styles.groupHeader}>
            <h2 id={`${group.id}-heading`} className="sectionTitle">
              {group.title}
            </h2>
            <p>{group.description}</p>
          </div>

          <div className={styles.grid}>
            {group.items.map((story) => {
              const categoryLabel =
                story.category === "microrrelato" ? "Microrrelato" : "Relato";

              return (
                <article className={`card ${styles.card}`} key={story.id}>
                  <div className={styles.metaRow}>
                    <p className={styles.categoryBadge}>{categoryLabel}</p>
                    <p className={styles.meta}>Año: {story.yearLabel}</p>
                  </div>
                  <h3 className={styles.title}>{story.title}</h3>
                  {story.excerpt ? <p className={styles.excerpt}>{story.excerpt}</p> : null}
                  <a
                    className={`btn btnGhost ${styles.linkButton}`}
                    href={story.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Leer relato: ${story.title}`}
                  >
                    Leer relato
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
