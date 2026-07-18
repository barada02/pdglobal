import React from "react";
import styles from "./OrgNetworkVisual.module.css";

interface OrgNetworkVisualProps {
  variant?: "hero" | "accent";
  className?: string;
}

const NODES = [
  { id: "n1", x: 60, y: 90, r: 5 },
  { id: "n2", x: 180, y: 40, r: 7 },
  { id: "n3", x: 300, y: 100, r: 4 },
  { id: "n4", x: 130, y: 190, r: 6 },
  { id: "n5", x: 260, y: 220, r: 5 },
  { id: "n6", x: 360, y: 190, r: 4 },
  { id: "n7", x: 40, y: 260, r: 4 },
  { id: "n8", x: 220, y: 320, r: 6 },
  { id: "n9", x: 340, y: 300, r: 4 },
];

const LINKS: [string, string][] = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n2", "n4"],
  ["n4", "n1"],
  ["n4", "n5"],
  ["n5", "n3"],
  ["n5", "n6"],
  ["n4", "n7"],
  ["n7", "n8"],
  ["n8", "n5"],
  ["n8", "n9"],
  ["n9", "n6"],
];

function findNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export default function OrgNetworkVisual({ variant = "hero", className = "" }: OrgNetworkVisualProps) {
  return (
    <svg
      className={`${styles.visual} ${variant === "accent" ? styles.accent : styles.hero} ${className}`}
      viewBox="0 0 400 360"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="orgNetGradient" x1="0" y1="0" x2="400" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>

      <g className={styles.links} stroke="url(#orgNetGradient)" strokeWidth="1">
        {LINKS.map(([a, b], idx) => {
          const na = findNode(a);
          const nb = findNode(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              style={{ animationDelay: `${idx * 90}ms` }}
            />
          );
        })}
      </g>

      <g>
        {NODES.map((n, idx) => (
          <circle
            key={n.id}
            className={styles.node}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="url(#orgNetGradient)"
            style={{ animationDelay: `${idx * 220}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
