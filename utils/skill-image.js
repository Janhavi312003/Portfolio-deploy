import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import html from '/public/svg/skills/html.svg';
import c from '/public/svg/skills/c.svg';
import git from '/public/svg/skills/git.svg';
import canva from '/public/svg/skills/canva.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mysql from '/public/svg/skills/mysql.svg';
import svelte from '/public/svg/skills/svelte.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import react from '/public/svg/skills/react.svg';
import jira from '/public/svg/skills/jira.svg';
import prisma from '/public/svg/skills/prisma.svg';
import vercel from '/public/vercel.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import solidity from '/public/svg/skills/solidity.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import hardhat from '/public/svg/skills/hardhat.svg';
import next from '/public/svg/skills/next.svg';



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'c':
            return c;
        case 'canva':
            return canva;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'svelte':
            return svelte;
        case 'tailwind':
            return tailwind;
        case 'mysql':
            return mysql;
        case 'vitejs':
            return vitejs;
        case 'next':
                return next; 
        case 'git':
                return git;  
        case 'figma':
                return figma;
        case 'vercel':
                return vercel;   
        case 'react':
                return react;
        case 'jira':
                return jira;  
        case 'prisma':
                return prisma; 
        case 'postgresql':
                return postgresql; 
        case 'solidity':
                return solidity;
        case 'nodejs':
                return nodejs;
        case 'hardhat':
                return hardhat;
    }
}