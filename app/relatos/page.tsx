import type { Metadata } from "next";
import Link from "next/link";
import { getStoriesByCategory } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Relatos",
  description:
    "Relatos breves y microrrelatos de Emy Barraca, disponibles en texto completo o enlace externo.",
  pathname: "/relatos",
});

function StoryList({
  title,
  items,
}: {
  title: string;
  items: ReturnType<typeof getStoriesByCategory>;
}) {
  return (
    <section className={styles.block} aria-label={title}>
      <h2 className="sectionTitle">{title}</h2>
      <div className={styles.grid}>
        {items.map((story) => {
          const isTextMode = story.mode === "text";
          const href = isTextMode ? `/relatos/${story.slug}` : story.externalUrl || "#";

          return (
            <article className="card" key={story.id}>
              <p className={styles.modeBadge}>
                {isTextMode ? "Texto completo" : "Enlace externo"}
              </p>
              <h3>{story.title}</h3>
              <p className={styles.excerpt}>{story.excerpt || "EDITABLE: Extracto opcional"}</p>
              <p className={styles.meta}>Ano: {story.year || "EDITABLE"}</p>
              <p className={styles.meta}>
                Migracion: {story.migration.source} · ID {story.migration.wixItemId || "EDITABLE"}
              </p>

              <Link
                className="btn btnGhost"
                href={href}
                target={isTextMode ? undefined : "_blank"}
                rel={isTextMode ? undefined : "noopener noreferrer"}
              >
                {isTextMode ? "Leer relato" : "Ir al enlace"}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function StoriesPage() {
  const shortStories = getStoriesByCategory("relato-breve");
  const microStories = getStoriesByCategory("microrrelato");

  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Relatos</h1>
        <p className="pageLead">
          Esta seccion esta preparada para migracion desde Wix. Cada item permite elegir
          entre publicacion interna (texto completo) o enlace externo segun el campo
          <code> mode</code> de los datos.
        </p>
      </header>

      <StoryList title={`Relatos breves (${shortStories.length})`} items={shortStories} />
      <StoryList title={`Microrrelatos (${microStories.length})`} items={microStories} />
    </div>
  );
}
