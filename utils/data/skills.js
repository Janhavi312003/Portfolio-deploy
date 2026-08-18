export const skillsByCategory = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "ViteJS",
    ],
  },
  {
    id: "backend",
    title: "Backend / Blockchain",
    skills: [
      "NodeJS",
      "NestJS",
      "Solidity",
      "Hardhat",
      "Foundry",
      "Ethers.js",
      "Web3.js",
      "MetaMask",
      "IPFS",
      "Python",
      "FastAPI",
      "Prisma ORM",
      "MongoDB",
      "PostgreSQL",
      "pgvector",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Jira",
      "Postman",
      "Canva",
      "Vercel",
    ],
  },
];

// Keep flat list for any legacy consumers
export const skillsData = skillsByCategory.flatMap((group) => group.skills);
