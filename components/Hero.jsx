"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, LayoutGrid, Github, Linkedin } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";
import HeroInteractiveBackground from "@/components/HeroInteractiveBackground";

function XIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.451L1.99 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TypewriterRoles({ roles }) {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || roles.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [roles, reduced]);

  return (
    <span className="relative inline-flex min-h-[1.3em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="text-gradient"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <HeroInteractiveBackground className="relative flex min-h-[100svh] items-center overflow-x-hidden section-pad pt-24 md:pt-28">
      <section className="w-full min-w-0" aria-label="Hero">
        <div className="container-content">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex min-w-0 flex-col items-start text-left lg:order-1">
              <motion.p
                className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan sm:text-sm"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
              >
                Open to work · Full Stack / Web3
              </motion.p>

              <motion.h1
                className="text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-display-sm lg:text-display"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
              >
                {personalData.name}
              </motion.h1>

              <motion.h2
                className="mt-3 text-lg font-semibold text-ink-muted sm:mt-4 sm:text-2xl md:text-3xl"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
              >
                <TypewriterRoles roles={personalData.roles} />
              </motion.h2>

              <motion.p
                className="hero-description mt-5 max-w-xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-[1rem] md:text-lg md:leading-8"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
              >
                {personalData.description}
              </motion.p>

              <motion.div
                className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
              >
                <a href="#contact" className="btn-primary">
                  <Mail size={16} strokeWidth={2} />
                  Contact me
                </a>
                <a href="#projects" className="btn-secondary">
                  <LayoutGrid size={16} strokeWidth={2} />
                  View Projects
                </a>
              </motion.div>

              <motion.div
                className="mt-7 flex items-center gap-3 sm:mt-8"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={5}
              >
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub profile"
                >
                  <Github size={18} strokeWidth={2} />
                </a>
                <a
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} strokeWidth={2} />
                </a>
                <a
                  href={personalData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="X (Twitter) profile"
                >
                  <XIcon size={16} />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="order-1 flex justify-center lg:order-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-full bg-accent-gradient opacity-30 blur-2xl sm:-inset-6 animate-pulse-glow"
                  aria-hidden="true"
                />
                <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/15 shadow-glow sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 animate-float">
                  {/* TODO: replace with /public/hero-photo.jpg — front-facing headshot */}
                  <Image
                    src={personalData.heroPhoto}
                    alt={`${personalData.name} headshot — Full Stack and Blockchain Developer`}
                    fill
                    priority
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </HeroInteractiveBackground>
  );
}
