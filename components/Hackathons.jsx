"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getReadyHackathons } from "@/utils/data/hackathons";
import HackathonCard from "@/components/HackathonCard";

const ease = [0.16, 1, 0.3, 1];

export default function Hackathons() {
  const items = getReadyHackathons();
  const [active, setActive] = useState(null);
  const single = items.length === 1;

  if (!items.length) return null;

  return (
    <section id="hackathons" className="section-pad relative z-10">
      <div className="container-content">
        <motion.div
          className="mb-12 max-w-xl md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">Hackathons</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Hackathons & Extracurricular
          </h2>
        </motion.div>

        <div
          className={
            single
              ? "mx-auto max-w-xl"
              : "grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          }
          onMouseLeave={() => setActive(null)}
        >
          {items.map((item, index) => {
            const isForward = active === index;
            const isRecessed = active !== null && active !== index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease }}
              >
                <HackathonCard
                  item={item}
                  isForward={isForward}
                  isRecessed={isRecessed}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setActive(null);
                    }
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
