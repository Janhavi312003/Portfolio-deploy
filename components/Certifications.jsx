"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications, hasCredentialUrl } from "@/utils/data/certifications";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative z-10">
      <div className="container-content">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Courses"
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const showCredential = hasCredentialUrl(cert.credentialUrl);
            const showCredentialId =
              typeof cert.credentialId === "string" &&
              cert.credentialId.trim().length > 0;

            return (
              <motion.article
                key={cert.id}
                className="glass-card gradient-border flex min-h-full flex-col p-6 md:p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="mb-2 flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-cyan">
                    <Award size={20} strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">
                        {cert.title}
                      </h3>
                      {showCredential ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 text-ink-muted transition-colors hover:border-violet-400/50 hover:text-accent-cyan hover:shadow-glow"
                          aria-label={`Verify credential: ${cert.title}`}
                        >
                          <ExternalLink size={16} strokeWidth={2} />
                        </a>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent-cyan">
                      {cert.issuer}
                    </p>
                    {cert.date?.trim() ? (
                      <p className="mt-1 text-xs text-ink-dim">{cert.date}</p>
                    ) : null}
                    {showCredentialId ? (
                      <p className="font-mono-accent mt-2 text-[0.65rem] tracking-[0.06em] text-ink-dim">
                        ID {cert.credentialId}
                      </p>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
