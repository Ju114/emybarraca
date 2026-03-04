import Link from "next/link";
import { quickLinks, siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bioBlock}>
          <p className={styles.kicker}>Emy Barraca</p>
          <p className={styles.bio}>{siteConfig.shortBioFooter}</p>
        </div>

        <div>
          <p className={styles.blockTitle}>Enlaces rapidos</p>
          <ul className={styles.links}>
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.blockTitle}>Redes sociales</p>
          <SocialLinks compact />
        </div>
      </div>

      <div className={styles.legal}>
        <p>
          © {new Date().getFullYear()} Emy Barraca. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
