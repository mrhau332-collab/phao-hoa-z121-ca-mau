"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: "mai" | "dao" | "spark";
}

export function TetSpringAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Color palettes for Hoa Mai (Golden Yellow) & Hoa Đào (Coral Blossom Pink) & Gold Embers
    const maiColors = ["#FBBF24", "#F59E0B", "#FDE047", "#D4AF37"];
    const daoColors = ["#FB7185", "#F43F5E", "#FDA4AF", "#FFE4E6"];
    const sparkColors = ["#FEF08A", "#FFFFFF", "#FDE047"];

    const petalCount = Math.min(28, Math.floor(width / 50));
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const typeRandom = Math.random();
      const type: "mai" | "dao" | "spark" =
        typeRandom < 0.5 ? "mai" : typeRandom < 0.85 ? "dao" : "spark";

      const color =
        type === "mai"
          ? maiColors[Math.floor(Math.random() * maiColors.length)]
          : type === "dao"
          ? daoColors[Math.floor(Math.random() * daoColors.length)]
          : sparkColors[Math.floor(Math.random() * sparkColors.length)];

      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === "spark" ? Math.random() * 2 + 1 : Math.random() * 5 + 4,
        speedX: Math.random() * 0.8 - 0.4 + 0.3, // Gentle eastward breeze
        speedY: Math.random() * 0.9 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.45 + 0.25,
        color,
        type,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + i) * 0.4;
        p.rotation += p.rotationSpeed;

        // Reset when falling off screen
        if (p.y > height + 20) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -15;
        } else if (p.x < -20) {
          p.x = width + 15;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === "spark") {
          // Starlight shimmer particle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        } else {
          // Delicate flower petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 4;
          ctx.fill();
        }

        ctx.restore();
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
      className="pointer-events-none fixed inset-0 z-1 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
