"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { quickLinks, siteConfig } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.brand} href="/" aria-label="Ir a la pagina de inicio">
          <span className={styles.name}>{siteConfig.name}</span>
          <span className={styles.role}>{siteConfig.role}</span>
        </Link>

        <nav aria-label="Principal">
          <ul className={styles.navList}>
            {quickLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
