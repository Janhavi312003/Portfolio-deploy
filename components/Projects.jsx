"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects, hasLiveDemo } from "@/utils/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="container-content">
        <SectionHeading eyebrow="Projects" title="What I've Built" />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="glass-card gradient-border group relative flex flex-col overflow-hidden p-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              {/* Card opens /projects/[slug]; Code / Live Demo stay independent */}
              <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${project.name} details`}
              />

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-elevated">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-0 flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* z-20 so Code / Live Demo sit above the card Link */}
                <div className="relative z-20 mt-5 flex flex-wrap gap-3">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !px-4 !py-2 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} strokeWidth={2} />
                      Code
                    </a>
                  ) : null}

                  {hasLiveDemo(project.live) ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-4 !py-2 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} strokeWidth={2} />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
