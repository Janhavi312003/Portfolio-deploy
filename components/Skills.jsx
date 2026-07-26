"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Blocks, Wrench } from "lucide-react";
import { skillsByCategory } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import SectionHeading from "@/components/SectionHeading";

const CATEGORY_ICONS = {
  frontend: Code2,
  backend: Blocks,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
      <div className="container-content">
        <SectionHeading eyebrow="Skills" title="What I Work With" />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsByCategory.map((group, groupIndex) => {
            const Icon = CATEGORY_ICONS[group.id] || Code2;
            return (
              <motion.div
                key={group.id}
                className="glass-card gradient-border p-6 md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: groupIndex * 0.1 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-cyan">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const img = skillsImage(skill);
                    return (
                      <div
                        key={skill}
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-ink hover:shadow-glow"
                      >
                        {img?.src ? (
                          <Image
                            src={img.src}
                            alt={`${skill} logo`}
                            width={18}
                            height={18}
                            className="h-[18px] w-[18px] object-contain"
                            aria-hidden="true"
                          />
                        ) : null}
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
