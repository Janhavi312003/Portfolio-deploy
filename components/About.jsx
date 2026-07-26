"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import SectionHeading from "@/components/SectionHeading";

const HIGHLIGHTS = [
  {
    label: "Blockchain Dev",
    ring: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400",
  },
  {
    label: "Web3",
    ring: "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    label: "Open to work",
    ring: "bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500",
  },
  {
    label: "Full Stack",
    ring: "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400",
  },
];

export default function About() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="about" className="section-pad relative z-10 overflow-hidden">
      <div className="container-content">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex justify-center lg:justify-start">
            {/* Subtle hex / node network behind the photo — decorative only */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] lg:left-36"
              viewBox="0 0 400 400"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="aboutNetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#aboutNetGrad)" strokeWidth="1">
                <polygon points="200,40 260,75 260,145 200,180 140,145 140,75" />
                <polygon points="200,180 260,215 260,285 200,320 140,285 140,215" />
                <polygon points="260,75 320,110 320,180 260,215 200,180 200,110" />
                <polygon points="140,75 200,110 200,180 140,215 80,180 80,110" />
                <circle cx="200" cy="40" r="3" fill="url(#aboutNetGrad)" stroke="none" />
                <circle cx="260" cy="145" r="3" fill="url(#aboutNetGrad)" stroke="none" />
                <circle cx="140" cy="145" r="3" fill="url(#aboutNetGrad)" stroke="none" />
                <circle cx="200" cy="320" r="3" fill="url(#aboutNetGrad)" stroke="none" />
                <circle cx="320" cy="180" r="2.5" fill="url(#aboutNetGrad)" stroke="none" />
                <circle cx="80" cy="180" r="2.5" fill="url(#aboutNetGrad)" stroke="none" />
                <line x1="200" y1="40" x2="320" y2="110" opacity="0.5" />
                <line x1="200" y1="40" x2="80" y2="110" opacity="0.5" />
                <line x1="320" y1="180" x2="260" y2="285" opacity="0.45" />
                <line x1="80" y1="180" x2="140" y2="285" opacity="0.45" />
              </g>
            </svg>

            <motion.div
              className="relative"
              animate={reducedMotion ? { y: 0 } : { y: [0, -10, 0] }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 3.5, ease: "easeInOut", repeat: Infinity }
              }
            >
              <motion.div
                className="absolute -inset-5 rounded-full bg-accent-gradient blur-2xl"
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? { opacity: 0.2 }
                    : { opacity: [0.18, 0.32, 0.18] }
                }
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 3.5, ease: "easeInOut", repeat: Infinity }
                }
              />

              <div className="relative rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[3px] shadow-glow">
                <div className="relative h-44 w-44 overflow-hidden rounded-full bg-canvas sm:h-60 sm:w-60 md:h-72 md:w-72">
                  {/* TODO: replace /public/about-photo.jpg with a real photo (must stay different from hero-photo.jpg) */}
                  <Image
                    src="/about-photo.jpg"
                    alt={`${personalData.name} — Blockchain developer portrait for About section`}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 240px, 288px"
                    className="object-cover object-center"
                    priority={false}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-8">
              {personalData.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {HIGHLIGHTS.map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-full border border-transparent p-[1px] text-xs font-medium sm:text-sm ${chip.ring}`}
                >
                  <span className="block rounded-full bg-canvas-soft/95 px-4 py-1.5 text-ink-muted backdrop-blur-sm">
                    {chip.label}
                  </span>
                </span>
              ))}
              {/* Credibility signal — concrete blockchain proof, same chip row */}
              {/* <span className="rounded-full border border-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[1px] text-xs font-medium sm:text-sm">
                <span className="block rounded-full bg-canvas-soft/95 px-4 py-1.5 text-ink-muted backdrop-blur-sm">
                  3 blockchain projects shipped
                </span>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
