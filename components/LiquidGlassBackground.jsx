"use client";

import { useEffect, useRef } from "react";

/** Warm morphing gradient field — sunset washes, pointer parallax, paused when reduced-motion. */
export default function LiquidGlassBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const pointer = useRef({ x: 0.5, y: 0.45 });
  const reducedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onMq = (e) => {
      reducedRef.current = e.matches;
    };
    mq.addEventListener("change", onMq);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let running = true;
    let visible = true;
    const start = performance.now();

    const blobs = [
      { x: 0.3, y: 0.4, r: 0.36, color: [255, 122, 89], speed: 0.00016, amp: 0.045 },
      { x: 0.7, y: 0.35, r: 0.3, color: [255, 198, 92], speed: 0.0002, amp: 0.05 },
      { x: 0.5, y: 0.75, r: 0.34, color: [120, 80, 130], speed: 0.00014, amp: 0.04 },
      { x: 0.15, y: 0.7, r: 0.22, color: [255, 150, 110], speed: 0.00024, amp: 0.035 },
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointer = (e) => {
      if (reducedRef.current) return;
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = (e.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.current.y = (e.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const g = ctx.createRadialGradient(
        width * 0.55,
        height * 0.4,
        0,
        width * 0.55,
        height * 0.4,
        Math.max(width, height) * 0.55
      );
      g.addColorStop(0, "rgba(255,122,89,0.16)");
      g.addColorStop(0.5, "rgba(255,198,92,0.08)");
      g.addColorStop(1, "rgba(26,22,34,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const frame = (now) => {
      if (!running) return;
      if (!visible || reducedRef.current) {
        drawStatic();
        return;
      }

      const t = now - start;
      ctx.clearRect(0, 0, width, height);

      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "rgba(42,36,48,0.5)");
      base.addColorStop(1, "rgba(26,22,34,0.15)");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      const px = pointer.current.x;
      const py = pointer.current.y;

      blobs.forEach((b, i) => {
        const ox = Math.sin(t * b.speed + i * 1.7) * b.amp;
        const oy = Math.cos(t * b.speed * 1.15 + i) * b.amp;
        const cx = (b.x + ox + (px - 0.5) * 0.06) * width;
        const cy = (b.y + oy + (py - 0.5) * 0.05) * height;
        const radius = b.r * Math.min(width, height);
        const [r, g, bl] = b.color;

        const grad = ctx.createRadialGradient(cx, cy, radius * 0.05, cx, cy, radius);
        grad.addColorStop(0, `rgba(${r},${g},${bl},0.28)`);
        grad.addColorStop(0.4, `rgba(${r},${g},${bl},0.1)`);
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const vig = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        Math.min(width, height) * 0.2,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      vig.addColorStop(0, "rgba(26,22,34,0)");
      vig.addColorStop(1, "rgba(26,22,34,0.55)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      rafRef.current = requestAnimationFrame(frame);
    };

    resize();
    if (reducedRef.current) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reducedRef.current && running) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(frame);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener("change", onMq);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
