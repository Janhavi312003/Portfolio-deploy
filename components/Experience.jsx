"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/utils/data/experiences";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
      <div className="container-content">
        <SectionHeading eyebrow="Experience" title="Where I've Grown" />

        {/* Single-column timeline until large screens — avoids cramped alternating cards on tablet */}
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-2 top-2 left-[11px] w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70 lg:left-1/2 lg:-translate-x-px"
            aria-hidden="true"
          />

          <ul className="space-y-8 sm:space-y-10">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-10"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <span
                    className="absolute left-[5px] top-6 z-10 flex h-3.5 w-3.5 items-center justify-center lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <span className="absolute h-3.5 w-3.5 animate-pulse rounded-full bg-accent-cyan/40 blur-[2px]" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-glow-cyan" />
                  </span>

                  <div
                    className={`ml-10 min-w-0 lg:ml-0 ${
                      isLeft
                        ? "lg:col-start-1 lg:pr-8"
                        : "lg:col-start-2 lg:pl-8"
                    }`}
                  >
                    <article className="glass-card gradient-border p-5 text-left sm:p-6 md:p-8">
                      <div className="mb-3 flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-violet">
                          <Briefcase size={18} strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-ink sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium text-accent-cyan">
                            {item.company}
                          </p>
                          <p className="mt-1 text-xs text-ink-dim">{item.duration}</p>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2.5">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-fuchsia" />
                            <span className="min-w-0">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
