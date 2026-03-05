import Link from "next/link";
import { legalLinks, quickLinks, siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bioBlock}>
          <p className={styles.kicker}>{siteConfig.name}</p>
          <p className={styles.bio}>{siteConfig.shortBioFooter}</p>
        </div>

        <div>
          <p className={styles.blockTitle}>Navegación</p>
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
          <SocialLinks compact iconOnly platforms={["instagram", "tiktok"]} />
        </div>

        <div>
          <p className={styles.blockTitle}>Legal</p>
          <ul className={styles.links}>
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
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
