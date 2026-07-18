import React from "react";
import Image from "next/image";
import styles from "./EditorialImage.module.css";

interface EditorialImageProps {
  src: string;
  alt: string;
  aspect?: "4/3" | "16/10" | "1/1" | "3/4";
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function EditorialImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className = "",
}: EditorialImageProps) {
  return (
    <div
      className={`${styles.frame} ${className}`}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={styles.image}
      />
    </div>
  );
}
