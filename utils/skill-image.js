import css from "/public/svg/skills/css.svg";
import figma from "/public/svg/skills/figma.svg";
import html from "/public/svg/skills/html.svg";
import git from "/public/svg/skills/git.svg";
import canva from "/public/svg/skills/canva.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mysql from "/public/svg/skills/mysql.svg";
import svelte from "/public/svg/skills/svelte.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import react from "/public/svg/skills/react.svg";
import jira from "/public/svg/skills/jira.svg";
import prisma from "/public/svg/skills/prisma.svg";
import vercel from "/public/vercel.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import solidity from "/public/svg/skills/solidity.svg";
import nodejs from "/public/svg/skills/nodejs.svg";
import hardhat from "/public/svg/skills/hardhat.svg";
import nextjs from "/public/svg/skills/next.svg";
import typescript from "/public/svg/skills/typescript.svg";
import shadcn from "/public/svg/skills/shadcn.svg";
import nestjs from "/public/svg/skills/nestjs.svg";
import ethers from "/public/svg/skills/ethers.svg";
import web3js from "/public/svg/skills/web3js.svg";
import metamask from "/public/svg/skills/metamask.svg";
import foundry from "/public/svg/skills/foundry.svg";
import ipfs from "/public/svg/skills/ipfs.svg";
import mongodb from "/public/svg/skills/mongodb.svg";
import github from "/public/svg/skills/github.svg";
import postman from "/public/svg/skills/postman.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().trim();

  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next.js":
    case "nextjs":
    case "next":
      return nextjs;
    case "tailwind":
    case "tailwind css":
      return tailwind;
    case "shadcn/ui":
    case "shadcn":
      return shadcn;
    case "svelte":
      return svelte;
    case "vitejs":
    case "vite":
      return vitejs;
    case "nodejs":
    case "node.js":
      return nodejs;
    case "nestjs":
    case "nest.js":
      return nestjs;
    case "solidity":
      return solidity;
    case "hardhat":
      return hardhat;
    case "foundry":
      return foundry;
    case "ethers.js":
    case "ethers":
      return ethers;
    case "web3.js":
    case "web3js":
      return web3js;
    case "metamask":
      return metamask;
    case "ipfs":
      return ipfs;
    case "prisma":
      return prisma;
    case "mongodb":
      return mongodb;
    case "mysql":
      return mysql;
    case "postgresql":
    case "postgres":
      return postgresql;
    case "git":
      return git;
    case "github":
      return github;
    case "figma":
      return figma;
    case "jira":
      return jira;
    case "postman":
      return postman;
    case "canva":
      return canva;
    case "vercel":
      return vercel;
    default:
      return null;
  }
};
