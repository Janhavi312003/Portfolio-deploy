export const skillBlurbs = {
  HTML: "Structure for every UI I've built — from Timchain internship screens to AgriChain and this portfolio.",
  CSS: "Layout, responsive systems, and visual polish across Next.js and SvelteKit projects.",
  JavaScript: "Day-to-day language for frontend logic, API wiring, and Web3 client flows.",
  TypeScript: "Typed app surfaces in Nest Backend and anywhere I want safer refactors.",
  React: "Component model behind AgriChain, Token Swap, Todo List, and this site.",
  "Next.js":
    "My default full-stack framework — AgriChain, Token Swap, Todo List, Weather App, and this portfolio.",
  Tailwind:
    "Utility-first styling for faster UI iteration on AgriChain, this portfolio, and other Next.js apps.",
  "Shadcn/UI":
    "Component primitives for this portfolio's UI — buttons, cards, and the hover panel.",
  ViteJS:
    "Fast local dev/build setup for smaller React practice projects outside the Next.js apps.",

  NodeJS: "Server-side JavaScript behind Nest Backend and API-style practice work.",
  NestJS: "Modular REST API structure in my Nest Backend project.",
  Solidity:
    "Wrote and tested contracts for AgriChain, ChainPay, ICO Market, and Token Swap — where gas and security got real.",
  Hardhat:
    "Local chains, tests, and contract workflows for Token Swap and other Solidity practice.",
  Foundry:
    "Faster testing and scripting for Solidity contracts alongside Hardhat.",
  "Ethers.js":
    "Wallet and contract calls from the client — especially ChainPay and related dApp flows.",
  "Web3.js":
    "Client ↔ chain wiring for ChainPay and earlier Web3 experiment projects.",
  MetaMask:
    "Wallet connect flow for AgriChain and ChainPay demos.",
  IPFS:
    "Storing AgriChain's off-chain metadata via Pinata/IPFS instead of on-chain.",
  Prisma:
    "ORM layer for Nest Backend's database models and queries.",
  MongoDB:
    "Document store behind Nest Backend for flexible, schema-light data.",
  MySQL:
    "Relational data for practice projects needing structured, query-heavy storage.",
  Postgresql:
    "Used with the Timchain Labs stack (SvelteKit + PostgreSQL) during the blockchain internship.",

  Git: "Version control across internship work and every personal project repo.",
  GitHub: "Where all my project code lives — AgriChain, ChainPay, Token Swap, and more.",
  Figma: "Where I plan UI before writing a line of code — including Timchain collaboration.",
  Jira: "Task tracking and sprint-style collaboration during the Timchain Labs internship.",
  Postman:
    "Testing and debugging Nest Backend's REST endpoints before wiring up the frontend.",
  Canva:
    "Quick graphics and social/resume assets outside the codebase.",
  Vercel:
    "Where I host Next.js demos — AgriChain, ChainPay, Token Swap, Todo List, Weather App, and this portfolio.",
};

export function getSkillBlurb(skill) {
  const note = skillBlurbs[skill];
  if (!note) {
    return `PLACEHOLDER: add a one-line note for ${skill}.`;
  }
  if (note.startsWith("PLACEHOLDER:")) {
    return note;
  }
  return note;
}
