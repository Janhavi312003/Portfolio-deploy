"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const HeroNetworkForm = dynamic(() => import("@/components/HeroNetworkForm"), {
  ssr: false,
  loading: () => (
    <div
      className="mx-auto aspect-square w-full max-w-[16rem] rounded-[2rem] bg-surface/60 sm:max-w-[22rem]"
      aria-hidden="true"
    />
  ),
});

const ease = [0.16, 1, 0.3, 1];

function MagneticHeadline({ children }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const x = useTransform(sx, (v) => v * 6);
  const y = useTransform(sy, (v) => v * 4);

  return (
    <motion.h1
      className="hero-headline font-display m-0 font-bold tracking-[-0.03em] text-ink"
      style={{ x, y }}
      initial={{ opacity: 0, y: 36, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease }}
      onPointerMove={(e) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.h1>
  );
}

export default function Hero() {
  const headline =
    personalData.heroHeadline || "FULL-STACK BY TRADE. BLOCKCHAIN BY CHOICE.";
  const accent = personalData.heroAccent || "WEB × WEB3 × AI";

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-x-hidden overflow-y-hidden pt-24 pb-16 md:pt-28 md:pb-20"
      aria-label="Hero"
    >
      <LiquidGlassBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,22,34,0.4)_72%,rgba(26,22,34,0.8)_100%)]" />

      <div className="container-content relative z-10 grid w-full min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="min-w-0">
          <motion.p
            className="eyebrow mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Portfolio · 2026
          </motion.p>

          <MagneticHeadline>{headline}</MagneticHeadline>

          <motion.p
            className="font-display mt-3 text-[clamp(1.05rem,3.5vw,1.75rem)] font-semibold tracking-[-0.02em] sm:mt-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
          >
            <span className="text-gradient">{accent}</span>
          </motion.p>

          <motion.div
            className="mt-7 space-y-2 sm:mt-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease }}
          >
            <p className="font-display text-base font-semibold tracking-[0.06em] text-ink uppercase sm:text-lg">
              {personalData.name}
            </p>
            <p className="font-mono-accent text-[0.7rem] font-medium tracking-[0.12em] text-accent-gold uppercase sm:text-xs">
              {personalData.designation}
            </p>
          </motion.div>

          <motion.p
            className="hero-description mt-4 max-w-md text-sm leading-relaxed sm:mt-5 sm:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease }}
          >
            {personalData.heroIntro || personalData.description}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease }}
          >
            <a href="#projects" className="btn-primary min-h-11" data-cursor="hover">
              View Work
            </a>
            <a href="#contact" className="btn-secondary min-h-11" data-cursor="hover">
              Contact
            </a>
            <div className="ml-0 flex items-center gap-2 sm:ml-1">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn !h-11 !w-11"
                aria-label="GitHub profile"
              >
                <Github size={16} strokeWidth={2} />
              </a>
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn !h-11 !w-11"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} strokeWidth={2} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="social-btn !h-11 !w-11"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[18rem] min-w-0 sm:max-w-lg lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease }}
        >
          <div
            className="pointer-events-none absolute inset-6 rounded-[2rem] bg-accent-coral/15 blur-3xl"
            aria-hidden="true"
          />
          <HeroNetworkForm />
          <p className="font-mono-accent mt-2 text-center text-[0.6rem] tracking-[0.16em] text-ink-dim uppercase sm:mt-3 sm:text-[0.65rem] sm:tracking-[0.18em]">
            Interactive network form · Web × Web3 × AI
          </p>
        </motion.div>
      </div>

      <a
        href="#about"
        className="scroll-cue absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-dim transition-colors hover:text-ink sm:bottom-6"
        aria-label="Scroll to about section"
      >
        <span className="font-mono-accent text-[0.65rem] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ArrowDown size={14} strokeWidth={2} />
      </a>
    </section>
  );
}
