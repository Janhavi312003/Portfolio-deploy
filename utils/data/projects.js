/**
 * Project portfolio data.
 * Edit this file to update card copy + detail pages.
 * Each project needs a unique `slug` for /projects/[slug]
 */

export const projects = [
  {
    id: 1,
    slug: "agrichain",
    name: "AgriChain",
    tagline: "Decentralized marketplace connecting farmers and buyers on-chain",
    category: "Blockchain",
    description:
      "AgriChain is a decentralized agricultural marketplace connecting farmers directly with buyers using blockchain technology. It ensures transparency, fair pricing, and secure transactions on the Base Sepolia testnet.",
    // TODO: expand/refine fullDescription paragraphs later
    fullDescription: [
      "AgriChain is a decentralized agricultural marketplace that lets farmers list produce and buyers purchase directly through smart contracts — cutting out opaque middlemen and recording every trade on-chain.",
      "The problem it tackles is trust and price fairness in farm-to-market commerce: traditional channels often lack transparent pricing and settlement. AgriChain uses blockchain settlement so both sides can verify what was paid and when.",
      "It's built for farmers, local buyers, and anyone exploring real-world Web3 commerce on a public testnet (Base Sepolia) before mainnet readiness.",
    ],
    role: "Sole full-stack & smart-contract developer — designed the UI in Next.js, wrote Solidity contracts, wired wallet flows with Wagmi, and deployed the dApp to Vercel on Base Sepolia.",
    image:
      "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    repo: "https://github.com/Janhavi312003/AgriChain",
    live: "https://agri-chain-seven.vercel.app/",
    techStack: ["Next.js", "Solidity", "Tailwind CSS", "Wagmi"],
    features: [
      "On-chain listing and purchase flows for agricultural products",
      "Wallet-connected UI with Wagmi for secure transaction signing",
      "Transparent pricing and settlement recorded on Base Sepolia",
      "Responsive Next.js frontend with Tailwind styling",
      "Smart-contract-backed marketplace logic in Solidity",
      "Deployed frontend ready for demo and recruiter walkthroughs",
    ],
    challenges: [
      {
        challenge:
          "Coordinating frontend state with async wallet confirmations so users always knew if a tx was pending, confirmed, or failed.",
        solution:
          "Built clear loading/success/error UI states around Wagmi hooks and waited on receipt events before updating marketplace views.",
      },
      {
        challenge:
          "Keeping contract interactions safe on a public testnet without confusing first-time Web3 users.",
        solution:
          "Surfaced network checks, readable error messages, and guided connect-wallet prompts before any write call.",
      },
      {
        challenge:
          "Balancing a polished product UI with the constraints of early smart-contract iteration.",
        solution:
          "Kept the Solidity surface area focused on core list/buy paths and iterated the UI independently against deployed contract ABIs.",
      },
    ],
  },
  {
    id: 2,
    slug: "ragora",
    name: "Ragora",
    tagline: "Knowledge-base platform that turns PDFs into searchable vector embeddings",
    category: "Full Stack / AI",
    description:
      "A full-stack knowledge-base platform where users upload PDFs and search their content through vector embeddings.",
    fullDescription: [
      "Ragora is a full-stack knowledge-base platform that lets users upload PDFs, process their contents into searchable vector embeddings, and manage documents from a protected dashboard.",
      "Its layered FastAPI backend routes requests through routers, services, and Prisma to PostgreSQL with pgvector. The document pipeline extracts text with pypdf, chunks it, generates embeddings with Sentence Transformers, and stores the results for search.",
      "The Next.js and TypeScript frontend uses a custom dark design-token system, authentication context, protected routes, and live document-status tracking.",
    ],
    role: "Built the full-stack platform across its FastAPI and PostgreSQL backend, vector-search document pipeline, and Next.js dashboard.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=500",
    repo: "https://github.com/Janhavi312003/Ragora",
    live: "",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Sentence Transformers",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "PDF upload and processing into searchable vector embeddings",
      "Layered FastAPI backend with router, service, and Prisma data layers",
      "pypdf extraction, chunking, Sentence Transformer embeddings, and pgvector storage",
      "JWT authentication with bcrypt password hashing",
      "Ownership-checked REST endpoints for documents and user data",
      "Protected Next.js routes and a dashboard with live document-status tracking",
    ],
    challenges: [
      {
        challenge:
          "Turning uploaded PDFs into content that could be searched accurately and efficiently.",
        solution:
          "Built a pipeline that extracts text with pypdf, splits it into chunks, generates embeddings with Sentence Transformers, and stores them in PostgreSQL through pgvector.",
      },
      {
        challenge:
          "Keeping documents and API resources private to their owners.",
        solution:
          "Implemented JWT authentication, bcrypt password hashing, and ownership checks on REST endpoints before returning or modifying document data.",
      },
      {
        challenge:
          "Making asynchronous document processing visible and understandable in the frontend.",
        solution:
          "Built protected dashboard views with auth context and live document-status tracking so users can follow each upload through processing.",
      },
    ],
  },
  {
    id: 3,
    slug: "chainpay",
    name: "ChainPay",
    tagline: "Smart-contract payments with transparent on-chain settlement",
    category: "Blockchain",
    description:
      "A blockchain‑based payment application that enables secure and transparent transactions using smart contracts, exploring decentralized payment workflows.",
    fullDescription: [
      "ChainPay is a blockchain payment app focused on secure, transparent transfers powered by smart contracts rather than opaque payment intermediaries.",
      "It explores how everyday payment UX can map onto decentralized settlement — users initiate a transfer, the contract enforces the rules, and the ledger records the outcome.",
      "Useful as a portfolio piece for payment/Web3 interviews and as a sandbox for experimenting with Solidity + Web3.js payment flows.",
    ],
    role: "Designed and implemented the payment smart contracts, JavaScript/Web3.js client integration, and the deployed demo experience on Vercel.",
    image: "/svg/Chainpay.jpg",
    repo: "https://github.com/Janhavi312003/ChainPay",
    live: "https://chain-pay-15p3.vercel.app/",
    techStack: ["Blockchain", "Solidity", "Web3.js", "JavaScript"],
    features: [
      "Smart-contract-enforced payment transfers",
      "Transparent on-chain transaction records",
      "Web3.js client for wallet-connected payments",
      "Clear success/failure feedback after each transfer",
      "Deployed demo suitable for live walkthroughs",
      "Focused payment workflow without unnecessary product noise",
    ],
    challenges: [
      {
        challenge:
          "Making payment confirmation UX understandable for users who aren't used to gas fees and pending states.",
        solution:
          "Added explicit pending → confirmed messaging and disabled repeat submits until the prior transaction resolved.",
      },
      {
        challenge:
          "Preventing accidental double-sends when users clicked pay multiple times under latency.",
        solution:
          "Locked the action button during in-flight transactions and keyed UI updates off transaction hashes.",
      },
      {
        challenge:
          "Keeping Solidity payment logic minimal while still demonstrating a real end-to-end flow.",
        solution:
          "Scoped the contract to core transfer semantics and invested polish in the client layer where interview storytelling is clearest.",
      },
    ],
  },
  {
    id: 4,
    slug: "token-swap",
    name: "Token Swap",
    tagline: "Hardhat-powered token swap sample with deployable contracts",
    category: "Blockchain",
    description:
      "This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.",
    fullDescription: [
      "Token Swap is a Hardhat-centered learning project that demonstrates sample contracts, tests, and Ignition-based deployment for a basic swap flow.",
      "It solves the need for a clean reference when practicing Solidity tooling — compile, test, and deploy without a bloated monorepo.",
      "Aimed at developers building confidence with Hardhat before larger DeFi-style apps.",
    ],
    role: "Implemented the sample contracts, tests, Ignition deploy module, and the Next.js demo surface for interacting with the deployment.",
    image:
      "https://images.unsplash.com/photo-1639728758333-1deb626aab8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx0b2tlbnN3YXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    repo: "https://github.com/Janhavi312003/TokenSwap",
    live: "https://token-swap-71xu-ef9naoxoc-janhavis-projects-94ce3bb4.vercel.app/",
    techStack: ["Next.js", "JavaScript"],
    features: [
      "Sample Solidity contract for swap-related logic",
      "Automated contract tests in the Hardhat suite",
      "Hardhat Ignition module for repeatable deploys",
      "Next.js front end for demo interaction",
      "Clear project layout separating contracts and UI",
    ],
    challenges: [
      {
        challenge:
          "Getting comfortable with Hardhat Ignition deploy modules versus ad-hoc scripts.",
        solution:
          "Followed Ignition's module pattern so redeploys stayed deterministic and easier to demo.",
      },
      {
        challenge:
          "Keeping the front end pointed at the latest deployed address after local resets.",
        solution:
          "Centralized deployed addresses in config updated after each Ignition run.",
      },
    ],
  },
  {
    id: 5,
    slug: "nest-backend",
    name: "Nest Backend",
    tagline: "Modular NestJS REST API with structured routing",
    category: "Backend",
    description:
      "A REST API backend built with NestJS, demonstrating modular architecture, structured routing, and database integration for scalable full-stack apps.",
    fullDescription: [
      "Nest Backend is a REST API built with NestJS to practice modular architecture, controllers/services, and clean routing for scalable full-stack apps.",
      "It focuses on backend structure recruiters look for — separation of concerns, typed TypeScript modules, and a clear path to database integration.",
      "Built as a foundation that a React/Next front end can consume for CRUD-style features.",
    ],
    role: "Architected the NestJS modules, routes, and TypeScript service layer end to end.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=60&w=500",
    repo: "https://github.com/Janhavi312003/nest-backend",
    live: "",
    techStack: ["NestJS", "TypeScript"],
    features: [
      "Modular NestJS project structure",
      "Structured REST routing via controllers",
      "TypeScript-first service layer",
      "Clear separation between modules for scale",
      "Foundation ready for database integration",
    ],
    challenges: [
      {
        challenge:
          "Learning NestJS module boundaries without over-engineering a small API.",
        solution:
          "Started with feature modules only where routes/services naturally clustered, then expanded.",
      },
      {
        challenge:
          "Keeping TypeScript types honest across DTO and service boundaries.",
        solution:
          "Used Nest DTO patterns early so invalid payloads failed fast at the controller edge.",
      },
    ],
  },
  {
    id: 6,
    slug: "todo-list",
    name: "Todo List",
    tagline: "Full-stack todos with auth and status filtering",
    category: "Web",
    description:
      "This is a full-stack todo app that lets users create accounts, manage their tasks, and filter them by status. I built it to practice my skills with Next.js 15 and modern React patterns, but its also fully functional and ready for use.",
    fullDescription: [
      "A full-stack todo application where users can create accounts, manage tasks, and filter by status — built to practice Next.js 15 and modern React patterns while staying production-usable.",
      "It solves the classic productivity CRUD problem with auth and clear task state, useful both as a learning vehicle and a real personal tool.",
      "Built for anyone who wants a clean Next.js reference for auth + list management.",
    ],
    role: "Built the full stack in Next.js — auth flows, task CRUD, status filters, and deployment on Vercel.",
    image:
      "https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    repo: "https://github.com/Janhavi312003/Todo",
    live: "https://todo-beta-rust.vercel.app/",
    techStack: ["Next.js", "JavaScript"],
    features: [
      "User account creation and session handling",
      "Create, update, and organize tasks",
      "Filter todos by status",
      "Responsive UI for mobile and desktop",
      "Deployed and usable end-to-end on Vercel",
    ],
    challenges: [
      {
        challenge:
          "Keeping list UI snappy while syncing authenticated CRUD operations.",
        solution:
          "Optimistic updates where safe, with rollback on failed requests so the UI stayed responsive.",
      },
      {
        challenge:
          "Designing filters that stayed correct after edits and deletes.",
        solution:
          "Derived filtered views from a single source-of-truth task list instead of duplicating state per filter.",
      },
    ],
  },
  {
    id: 7,
    slug: "portfolio-website",
    name: "Portfolio Website",
    tagline: "Personal portfolio for Full Stack & Web3 opportunities",
    category: "Web",
    description: "My personal portfolio built with Next.js.",
    fullDescription: [
      "This portfolio site presents my Full Stack and Blockchain work to recruiters — projects, experience, skills, and a clear call to contact.",
      "It solves the need for a single, modern destination that shows both Web and Web3 capability without a cluttered template look.",
      "Built for hiring managers reviewing entry-level Full Stack / Blockchain candidates.",
    ],
    role: "Designed and developed the entire site in Next.js with Tailwind, Framer Motion, and a dark Web3-inspired visual system.",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    repo: "https://github.com/Janhavi312003/Portfolio-deploy",
    live: "https://portfolio-tau-eight-23.vercel.app/",
    techStack: ["Next.js", "JavaScript"],
    features: [
      "Dark Web3-inspired visual design system",
      "Responsive sections for About, Skills, Experience, Projects, Contact",
      "Project detail pages with deep-dive case studies",
      "Framer Motion interactions and scroll reveals",
      "Deployed on Vercel for always-on demos",
    ],
    challenges: [
      {
        challenge:
          "Avoiding a generic AI-looking layout while staying recruiter-clear in the first five seconds.",
        solution:
          "Locked a consistent SectionHeading pattern, glass cards, and one accent gradient reused across CTAs and chips.",
      },
      {
        challenge:
          "Tailwind v4 naming collisions (e.g. color `base` vs font-size `text-base`) breaking desktop text color.",
        solution:
          "Renamed design tokens to `canvas` and used explicit size utilities where needed so colors stayed readable.",
      },
    ],
  },
  {
    id: 8,
    slug: "weather-app",
    name: "Weather App",
    tagline: "Real-time weather UI powered by public APIs",
    category: "Web",
    description:
      "A weather application that fetches real-time weather data using public APIs and displays current conditions with a clean and responsive UI.",
    fullDescription: [
      "A weather app that fetches live conditions from public APIs and presents them in a clean, responsive interface.",
      "It solves the need for a simple front-end API project — fetch, handle loading/error states, and render readable weather data.",
      "Built as a fundamentals showcase for JavaScript, HTML, and CSS.",
    ],
    role: "Built the full front end — API integration, UI layout, and responsive styling.",
    image: "/svg/weather.jpg",
    repo: "https://github.com/Janhavi312003/Weather-App",
    live: "https://weather-phi-eight-12.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS", "Weather API"],
    features: [
      "Real-time weather data from a public API",
      "Clean display of current conditions",
      "Responsive layout across devices",
      "Loading and error handling for network requests",
      "Lightweight vanilla JS implementation",
    ],
    challenges: [
      {
        challenge:
          "Handling slow or failed API responses without a blank screen.",
        solution:
          "Added explicit loading and error UI so users always knew the app state.",
      },
      {
        challenge:
          "Formatting API payloads into readable weather summaries.",
        solution:
          "Normalized response fields into a small view-model before rendering.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function hasLiveDemo(live) {
  return typeof live === "string" && live.trim().length > 0;
}
