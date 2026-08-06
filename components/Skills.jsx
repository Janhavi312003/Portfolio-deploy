"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsByCategory } from "@/utils/data/skills";
import { getSkillBlurb } from "@/utils/data/skill-blurbs";

const ease = [0.16, 1, 0.3, 1];

export default function Skills() {
  const [active, setActive] = useState(null);
  const marquee = skillsByCategory.flatMap((g) => g.skills);

  return (
    <section id="skills" className="section-pad relative z-10 overflow-hidden">
      {/* Asymmetric warm band — breaks uniform card-stack rhythm */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-gradient-to-l from-accent-coral/10 via-accent-gold/5 to-transparent max-md:hidden"
        aria-hidden="true"
      />

      <div className="container-content relative">
        <div className="mb-12 grid items-end gap-8 md:mb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -28, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="eyebrow mb-4">Skills</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Tools I work with
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              A living stack across frontend, backend, and Web3 — presented as a
              working vocabulary, not a badge wall.
            </p>
          </motion.div>

          <motion.div
            className="surface-panel relative overflow-hidden p-5 sm:p-6"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
          >
            <p className="font-mono-accent text-[0.65rem] tracking-[0.16em] text-ink-dim uppercase">
              Currently hovering
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active || "idle"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-3 min-h-[4.5rem]"
              >
                <p className="font-display text-2xl font-semibold text-ink">
                  {active || "Pick a technology"}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  {active
                    ? getSkillBlurb(active)
                    : "Hover or focus a skill to read a one-line note."}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mono tag strips by category — not pill badges */}
        <div className="space-y-10">
          {skillsByCategory.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[10rem_1fr] md:gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.08,
                ease,
              }}
            >
              <h3 className="font-mono-accent text-xs tracking-[0.16em] text-accent-gold uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <button
                      type="button"
                      className="skill-mono-tag"
                      onMouseEnter={() => setActive(skill)}
                      onFocus={() => setActive(skill)}
                      onMouseLeave={() => setActive(null)}
                      onBlur={() => setActive(null)}
                    >
                      {skill}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continuous marquee texture under the section */}
      <div className="relative mt-16 border-y border-white/10 bg-surface/40 py-3">
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track gap-8 pr-8">
            {[...marquee, ...marquee].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="font-mono-accent shrink-0 text-xs tracking-[0.14em] text-ink-dim uppercase"
              >
                {skill}
                <span className="ml-8 text-accent-coral">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
