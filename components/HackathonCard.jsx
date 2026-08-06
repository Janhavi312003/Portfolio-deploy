"use client";

import { Github, ExternalLink, GitPullRequest, PenLine, Trophy } from "lucide-react";
import { hasHackathonLink } from "@/utils/data/hackathons";

/**
 * Reusable hackathon / extracurricular card.
 * Pass only complete entries — never mount with TODO placeholder copy.
 */
export default function HackathonCard({
  item,
  isForward = false,
  isRecessed = false,
  onMouseEnter,
  onFocus,
  onBlur,
}) {
  const mergedPrs = (item.mergedPrs || []).filter((pr) =>
    hasHackathonLink(pr?.url)
  );
  const showGithub = hasHackathonLink(item.github);
  const showDemo = hasHackathonLink(item.demo);
  const showProfile = hasHackathonLink(item.profile);
  const showBlog = hasHackathonLink(item.blog);
  const showResult =
    typeof item.result === "string" &&
    item.result.trim().length > 0 &&
    !item.result.trim().startsWith("TODO");
  const showContributionLinks =
    mergedPrs.length > 0 || showGithub || showDemo || showProfile;

  return (
    <article
      data-cursor="hover"
      className={`depth-card flex h-full flex-col p-6 outline-none md:p-8 ${
        isForward ? "is-forward" : isRecessed ? "is-recessed" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-coral">
          <Trophy size={20} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-semibold text-ink">
            {item.event}
          </h3>
          <p className="font-mono-accent mt-1 text-xs tracking-[0.08em] text-accent-gold uppercase">
            {item.organizer}
          </p>
          {item.date?.trim() && !item.date.trim().startsWith("TODO") ? (
            <p className="mt-1 text-xs text-ink-dim">{item.date}</p>
          ) : null}
        </div>
      </div>

      {showResult ? (
        <p className="font-mono-accent mb-3 text-[0.65rem] tracking-[0.14em] text-accent-coral uppercase">
          {item.result}
        </p>
      ) : null}

      <p className="flex-1 text-sm leading-relaxed text-ink-muted">
        {item.description}
      </p>

      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {item.tags
            .filter((tag) => typeof tag === "string" && !tag.startsWith("TODO"))
            .map((tag) => (
              <span
                key={tag}
                className="font-mono-accent text-[0.7rem] tracking-[0.06em] text-ink-dim"
              >
                {tag}
              </span>
            ))}
        </div>
      ) : null}

      {showContributionLinks ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {mergedPrs.map((pr) => (
            <a
              key={pr.url}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-xs"
            >
              <GitPullRequest size={14} strokeWidth={2} />
              {pr.label || "Merged PR"}
            </a>
          ))}
          {showGithub ? (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs"
            >
              <Github size={14} strokeWidth={2} />
              {item.githubLabel || "Code"}
            </a>
          ) : null}
          {showProfile ? (
            <a
              href={item.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs"
            >
              <Github size={14} strokeWidth={2} />
              {item.profileLabel || "GitHub"}
            </a>
          ) : null}
          {showDemo ? (
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-xs"
            >
              <ExternalLink size={14} strokeWidth={2} />
              Demo
            </a>
          ) : null}
        </div>
      ) : null}

      {showBlog ? (
        <div className="mt-5 border-t border-white/10 pt-4">
          <a
            href={item.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-accent-gold/35 hover:bg-white/[0.06]"
          >
            <PenLine
              size={15}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-accent-gold"
            />
            <span className="min-w-0">
              <span className="font-mono-accent block text-[0.65rem] tracking-[0.12em] text-accent-gold uppercase">
                {item.blogLabel || "Read the blog post"}
              </span>
              {item.blogTitle ? (
                <span className="mt-1 block text-xs leading-relaxed text-ink-muted group-hover:text-ink">
                  {item.blogTitle}
                </span>
              ) : null}
            </span>
          </a>
        </div>
      ) : null}
    </article>
  );
}
