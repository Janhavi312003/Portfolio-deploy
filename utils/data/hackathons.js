/**
 * Hackathons & extracurricular — only complete, visitor-ready entries.
 * Add a new object here when details are confirmed; incomplete drafts must not
 * use TODO placeholders in live fields (they will be filtered out).
 */

export const hackathons = [
  {
    id: 1,
    event: "Rootstock Developer Portal — Open Source Contribution",
    organizer: "Rootstock (RSK)",
    date: "May 2026",
    description:
      "Contributed to the official Rootstock Developer Portal (dev.rootstock.io) by submitting pull requests against rsksmart/devportal — reviewed and merged into main by the Rootstock maintainer team. Added the Rootstock DeFi Developer Guide (oracle integration, AMM basics, token standards, and security patterns) to the official docs tree.",
    result: "Merged into main",
    tags: ["Rootstock", "Open Source", "Documentation", "Web3"],
    mergedPrs: [
      {
        label: "Merged PR #480",
        url: "https://github.com/rsksmart/devportal/pull/480",
      },
    ],
    github: "https://github.com/Janhavi312003/devportal",
    githubLabel: "Fork",
    profile: "https://github.com/Janhavi312003?tab=repositories",
    profileLabel: "GitHub repos",
    demo: "",
    blog: "https://how-layer-2-works-on-ethereum.hashnode.dev/layer-2-future-of-ethereum-optimism-arbitrum-and-polygon-zkevm",
    blogTitle:
      "Layer 2: The Future of Ethereum — Optimism, Arbitrum & Polygon zkEVM",
    blogLabel: "Read the blog post",
  },
];

/** True when link is a real http(s) URL (not empty / TODO placeholder). */
export function hasHackathonLink(url) {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("TODO")) return false;
  return /^https?:\/\//i.test(trimmed);
}

function isPlaceholderText(value) {
  if (typeof value !== "string") return true;
  const trimmed = value.trim();
  if (!trimmed) return true;
  return /^TODO\b/i.test(trimmed);
}

/**
 * Only render entries with a real event name + description.
 * Incomplete drafts never reach the live page.
 */
export function getReadyHackathons(list = hackathons) {
  return list.filter(
    (item) =>
      !isPlaceholderText(item.event) &&
      !isPlaceholderText(item.organizer) &&
      !isPlaceholderText(item.description)
  );
}
