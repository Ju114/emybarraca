import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AuthorPortrait } from "./AuthorPortrait";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.inner}>
        <p className={styles.pretitle}>Web oficial</p>
        <h1 id="home-heading" className={styles.title}>
          {siteConfig.tagline}
        </h1>
        <p className={styles.lead}>{siteConfig.shortIntro}</p>
        <p className={styles.supportingCopy}>
          Emy Barraca, nombre literario de {siteConfig.legalName}, ha publicado dos novelas
          con Ediciones Rubeo y desarrolla una trayectoria reconocida en relatos, cartas y
          microrrelatos.
        </p>
        <ul className={styles.highlights} aria-label="Claves de la autora">
          <li>Dos novelas publicadas</li>
          <li>Ediciones Rubeo</li>
          <li>Relatos y cartas premiados</li>
        </ul>
        <div className={styles.actions}>
          <Link className="btn btnPrimary" href="/novelas">
            Ver novelas
          </Link>
          <Link className="btn btnGhost" href="/sobre-emy">
            Conocer a Emy
          </Link>
        </div>
      </div>

      <div className={styles.mediaColumn}>
        <AuthorPortrait
          sizes="(max-width: 767px) 70vw, (max-width: 1100px) 34vw, 296px"
          preload
          frameClassName={styles.portrait}
        />
        <div className={styles.noteCard}>
          <p className={styles.noteLabel}>Firma literaria</p>
          <p className={styles.noteText}>
            Emilia García Castro escribe bajo el nombre de Emy Barraca.
          </p>
        </div>
      </div>
    </section>
  );
}
