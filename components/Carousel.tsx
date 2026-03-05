"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/site";
import styles from "./Carousel.module.css";

type CarouselProps = {
  books: Book[];
};

export function Carousel({ books }: CarouselProps) {
  const items = useMemo(() => books, [books]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      const max = items.length - 1;
      if (index < 0) {
        setCurrentIndex(max);
        return;
      }
      if (index > max) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex(index);
    },
    [items.length],
  );

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const onTouchMove: React.TouchEventHandler<HTMLElement> = (event) => {
    if (touchStartX.current === null) {
      return;
    }
    const nextX = event.touches[0]?.clientX ?? touchStartX.current;
    touchDeltaX.current = nextX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const swipeThreshold = 50;
    if (touchDeltaX.current <= -swipeThreshold) {
      goTo(currentIndex + 1);
    } else if (touchDeltaX.current >= swipeThreshold) {
      goTo(currentIndex - 1);
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  };

  if (!items.length) {
    return null;
  }

  return (
    <section
      className={styles.carousel}
      aria-label="Carrusel de obras destacadas"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div
        className={styles.viewport}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          aria-label="Anterior"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => goTo(currentIndex - 1)}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => goTo(currentIndex + 1)}
          type="button"
        >
          ›
        </button>
        <ul
          className={styles.track}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((book) => {
            const isPublished = book.status === "published";
            return (
              <li key={book.slug} className={styles.slide}>
                <article className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={book.coverImage}
                      alt={`Portada de ${book.title}`}
                      width={410}
                      height={560}
                      sizes="(max-width: 800px) 80vw, 360px"
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.content}>
                    <p className={styles.status}>
                      {isPublished ? "Novela publicada" : "Proyecto en proceso"}
                    </p>
                    <h3>{book.title}</h3>
                    <p>{book.synopsis}</p>

                    <div className={styles.actions}>
                      <Link className="btn btnGhost" href={`/novelas/${book.slug}`}>
                        Ver ficha
                      </Link>

                      {isPublished && book.amazonUrl ? (
                        <Link
                          className="btn btnPrimary"
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar en Amazon
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.indicators} role="tablist" aria-label="Selección de obra">
        {items.map((book, index) => (
          <button
            key={book.slug}
            aria-label={`Ir a ${book.title}`}
            aria-selected={index === currentIndex}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
            onClick={() => goTo(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
