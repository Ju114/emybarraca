"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { quickLinks, siteConfig } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (event.target instanceof Node && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onClickOutside);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("pointerdown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container} ref={menuRef}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Ir a la página de inicio"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={styles.name}>{siteConfig.name}</span>
          <span className={styles.role}>{siteConfig.role}</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {siteConfig.primaryCta ? (
            <Link
              className={`btn btnPrimary ${styles.menuCta}`}
              href={siteConfig.primaryCta.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {siteConfig.primaryCta.label}
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
