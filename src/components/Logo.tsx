import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
  priority?: boolean;
}

// width / height, matching the actual cropped asset dimensions
const RATIOS: Record<"icon" | "full", number> = {
  icon: 999 / 1022,
  full: 1023 / 1200,
};

export default function Logo({ variant = "icon", className = "", priority = false }: LogoProps) {
  const navySrc = variant === "icon" ? "/logo-icon-navy.webp" : "/logo-full-navy.webp";
  const whiteSrc = variant === "icon" ? "/logo-icon-white.webp" : "/logo-full-white.webp";

  return (
    <span
      className={`${styles.logo} ${className}`}
      style={{ aspectRatio: RATIOS[variant] }}
    >
      <Image
        src={navySrc}
        alt="Performance Dimensions Global"
        fill
        priority={priority}
        sizes="160px"
        className={`${styles.img} ${styles.navy}`}
      />
      <Image
        src={whiteSrc}
        alt=""
        aria-hidden="true"
        fill
        priority={priority}
        sizes="160px"
        className={`${styles.img} ${styles.white}`}
      />
    </span>
  );
}
