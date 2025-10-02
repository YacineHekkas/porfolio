import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"

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
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
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
] as const

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
    imageUrl: "/crafty/crafty_mobile_application.png",
    images: [
      "/crafty/1.png",
"/crafty/2.png",
"/crafty/3.png",
"/crafty/4.png"    ,
"/crafty/5.png",
"/crafty/6.png",
"/crafty/7.png",
"/crafty/8.png",
],
  },
  {
    title: "EaseShop",
    description:
      "An online shopping app built with Flutter, inspired by platforms like Amazon. This app provides users with a seamless shopping experience, including product browsing, search functionality, and a user-friendly interface.",
    tags: ["Flutter", "Firebase", "getX"],
    imageUrl: "/EaseShop/EaseShop33.png",
    fulldescription: `EaseShop an Online Shopping App
    
Overview  
Experience the next generation of online shopping with a state-of-the-art Flutter-powered application, designed to compete with industry leaders like Amazon. More than just a shopping app, this platform delivers a seamless, high-performance experience, making browsing, purchasing, and managing orders effortless and enjoyable.  

Features  
- Product Browsing: Explore an extensive catalog of products with high-resolution images, interactive descriptions, and real-time availability updates.  
- Smart Search: Quickly find what you're looking for with intelligent keyword suggestions and lightning-fast search results.  
- User Accounts: Register, log in, and enjoy personalized recommendations, saved favorites, and exclusive deals.  
- Shopping Cart: Easily manage your cart—add, remove, or save items for later, with real-time pricing and stock updates.  
- Order Management: Track your orders in real-time, manage purchases, and access order history effortlessly.  
- Responsive Design: Optimized for both Android and iOS devices, delivering a smooth and immersive shopping experience.  

Tech Stack  
- Frontend: Flutter (Dart)  
- Backend: Firebase, Node.js  
- Database: Firestore  

This app isn't just about shopping—it's about redefining convenience and style in the digital marketplace. 🚀
  `,
    images: [
      "EaseShop/1.png",
      "EaseShop/2.png",
      "EaseShop/3.png",
      "EaseShop/4.png",
      "EaseShop/5.png",
    ],
  },
  {
    title: "MagFlow",
    description:
      "A robust, all-in-one web and mobile platform designed to streamline store management processes. Enhances operational efficiency by enabling seamless inventory tracking, order management, and sales monitoring.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Flutter"],
    imageUrl: "/magflow/1.jpg",
    fulldescription: `
    ## Overview
    MagFlow is a robust, all-in-one web and mobile platform designed to streamline store management processes for the Higher School of Computer Science Sidi Bel Abbès. As part of the multidisciplinary project Arcana, MagFlow enhances operational efficiency by enabling seamless inventory tracking, order management, and sales monitoring. With its responsive design and intuitive interface, MagFlow provides real-time updates and ensures easy accessibility for both store personnel and managers.
    ## Features
    - **Inventory Management:** Track stock levels in real time with automated updates.
    - **Order Processing:** Manage incoming and outgoing orders with streamlined workflows.
    - **Sales Monitoring:** Access detailed reports and insights on sales performance.
    - **User Roles:** Separate access levels for store managers, staff, and administrators.
    - **Cross-Platform Access:** Optimized for both web and mobile use, ensuring flexibility.
    - **Real-Time Updates:** Ensure accurate, up-to-date information across the system.

    ## Tech Stack
    - * **Frontend:** Flutter (Dart), React (for web)
    - * **Backend:** Node.js, GraphQL, Firebase
    - * **Database:** postgreSQL, MongoDB
  `,
    images: ["/magflow/1.jpg", "/magflow/2.jpg"],
  },
] as const

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
] as const
