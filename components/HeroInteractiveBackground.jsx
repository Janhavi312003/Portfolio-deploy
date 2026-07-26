"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PARTICLE_MS = 750;
const MAX_PARTICLES = 40;
const PARTICLES_PER_BURST = { min: 8, max: 14 };
const ACCENT_COLORS = ["#8B5CF6", "#D946EF", "#22D3EE", "#3B82F6"];
const IDLE_MS = 1400;

const BLOBS = [
  {
    id: "violet",
    className:
      "absolute h-[22rem] w-[22rem] rounded-full bg-violet-500/30 blur-[100px] sm:h-[28rem] sm:w-[28rem]",
    rest: { x: "8%", y: "12%" },
    pull: 0.12,
    ambient: { x: [0, 18, -10, 0], y: [0, -14, 10, 0], duration: 18 },
  },
  {
    id: "blue",
    className:
      "absolute h-[18rem] w-[18rem] rounded-full bg-blue-500/25 blur-[90px] sm:h-[24rem] sm:w-[24rem]",
    rest: { x: "62%", y: "28%" },
    pull: 0.09,
    ambient: { x: [0, -16, 12, 0], y: [0, 12, -8, 0], duration: 22 },
  },
  {
    id: "cyan",
    className:
      "absolute h-[16rem] w-[16rem] rounded-full bg-cyan-400/20 blur-[85px] sm:h-[22rem] sm:w-[22rem]",
    rest: { x: "28%", y: "58%" },
    pull: 0.1,
    ambient: { x: [0, 12, -14, 0], y: [0, -10, 14, 0], duration: 20 },
  },
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * Hero background: magnetic gradient blobs + particle bursts on click/tap.
 * Self-contained — wrap Hero content: <HeroInteractiveBackground>...</HeroInteractiveBackground>
 */
export default function HeroInteractiveBackground({ children, className = "" }) {
  const containerRef = useRef(null);
  const idRef = useRef(0);
  const idleTimerRef = useRef(null);
  const skipClickRef = useRef(false);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState([]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 45, damping: 22, mass: 0.8 };
  const pullX = useSpring(pointerX, springConfig);
  const pullY = useSpring(pointerY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const resetIdle = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setActive(false);
      pointerX.set(0);
      pointerY.set(0);
    }, IDLE_MS);
  }, [pointerX, pointerY]);

  const updatePointer = useCallback(
    (clientX, clientY) => {
      if (reducedMotion) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalize to -0.5..0.5 from center
      const nx = (clientX - rect.left) / rect.width - 0.5;
      const ny = (clientY - rect.top) / rect.height - 0.5;
      pointerX.set(nx * rect.width);
      pointerY.set(ny * rect.height);
      setActive(true);
      resetIdle();
    },
    [pointerX, pointerY, reducedMotion, resetIdle]
  );

  const removeParticle = useCallback((id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const spawnBurst = useCallback(
    (clientX, clientY) => {
      if (reducedMotion) {
        // Single static accent dot, then remove
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const id = ++idRef.current;
        const dot = {
          id,
          x: clientX - rect.left,
          y: clientY - rect.top,
          dx: 0,
          dy: 0,
          size: 8,
          color: ACCENT_COLORS[0],
          static: true,
        };
        setParticles((prev) => [...prev.slice(-(MAX_PARTICLES - 1)), dot]);
        window.setTimeout(() => removeParticle(id), 280);
        return;
      }

      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const originX = clientX - rect.left;
      const originY = clientY - rect.top;
      const count = Math.round(
        randomBetween(PARTICLES_PER_BURST.min, PARTICLES_PER_BURST.max)
      );

      const next = [];
      for (let i = 0; i < count; i++) {
        const angle = randomBetween(0, Math.PI * 2);
        const speed = randomBetween(40, 110);
        next.push({
          id: ++idRef.current,
          x: originX,
          y: originY,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed + randomBetween(20, 50), // gravity bias down
          size: randomBetween(3, 7),
          color: ACCENT_COLORS[i % ACCENT_COLORS.length],
          static: false,
        });
      }

      setParticles((prev) => {
        const merged = [...prev, ...next];
        return merged.length > MAX_PARTICLES
          ? merged.slice(merged.length - MAX_PARTICLES)
          : merged;
      });

      next.forEach((p) => {
        window.setTimeout(() => removeParticle(p.id), PARTICLE_MS + 80);
      });
    },
    [reducedMotion, removeParticle]
  );

  const handleMouseMove = (e) => updatePointer(e.clientX, e.clientY);

  const handleTouchMove = (e) => {
    const t = e.touches[0];
    if (t) updatePointer(t.clientX, t.clientY);
  };

  const handleClick = (e) => {
    if (skipClickRef.current) {
      skipClickRef.current = false;
      return;
    }
    spawnBurst(e.clientX, e.clientY);
  };

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    if (!t) return;
    skipClickRef.current = true;
    updatePointer(t.clientX, t.clientY);
    spawnBurst(t.clientX, t.clientY);
  };

  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden touch-manipulation ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setActive(false);
        pointerX.set(0);
        pointerY.set(0);
      }}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
    >
      {/* Magnetic / ambient blobs — behind content */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {BLOBS.map((blob) => (
          <MagneticBlob
            key={blob.id}
            blob={blob}
            pullX={pullX}
            pullY={pullY}
            active={active}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      {/* Particle bursts — behind content */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((p) =>
          p.static ? (
            <span
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 10px ${p.color}`,
                transform: "translate(-50%, -50%)",
                opacity: 0.85,
              }}
            />
          ) : (
            <motion.span
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 8px ${p.color}`,
                marginLeft: -p.size / 2,
                marginTop: -p.size / 2,
              }}
              initial={{ opacity: 0.9, x: 0, y: 0, scale: 1 }}
              animate={{
                opacity: 0,
                x: p.dx,
                y: p.dy,
                scale: 0.3,
              }}
              transition={{ duration: PARTICLE_MS / 1000, ease: "easeOut" }}
              onAnimationComplete={() => removeParticle(p.id)}
            />
          )
        )}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MagneticBlob({ blob, pullX, pullY, active, reducedMotion }) {
  const offsetX = useTransform(pullX, (v) => v * blob.pull);
  const offsetY = useTransform(pullY, (v) => v * blob.pull);

  if (reducedMotion) {
    return (
      <div
        className={blob.className}
        style={{ left: blob.rest.x, top: blob.rest.y, opacity: 0.55 }}
      />
    );
  }

  return (
    <motion.div
      className={blob.className}
      style={{
        left: blob.rest.x,
        top: blob.rest.y,
        x: offsetX,
        y: offsetY,
        opacity: 0.65,
      }}
    >
      {/* Ambient drift resumes when idle (no pointer pull) */}
      <motion.div
        className="h-full w-full rounded-full"
        animate={
          active
            ? { x: 0, y: 0 }
            : {
                x: blob.ambient.x,
                y: blob.ambient.y,
              }
        }
        transition={
          active
            ? { type: "spring", stiffness: 60, damping: 20 }
            : {
                duration: blob.ambient.duration,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      />
    </motion.div>
  );
}
