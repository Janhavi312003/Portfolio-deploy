"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, FileDown, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const NAV_LINKS = [
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const MORE_LINKS = [
  { href: "#hackathons", label: "Hackathons", id: "hackathons" },
  { href: "#certifications", label: "Courses", id: "certifications" },
];

const ALL_SECTION_IDS = [...NAV_LINKS, ...MORE_LINKS].map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState("");
  const moreRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ALL_SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!moreOpen) return;

    const onPointerDown = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMoreOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  const moreActive = MORE_LINKS.some((l) => l.id === active);

  return (
    <>
      <header
        className={`glass-nav fixed top-0 right-0 left-0 z-50 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <nav className="container-content flex h-16 min-w-0 items-center justify-between gap-3 md:h-[4.25rem] md:gap-4">
          <Link
            href="/"
            className="font-display min-w-0 shrink truncate text-sm font-bold tracking-[0.14em] text-ink uppercase md:text-base"
            onClick={() => setOpen(false)}
          >
            {personalData.name}
          </Link>

          <ul className="hidden items-center gap-5 lg:gap-7 xl:gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-[0.8rem] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
                    active === link.id
                      ? "text-ink"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px rounded-full transition-all duration-200 ${
                      active === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                      background: "linear-gradient(135deg, #FF7A59, #FFC65C)",
                    }}
                  />
                </a>
              </li>
            ))}

            <li className="relative" ref={moreRef}>
              <button
                type="button"
                className={`relative inline-flex items-center gap-1 text-[0.8rem] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
                  moreActive || moreOpen
                    ? "text-ink"
                    : "text-ink-dim hover:text-ink"
                }`}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                onClick={() => setMoreOpen((v) => !v)}
              >
                More
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute -bottom-1 left-0 h-px rounded-full transition-all duration-200 ${
                    moreActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #FF7A59, #FFC65C)",
                  }}
                />
              </button>

              <AnimatePresence>
                {moreOpen ? (
                  <motion.ul
                    role="menu"
                    className="absolute top-full right-0 z-50 mt-3 min-w-[11rem] overflow-hidden rounded-xl border border-white/10 bg-canvas-soft/95 py-1.5 shadow-lg backdrop-blur-xl"
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                  >
                    {MORE_LINKS.map((link) => (
                      <li key={link.id} role="none">
                        <a
                          role="menuitem"
                          href={link.href}
                          onClick={() => setMoreOpen(false)}
                          className={`block px-4 py-2.5 text-[0.8rem] font-medium transition-colors ${
                            active === link.id
                              ? "bg-white/10 text-ink"
                              : "text-ink-muted hover:bg-white/5 hover:text-ink"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] tracking-wide text-ink-dim xl:inline-flex">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>

            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !hidden !min-h-10 !px-3 !py-2 text-xs md:!inline-flex"
              aria-label="Open resume"
            >
              <FileDown size={14} strokeWidth={2} />
              Resume
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 z-50 flex h-full w-[min(20rem,85vw)] flex-col border-l border-white/10 bg-canvas-soft/95 p-6 backdrop-blur-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-[0.16em] text-ink uppercase">
                  Menu
                </span>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {[...NAV_LINKS, ...MORE_LINKS].map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active === link.id
                          ? "bg-white/10 text-ink"
                          : "text-ink-muted hover:bg-white/5 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-6 flex items-center gap-2 px-4 text-xs text-ink-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Open to opportunities
              </p>

              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto w-full"
                onClick={() => setOpen(false)}
              >
                <FileDown size={16} strokeWidth={2} />
                Get Resume
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
