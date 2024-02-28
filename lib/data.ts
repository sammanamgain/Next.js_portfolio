import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Engineer",
    location: "Kathmandu,Nepal",
    description:
      "I graduated after four years of studying in university. Learned computer fundamental like Networking,OS,Theory of computation,Wed development and machine learning",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Advanced Node,MongodB and Express js ",
    location: "Orlando, FL",
    description:
      "I have also completed the Advanced MEN(MongoDB,Express and Node) from Udemy ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "High School",
    location: "Houston, TX",
    description:
      "I have completed High School on Science faculty from Nist college,kathmandu",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Math word euqation generation",
    description:
      "using the t5 transformer model, i have developed the platform which will generate the equation give the question in text format and solves it",
    tags: ["React", "Next.js", "RL", "Tailwind", "Transformer"],
    imageUrl:
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  },
  {
    title: "Math word euqation generation",
    description:
      "using the t5 transformer model, i have developed the platform which will generate the equation give the question in text format and solves it",
    tags: ["React", "Next.js", "RL", "Tailwind", "Transformer"],
    imageUrl:
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  },
  {
    title: "Math word euqation generation",
    description:
      "using the t5 transformer model, i have developed the platform which will generate the equation give the question in text format and solves it",
    tags: ["React", "Next.js", "RL", "Tailwind", "Transformer"],
    imageUrl:
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "flask",

  "MongoDB",
  "Redux",

  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
