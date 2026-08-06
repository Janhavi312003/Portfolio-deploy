"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Desktop-only morphing cursor. Disabled on touch / narrow / reduced-motion.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const wide = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const on = fine.matches && wide.matches && !coarse.matches && !reduced.matches;
      setEnabled(on);
      document.body.classList.toggle("has-custom-cursor", on);
      if (!on) setVisible(false);
    };

    sync();
    fine.addEventListener("change", sync);
    coarse.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      coarse.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const hit = t.closest(
        "a, button, [role='button'], input, textarea, .skill-mono-tag, [data-cursor='hover']"
      );
      setHovering(!!hit);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full border border-[#F5F0EA]"
        animate={{
          width: hovering ? 44 : 16,
          height: hovering ? 44 : 16,
          backgroundColor: hovering
            ? "rgba(255,122,89,0.85)"
            : "rgba(245,240,234,0.15)",
          borderColor: hovering ? "#FF7A59" : "#F5F0EA",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />
    </motion.div>
  );
}
