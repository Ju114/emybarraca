import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  compact?: boolean;
};

export function SocialLinks({ compact = false }: SocialLinksProps) {
  const links = [
    { label: "YouTube", href: siteConfig.social.youtube },
    { label: "Facebook", href: siteConfig.social.facebook },
  ];

  return (
    <ul className={`${styles.list} ${compact ? styles.compact : ""}`}>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className={styles.link}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
