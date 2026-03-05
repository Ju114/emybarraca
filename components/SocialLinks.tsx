import Link from "next/link";
import type { SocialPlatform } from "@/data/site";
import { socialLinks } from "@/data/site";
import { SocialIcon } from "./SocialIcon";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  compact?: boolean;
  iconOnly?: boolean;
  platforms?: SocialPlatform[];
};

export function SocialLinks({
  compact = false,
  iconOnly = false,
  platforms,
}: SocialLinksProps) {
  const classNames = [styles.list];
  const items = platforms
    ? socialLinks.filter((link) => platforms.includes(link.platform))
    : socialLinks;

  if (compact) {
    classNames.push(styles.compact);
  }

  if (iconOnly) {
    classNames.push(styles.iconOnly);
  }

  return (
    <ul className={classNames.join(" ")}>
      {items.map((link) => (
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
