import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

function XIcon({ size = 14 }) {
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

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="container-content flex flex-col items-center gap-5 py-10 text-center sm:gap-6 sm:py-12">
        {/* Name */}
        <p className="text-lg font-semibold text-gradient">{personalData.name}</p>

        {/* Open-to-work status pill */}
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-ink-muted backdrop-blur-sm sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="truncate">Open to Work · Full-time Opportunities</span>
        </div>

        {/* Nav links — stack on narrow phones, wrap on larger */}
        <nav
          className="flex max-w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2"
          aria-label="Footer"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-11 inline-flex items-center text-sm text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons + email */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn !h-11 !w-11"
            aria-label="GitHub"
          >
            <Github size={16} strokeWidth={2} />
          </Link>
          <Link
            href={personalData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn !h-11 !w-11"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} strokeWidth={2} />
          </Link>
          <Link
            href={personalData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn !h-11 !w-11"
            aria-label="X"
          >
            <XIcon size={14} />
          </Link>
          <a
            href={`mailto:${personalData.email}`}
            className="social-btn !h-11 !w-11"
            aria-label="Email"
          >
            <Mail size={16} strokeWidth={2} />
          </a>
        </div>

        {/* Location */}
        <p className="max-w-md px-2 text-xs text-ink-dim sm:text-sm">
          📍 Nagpur, India · Open to Remote / Relocation
        </p>

        {/* Recruiter CTA */}
        <p className="max-w-lg px-2 text-sm leading-relaxed text-ink-muted">
          Open to{" "}
          <span className="text-gradient font-medium">
            Frontend, Full-Stack &amp; Web3/Blockchain
          </span>{" "}
          roles — let&apos;s talk!
        </p>

        {/* Built with */}
        <p className="text-xs text-ink-dim">Built with Next.js · {year}</p>
      </div>
    </footer>
  );
}
