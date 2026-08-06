/**
 * Certifications & courses — ordered by relevance to Full-Stack / Web3 / Blockchain roles.
 * credentialId and credentialUrl optional; omit date when unknown.
 */

export const certifications = [
  {
    id: 1,
    title: "Advanced Web3 Wallet Security",
    issuer: "Cyfrin Updraft",
    date: "March 2026",
    credentialId: "G7C3FFA0ZCQF",
    credentialUrl:
      "https://profiles.cyfrin.io/u/janhavi/achievements/advanced-web3-wallet-security",
  },
  {
    id: 2,
    title: "Full-Stack Web3 Development Crash Course",
    issuer: "Cyfrin Updraft",
    date: "March 2026",
    credentialId: "YO3AI42YT1NK",
    credentialUrl:
      "https://profiles.cyfrin.io/u/janhavi/achievements/full-stack-web3-development-crash-course",
  },
  {
    id: 3,
    title: "Blockchain Basics",
    issuer: "Cyfrin Updraft",
    date: "July 2025",
    credentialId: "BCQ958XSP387",
    credentialUrl:
      "https://profiles.cyfrin.io/u/janhavi/achievements/blockchain-basics",
  },
  {
    id: 4,
    title: "Blockchain Fundamentals",
    issuer: "101 Blockchains",
    date: "September 2024",
    credentialId: "116603342",
    credentialUrl:
      "https://www.credential.net/fbfc117c-eeaf-4b63-810b-9d53e5b127cb",
  },
  {
    id: 5,
    title: "Bitcoin Enterprise Course Certificate",
    issuer: "BSV Academy",
    date: "June 2024",
    credentialId: "5f0f52c0bdb94435e26c6b504e7513ea",
    credentialUrl:
      "https://academy.bsvblockchain.org/student/certificate/5f0f52c0bdb94435e26c6b504e7513ea",
  },
  {
    id: 6,
    title: "Bitcoin Script Course Certificate",
    issuer: "BSV Academy",
    date: "June 2024",
    credentialId: "5cf0b0751a223522c722f87bc8a9628d",
    credentialUrl:
      "https://academy.bsvblockchain.org/student/certificate/5cf0b0751a223522c722f87bc8a9628d",
  },
  {
    id: 7,
    title: "Google Cloud Computing Fundamentals",
    issuer: "Google Cloud Skill Boost",
    date: "",
    credentialId: "",
    credentialUrl: "",
  },
];

/** True when credentialUrl is a real http(s) verification link (not empty / TODO). */
export function hasCredentialUrl(url) {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("TODO")) return false;
  return /^https?:\/\//i.test(trimmed);
}
