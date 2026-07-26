"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { hasLiveDemo } from "@/utils/data/projects";

export default function ProjectDetail({ project }) {
  return (
    <motion.article
      className="section-pad relative z-10 pt-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-content max-w-4xl">
        <Link
          href="/#projects"
          className="btn-secondary mb-8 inline-flex !px-4 !py-2 text-xs"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Projects
        </Link>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan">
          {project.category}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          <span className="text-gradient">{project.name}</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
          {project.tagline}
        </p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-canvas-elevated shadow-glow sm:mt-10">
          <Image
            src={project.image}
            alt={`${project.name} project banner`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs sm:text-sm"
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
              className="btn-primary !px-4 !py-2 text-xs sm:text-sm"
            >
              <ExternalLink size={14} strokeWidth={2} />
              Live Demo
            </a>
          ) : null}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Overview
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base sm:leading-8">
            {project.fullDescription.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 glass-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink sm:text-xl">My Role</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            {project.role}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-dim sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Key Features
          </h2>
          <ul className="mt-4 space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Challenges &amp; Solutions
          </h2>
          <ul className="mt-4 space-y-4">
            {project.challenges.map((item) => (
              <li
                key={item.challenge}
                className="glass-card gradient-border p-5 sm:p-6"
              >
                <p className="text-sm font-medium text-accent-cyan sm:text-base">
                  Challenge
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {item.challenge}
                </p>
                <p className="mt-3 text-sm font-medium text-violet-300 sm:text-base">
                  How I solved it
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          <Link href="/#projects" className="btn-secondary !px-4 !py-2 text-xs">
            <ArrowLeft size={14} strokeWidth={2} />
            Back to Projects
          </Link>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs"
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
            >
              <ExternalLink size={14} strokeWidth={2} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
