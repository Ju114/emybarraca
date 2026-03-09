import Image from "next/image";
import type { Book } from "@/data/site";
import styles from "./BookCover.module.css";

type BookCoverProps = {
  book: Book;
  sizes: string;
  preload?: boolean;
  loading?: "eager" | "lazy";
  frameClassName?: string;
  imageClassName?: string;
};

export function BookCover({
  book,
  sizes,
  preload = false,
  loading,
  frameClassName,
  imageClassName,
}: BookCoverProps) {
  const frameClasses = [styles.frame, frameClassName].filter(Boolean).join(" ");
  const imageClasses = [styles.image, imageClassName].filter(Boolean).join(" ");

  return (
    <div className={frameClasses}>
      <div className={styles.inner}>
        <Image
          src={book.coverImage}
          alt={`Portada de ${book.title}`}
          fill
          sizes={sizes}
          className={imageClasses}
          preload={preload}
          loading={preload ? undefined : loading}
          quality={88}
        />
      </div>
    </div>
  );
}
