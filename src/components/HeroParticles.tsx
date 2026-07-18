"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroParticles.module.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
}

// Brand-aligned palette: white, soft gray, light blue, primary teal
const COLORS = ["255, 255, 255", "148, 163, 184", "56, 189, 248", "13, 148, 136"];

const MAX_LINK_DIST = 110;
const MOUSE_RADIUS = 130;
const PARALLAX_STRENGTH = 6;

export default function HeroParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = reduceMotionQuery.matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let particles: Particle[] = [];
    let animationId = 0;
    let isRunning = false;

    const mouse = { x: -9999, y: -9999, active: false };
    const parallax = { x: 0, y: 0 };

    function seedParticles() {
      const area = width * height;
      const count = Math.max(16, Math.min(50, Math.round(area / 20000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = Math.max(1, Math.round(width * dpr));
      canvas!.height = Math.max(1, Math.round(height * dpr));
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.save();
      ctx!.translate(parallax.x, parallax.y);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0.01) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.4;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DIST) {
            const opacity = (1 - dist / MAX_LINK_DIST) * 0.12;
            ctx!.strokeStyle = `rgba(148, 163, 184, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // particles with a soft, low-opacity glow
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.shadowColor = `rgba(${p.c}, 0.35)`;
        ctx!.shadowBlur = 3;
        ctx!.fillStyle = `rgba(${p.c}, 0.75)`;
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;
      ctx!.restore();
    }

    function step() {
      if (!isRunning) return;
      drawFrame();
      animationId = requestAnimationFrame(step);
    }

    function start() {
      if (isRunning) return;
      isRunning = true;
      animationId = requestAnimationFrame(step);
    }

    function stop() {
      isRunning = false;
      cancelAnimationFrame(animationId);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      const withinBounds =
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (!withinBounds) {
        mouse.active = false;
        return;
      }

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      if (!prefersReducedMotion && width > 0 && height > 0) {
        const nx = mouse.x / width - 0.5;
        const ny = mouse.y / height - 0.5;
        parallax.x = nx * PARALLAX_STRENGTH;
        parallax.y = ny * PARALLAX_STRENGTH;
      }
    }

    function handlePointerLeave() {
      mouse.active = false;
      parallax.x = 0;
      parallax.y = 0;
    }

    function handleVisibility() {
      if (document.hidden || prefersReducedMotion) {
        stop();
      } else {
        start();
      }
    }

    function handleResize() {
      resize();
      if (prefersReducedMotion) drawFrame();
    }

    function applyMotionPreference() {
      prefersReducedMotion = reduceMotionQuery.matches;
      if (prefersReducedMotion) {
        stop();
        mouse.active = false;
        parallax.x = 0;
        parallax.y = 0;
        drawFrame();
      } else if (!document.hidden) {
        start();
      }
    }

    resize();
    drawFrame();
    if (!prefersReducedMotion) start();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    reduceMotionQuery.addEventListener("change", applyMotionPreference);

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      reduceMotionQuery.removeEventListener("change", applyMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className}`} aria-hidden="true" />;
}
