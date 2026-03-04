import Link from "next/link";
import { siteConfig } from "@/data/site";
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
        <div className={styles.actions}>
          <Link className="btn btnPrimary" href="/novelas">
            Ver novelas
          </Link>
          <Link className="btn btnGhost" href="/sobre-emy">
            Conocer a Emy
          </Link>
        </div>
      </div>
    </section>
  );
}
