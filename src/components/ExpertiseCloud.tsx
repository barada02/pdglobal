"use client";
import React, { useEffect, useState } from "react";
import styles from "./ExpertiseCloud.module.css";

interface ExpertiseCloudProps {
  items: string[];
  className?: string;
}

const ACCENT_COLORS = ["#0D9488", "#2563EB", "#D97706", "#7C3AED", "#E11D48", "#0EA5E9"];
const EFFECTS = ["glow", "lift", "sweep"] as const;

const HOLD_MS = 2000;

export default function ExpertiseCloud({ items, className = "" }: ExpertiseCloudProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => {
        if (items.length <= 1) return i;
        let next = i;
        while (next === i) {
          next = Math.floor(Math.random() * items.length);
        }
        return next;
      });
      setCycle((c) => c + 1);
    }, HOLD_MS);
    return () => clearInterval(timer);
  }, [items.length]);

  const effect = EFFECTS[cycle % EFFECTS.length];
  const color = ACCENT_COLORS[cycle % ACCENT_COLORS.length];

  return (
    <div className={`${styles.chipCloud} ${className}`}>
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <span
            key={item}
            className={`${styles.chip} ${isActive ? `${styles.chipActive} ${styles[effect]}` : ""}`}
            style={isActive ? ({ "--chip-color": color } as React.CSSProperties) : undefined}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
