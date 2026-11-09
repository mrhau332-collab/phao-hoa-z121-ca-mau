"use client";

import React, { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  size: number;
  color: string;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
  sparkles: Sparkle[];
}

export function FireworksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // A11y: Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "#D4AF37", // Molten Gold
      "#F3E5AB", // Champagne Gold
      "#E11D48", // Crimson Ember
      "#FB7185", // Rose Spark
      "#E2E8F0", // Platinum Diamond
    ];

    const rockets: Rocket[] = [];

    const launchRocket = () => {
      const x = Math.random() * (width * 0.7) + width * 0.15;
      const targetY = Math.random() * (height * 0.4) + height * 0.12;
      const color = colors[Math.floor(Math.random() * colors.length)];

      rockets.push({
        x,
        y: height,
        targetY,
        vy: -(Math.random() * 3.5 + 6.5),
        color,
        exploded: false,
        sparkles: [],
      });
    };

    const explode = (rocket: Rocket) => {
      const count = Math.floor(Math.random() * 20 + 25);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 3.2 + 1.2;
        rocket.sparkles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.012 + 0.007,
          size: Math.random() * 1.8 + 1.2,
          color: rocket.color,
        });
      }
    };

    let lastLaunch = 0;
    const render = (time: number) => {
      // Gentle dark trail persistence
      ctx.fillStyle = "rgba(3, 5, 8, 0.22)";
      ctx.fillRect(0, 0, width, height);

      // Launch interval
      if (time - lastLaunch > 2200 && rockets.length < 4) {
        launchRocket();
        lastLaunch = time;
      }

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];

        if (!r.exploded) {
          r.y += r.vy;

          // Head spark
          ctx.beginPath();
          ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = r.color;
          ctx.shadowColor = r.color;
          ctx.shadowBlur = 10;
          ctx.fill();

          // Delicate tail
          ctx.beginPath();
          ctx.arc(r.x, r.y + 4, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
          ctx.shadowBlur = 0;
          ctx.fill();

          if (r.y <= r.targetY || r.vy >= 0) {
            r.exploded = true;
            explode(r);
          }
        } else {
          // Particles expansion
          for (let sIndex = r.sparkles.length - 1; sIndex >= 0; sIndex--) {
            const s = r.sparkles[sIndex];
            s.x += s.vx;
            s.y += s.vy;
            s.vy += 0.038; // Physical gravity
            s.vx *= 0.985; // Air drag
            s.alpha -= s.decay;

            if (s.alpha <= 0) {
              r.sparkles.splice(sIndex, 1);
              continue;
            }

            ctx.save();
            ctx.globalAlpha = s.alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.shadowColor = s.color;
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.restore();
          }

          if (r.sparkles.length === 0) {
            rockets.splice(i, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50"
      aria-hidden="true"
    />
  );
}
