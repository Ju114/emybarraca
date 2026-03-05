import type { Metadata } from "next";
import Image from "next/image";
import { awards, siteConfig } from "@/data/site";
import { buildMetadata, getCanonical } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Emy",
  description:
    "Biografia de Emy Barraca, escritora espanola de narrativa romantica y realista.",
  pathname: "/sobre-emy",
});

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.shortBioFooter,
    url: getCanonical("/sobre-emy"),
    image: "/images/author-placeholder.svg",
    sameAs: [
      siteConfig.social.youtube,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    nationality: "ES",
  };

  return (
    <div className="pageShell">
      <header>
        <h1 className="pageTitle">Sobre Emy</h1>
        <p className="pageLead">
          Un espacio para conocer la voz literaria, trayectoria y vision de la autora.
        </p>
      </header>

      <section className={styles.grid}>
        <article className="card">
          <h2 className="sectionTitle">Biografia</h2>
          {siteConfig.longBio.split("\n\n").map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </article>

        <aside className={styles.aside}>
          <article className="card">
            <h2 className="sectionTitle">Foto de autora</h2>
            <Image
              src="/images/author-placeholder.svg"
              alt="Retrato placeholder de Emy Barraca"
              width={640}
              height={760}
              className={styles.authorImage}
              sizes="(max-width: 1024px) 80vw, 360px"
            />
            <p className={styles.note}>EDITABLE: Sustituir por fotografia oficial.</p>
          </article>

          <article className="card">
            <h2 className="sectionTitle">Premios y reconocimientos</h2>
            <ul className={styles.awardList}>
              {awards.map((award) => (
                <li key={award.title}>
                  <h3>{award.title}</h3>
                  <p>
                    {award.year} · {award.organization}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
