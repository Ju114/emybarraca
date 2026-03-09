import Image from "next/image";
import styles from "./AuthorPortrait.module.css";

type AuthorPortraitProps = {
  sizes: string;
  preload?: boolean;
  alt?: string;
  frameClassName?: string;
  imageClassName?: string;
};

export function AuthorPortrait({
  sizes,
  preload = false,
  alt = "Retrato de Emy Barraca",
  frameClassName,
  imageClassName,
}: AuthorPortraitProps) {
  const frameClasses = [styles.frame, frameClassName].filter(Boolean).join(" ");
  const imageClasses = [styles.image, imageClassName].filter(Boolean).join(" ");

  return (
    <div className={frameClasses}>
      <Image
        src="/images/foto-de-autora.jpeg"
        alt={alt}
        width={322}
        height={526}
        className={imageClasses}
        sizes={sizes}
        preload={preload}
        quality={86}
      />
    </div>
  );
}
