import type { Metadata } from "next";
import { getStories } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Relatos",
  description:
    "Selección de narrativa breve de Emy Barraca con acceso directo a sus publicaciones.",
  pathname: "/relatos",
});

export default function StoriesPage() {
  const stories = getStories().filter((story) => !story.reviewFields?.includes("title"));
  const groups = [
    {
      id: "textos-narrativos",
      title: "Textos narrativos",
      description:
        "Piezas de mayor recorrido publicadas en medios, antologías o certámenes literarios.",
      items: stories.filter((story) => story.category === "relato"),
    },
    {
      id: "microrrelatos",
      title: "Microrrelatos",
      description:
        "Textos de condensación y pulso breve, donde cada línea trabaja con precisión y resonancia.",
      items: stories.filter((story) => story.category === "microrrelato"),
    },
  ];

  return (
    <div className="pageShell">
      <header className={styles.intro}>
        <p className={styles.pageEyebrow}>Narrativa breve</p>
        <h1 className="pageTitle">Textos publicados</h1>
        <p className="pageLead">
          Una selección de piezas breves de Emy Barraca con acceso directo a su publicación
          original.
        </p>
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
              const showYear =
                !story.reviewFields?.includes("year") &&
                story.yearLabel.toLowerCase() !== "pendiente de revisión";
              const showExcerpt =
                Boolean(story.excerpt) && !story.reviewFields?.includes("excerpt");

              return (
                <article className={`card ${styles.card}`} key={story.id}>
                  <div className={styles.metaRow}>
                    <p className={styles.categoryBadge}>{categoryLabel}</p>
                    {showYear ? <p className={styles.meta}>Año {story.yearLabel}</p> : null}
                  </div>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  {showExcerpt ? <p className={styles.excerpt}>{story.excerpt}</p> : null}
                  <a
                    className={`btn btnGhost ${styles.linkButton}`}
                    href={story.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir publicación: ${story.title}`}
                  >
                    Abrir publicación
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
