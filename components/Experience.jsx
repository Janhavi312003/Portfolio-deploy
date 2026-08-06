"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { experienceArc, experiences } from "@/utils/data/experiences";

const ease = [0.16, 1, 0.3, 1];

/** Depth styling for fanned cards behind the active one (index 0 = front). */
const DEPTH = [
  { x: 0, y: 0, rot: 0, scale: 1, opacity: 1 },
  { x: 32, y: -40, rot: -3.5, scale: 0.95, opacity: 0.55 },
  { x: 58, y: -72, rot: -6.5, scale: 0.9, opacity: 0.32 },
];

function hasReflection(text) {
  return typeof text === "string" && text.trim().length > 0;
}

/**
 * Fanned depth deck — 2–3 cards visibly behind, headers peeking.
 * Click / dots / arrows bring a role forward; Phase 2 lift stays on the front card.
 */
export default function Experience() {
  const deck = useMemo(() => [...experiences].reverse(), []);
  const [active, setActive] = useState(0);
  const [layered, setLayered] = useState(false);
  const n = deck.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setLayered(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = (index) => {
    setActive(((index % n) + n) % n);
  };

  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  return (
    <section id="experience" className="section-pad relative z-10">
      <div className="container-content">
        <motion.div
          className="mb-12 max-w-xl md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Where I&apos;ve grown
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            A fanned stack by recency — peek what&apos;s next, then bring a role
            forward.
          </p>
          <p className="font-mono-accent mt-5 text-xs tracking-[0.08em] text-accent-gold sm:text-sm">
            {experienceArc}
          </p>
        </motion.div>

        {layered ? (
          <div className="relative mx-auto max-w-2xl pt-16 sm:pt-20">
            <div className="relative min-h-[26rem] sm:min-h-[28rem]">
              {deck.map((item, index) => {
                const depth = (index - active + n) % n;
                const visual = DEPTH[Math.min(depth, DEPTH.length - 1)];
                const isFront = depth === 0;
                // Hide cards deeper than we can fan (keep max 3 visible layers)
                if (depth >= DEPTH.length) return null;

                return (
                  <article
                    key={item.id}
                    role="button"
                    tabIndex={isFront ? 0 : 0}
                    aria-pressed={isFront}
                    aria-label={`${item.title} at ${item.company}${isFront ? " (active)" : ""}`}
                    data-cursor="hover"
                    className={`depth-card absolute inset-x-0 top-0 cursor-pointer overflow-hidden p-6 outline-none sm:p-8 ${
                      isFront ? "is-forward" : "is-fanned"
                    }`}
                    style={{
                      zIndex: n - depth,
                      ["--stack-x"]: `${visual.x}px`,
                      ["--stack-y"]: `${visual.y}px`,
                      ["--stack-rot"]: `${visual.rot}deg`,
                      ["--stack-scale"]: String(visual.scale),
                      ["--stack-opacity"]: String(visual.opacity),
                    }}
                    onClick={() => go(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        go(index);
                      }
                      if (e.key === "ArrowRight") {
                        e.preventDefault();
                        next();
                      }
                      if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        prev();
                      }
                    }}
                  >
                    {/* Peek label always readable on fanned cards */}
                    {!isFront ? (
                      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-[#2a2430] via-[#2a2430]/95 to-transparent px-6 pt-5 pb-8 sm:px-8">
                        <p className="font-display text-base font-semibold text-ink/90">
                          {item.title}
                        </p>
                        <p className="font-mono-accent mt-1 text-[0.65rem] tracking-[0.1em] text-accent-gold/80 uppercase">
                          {item.company}
                        </p>
                      </div>
                    ) : null}

                    <div className={isFront ? "" : "pt-14 opacity-40"}>
                      <ExperienceBody item={item} showDetails={isFront} />
                    </div>
                  </article>
                );
              })}
            </div>

            <DeckNav
              active={active}
              count={n}
              labels={deck.map((d) => d.title)}
              onPrev={prev}
              onNext={next}
              onSelect={go}
            />
          </div>
        ) : (
          <div className="mx-auto max-w-xl">
            <ul className="flex flex-col gap-4">
              {deck.map((item, index) => {
                const isFront = active === index;
                return (
                  <li key={item.id}>
                    <article
                      role="button"
                      tabIndex={0}
                      aria-pressed={isFront}
                      aria-label={`${item.title} at ${item.company}`}
                      data-cursor="hover"
                      className={`depth-card cursor-pointer p-5 outline-none ${
                        isFront ? "is-forward" : "is-recessed"
                      }`}
                      onClick={() => go(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          go(index);
                        }
                      }}
                    >
                      <ExperienceBody item={item} showDetails />
                    </article>
                  </li>
                );
              })}
            </ul>

            <DeckNav
              active={active}
              count={n}
              labels={deck.map((d) => d.title)}
              onPrev={prev}
              onNext={next}
              onSelect={go}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function DeckNav({ active, count, labels, onPrev, onNext, onSelect }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-4 md:mt-12">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-accent-coral/50 hover:text-accent-coral"
        aria-label="Previous role"
        onClick={onPrev}
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>

      <div className="flex items-center gap-2" role="tablist" aria-label="Experience roles">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={labels[i] || i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={labels[i] || `Role ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-250 ${
              active === i
                ? "w-7 bg-accent-gradient"
                : "w-2.5 bg-white/25 hover:bg-white/45"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-accent-coral/50 hover:text-accent-coral"
        aria-label="Next role"
        onClick={onNext}
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>
    </div>
  );
}

function ExperienceBody({ item, showDetails = true }) {
  const reflection = hasReflection(item.reflection);

  return (
    <>
      <div className="mb-4 flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-coral">
          <Briefcase size={18} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
            {item.title}
          </h3>
          <p className="font-mono-accent mt-1 text-xs tracking-[0.08em] text-accent-gold uppercase">
            {item.company}
          </p>
          <p className="mt-1 text-xs text-ink-dim">{item.duration}</p>
        </div>
      </div>

      {showDetails && reflection ? (
        <blockquote className="experience-reflection mb-5">
          <span className="experience-reflection-mark" aria-hidden="true">
            “
          </span>
          <p>{item.reflection}</p>
        </blockquote>
      ) : null}

      {showDetails ? (
        <ul className="space-y-2.5">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-coral"
                aria-hidden="true"
              />
              <span className="min-w-0">{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
