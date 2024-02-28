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
    location: "",
    description:
      "I have also completed the Advanced MEN(MongoDB,Express and Node) from Udemy ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "High School",
    location: "Lainchour,kathmandu",
    description:
      "I have completed High School on Science faculty from Nist college,kathmandu",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Math equation generator and solver from word problem",
    description:
      "using the t5 transformer model, i have developed the platform which will generate the equation give the question in text format and solves it",
    tags: ["React", "Next.js", "RL", "Tailwind", "Transformer"],
    imageUrl:
      "https://www.youcubed.org/wp-content/uploads/2017/03/beautiful-math-1.jpg",
  },
  {
    title: "REAL-ESTATE MERN PROJECT",
    description:
      "Web app that simplifies property listing and search using React, MongoDB and Node.js. It supports authentication, listing management, image upload via Firebase, optimized search.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind",
      "Firebase",
      "JWT",
      "MongoDB",
    ],
    imageUrl:
      "https://assets.everspringpartners.com/fe/06/f23661be455e97d009c6ae418995/real-estate-finance.jpg",
  },
  {
    title: "Real Time chat  App using WebSockets",
    description:
      "using the webSockets in node.js which will extension over https and chat app contains jwt authentication,group chat etc",
    tags: ["React", "Node.js", "WebSockets", "Tailwind", "JWT"],
    imageUrl:
      "https://wp.disruptiveadvertising.com/wp-content/uploads/2018/11/messenging-online-retail-blog.jpg",
  },
  {
    title: "Period Tracker using Arima and Flutter",
    description:
      "Flutter app with Flask API, Firebase Auth ,Utilizes ARIMA model for cycle prediction  Features include notications, Nepali calendar, stats, symptoms tracking, and content UI for user insightsusing time series data.",
    tags: ["Flutter", "Firebase", "ARIMA", "Android Development"],
    imageUrl:
      "https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2020/06/07153546/Period-Tracking-1.jpg",
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
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
  "Rest API",

  "Pytorch",
  "NumPy",
  "Pandas",
] as const;
