import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import crafty_mobile_application from "@/public/Crafty/crafty_mobile_application.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Crafty",
    description:
      "Crafty is a mobile application designed to connect users with skilled craftsmen for various jobs and makes it simple and efficient to find the right professional for the task.",
    tags: ["Flutter", "Next.js", "MongoDB", "GraphQL", "apollo"],
    fulldescription: `Crafty - Hire Craftsmen with Ease

Overview
Crafty is a Flutter-based application designed to connect users with skilled craftsmen for various jobs. Whether you need a plumber, electrician, carpenter, or any other craftsman, Crafty makes it simple and efficient to find the right professional for the task.

Features
- User Profiles: Users can create accounts to manage job requests and view their history.
- Craftsman Directory: Browse a list of available craftsmen by category and location.
- Job Posting: Easily post job requirements and get matched with suitable craftsmen.
- Chat System: Communicate with craftsmen directly within the app.
- Ratings and Reviews: Rate and review craftsmen to ensure quality services for others.
- Responsive Design: Optimized for both Android and iOS devices.

Tech Stack
- Frontend: Flutter (Dart)
- Backend: GraphQL, Firebase, Node.js
- Database: MongoDB`,
    imageUrl: crafty_mobile_application,
    images: [
      "/crafty/1.png",
      "/crafty/2.png",
      "/crafty/3.png",
      "/crafty/4.png",
      "/crafty/5.png",
      "/crafty/6.png",
      "/crafty/7.png",
      "/crafty/8.png",
    ],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    fulldescription: `
    ## Overview
    Crafty is a Flutter-based application designed to connect users with skilled craftsmen for various jobs. Whether you need a plumber, electrician, carpenter, or any other craftsman, Crafty makes it simple and efficient to find the right professional for the task.

    ## Features
    - **User Profiles:** Users can create accounts to manage job requests and view their history.
    - **Craftsman Directory:** Browse a list of available craftsmen by category and location.
    - **Job Posting:** Easily post job requirements and get matched with suitable craftsmen.
    - **Chat System:** Communicate with craftsmen directly within the app.
    - **Ratings and Reviews:** Rate and review craftsmen to ensure quality services for others.
    - **Responsive Design:** Optimized for both Android and iOS devices.

    ## Tech Stack
    - **Frontend:** Flutter (Dart)
    - **Backend:** GraphQL, Firebase, Node.js
    - **Database:** MongoDB
  `,
  images: [
    "/crafty/image1.png",
    "/crafty/image2.png",
    "/crafty/image3.png",
    "/crafty/image4.png",
  ],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    fulldescription: `
    ## Overview
    Crafty is a Flutter-based application designed to connect users with skilled craftsmen for various jobs. Whether you need a plumber, electrician, carpenter, or any other craftsman, Crafty makes it simple and efficient to find the right professional for the task.

    ## Features
    - **User Profiles:** Users can create accounts to manage job requests and view their history.
    - **Craftsman Directory:** Browse a list of available craftsmen by category and location.
    - **Job Posting:** Easily post job requirements and get matched with suitable craftsmen.
    - **Chat System:** Communicate with craftsmen directly within the app.
    - **Ratings and Reviews:** Rate and review craftsmen to ensure quality services for others.
    - **Responsive Design:** Optimized for both Android and iOS devices.

    ## Tech Stack
    - **Frontend:** Flutter (Dart)
    - **Backend:** GraphQL, Firebase, Node.js
    - **Database:** MongoDB
  `,
  images: [
    "/crafty/image1.png",
    "/crafty/image2.png",
    "/crafty/image3.png",
    "/crafty/image4.png",
  ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Flutter",
  "Java",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
