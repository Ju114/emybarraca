import Link from "next/link";
import { socialLinks } from "@/data/site";
import { SocialIcon } from "./SocialIcon";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  compact?: boolean;
  iconOnly?: boolean;
};

export function SocialLinks({ compact = false, iconOnly = false }: SocialLinksProps) {
  const classNames = [styles.list];

  if (compact) {
    classNames.push(styles.compact);
  }

  if (iconOnly) {
    classNames.push(styles.iconOnly);
  }

  return (
    <ul className={classNames.join(" ")}>
      {socialLinks.map((link) => (
        <li key={link.platform}>
          <Link
            className={styles.link}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <SocialIcon name={link.platform} className={styles.icon} />
            <span className={iconOnly ? styles.srOnly : ""}>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
