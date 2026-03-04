import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryBySlug, stories } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories
    .filter((story) => story.mode === "text")
    .map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story || story.mode !== "text") {
    return buildMetadata({
      title: "Relato no disponible",
      description: "El relato solicitado no esta disponible en lectura interna.",
      pathname: `/relatos/${slug}`,
    });
  }

  return buildMetadata({
    title: story.title,
    description: story.excerpt || "Relato de Emy Barraca",
    pathname: `/relatos/${story.slug}`,
  });
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story || story.mode !== "text") {
    notFound();
  }

  return (
    <div className="pageShell">
      <article className={styles.article}>
        <p className={styles.kicker}>
          {story.category === "microrrelato" ? "Microrrelato" : "Relato breve"}
        </p>
        <h1 className="pageTitle">{story.title}</h1>
        <p className={styles.meta}>Ano: {story.year || "EDITABLE"}</p>
        <p className={styles.meta}>ID migracion Wix: {story.migration.wixItemId || "EDITABLE"}</p>

        <div className={styles.content}>
          {(story.content || "EDITABLE: Contenido pendiente").split("\n\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className={styles.actions}>
          <Link className="btn btnGhost" href="/relatos">
            Volver a relatos
          </Link>
        </div>
      </article>
    </div>
  );
}
