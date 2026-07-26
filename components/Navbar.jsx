"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-glass"
            : "bg-transparent"
        }`}
      >
        <nav className="container-content flex h-16 min-w-0 items-center justify-between gap-3">
          <Link
            href="/"
            className="min-w-0 shrink truncate text-lg font-bold tracking-tight text-gradient md:text-xl"
            onClick={() => setOpen(false)}
          >
            {personalData.name.split(" ")[0]}
            <span className="text-ink">.</span>
          </Link>

          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    active === link.id
                      ? "text-white"
                      : "text-ink-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200 ${
                      active === link.id ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, #8B5CF6, #D946EF, #22D3EE)",
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-3 !py-2 text-xs sm:inline-flex md:!px-4 md:!py-2.5 md:text-sm"
            >
              <FileDown size={16} strokeWidth={2} />
              Resume
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink lg:hidden"
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
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 z-50 flex h-full w-[min(20rem,85vw)] flex-col border-l border-white/10 bg-canvas-soft/95 p-6 backdrop-blur-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-gradient text-lg font-bold">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                        active === link.id
                          ? "bg-white/10 text-white"
                          : "text-ink-muted hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

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
        )}
      </AnimatePresence>
    </>
  );
}
