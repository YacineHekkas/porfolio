"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <div className="max-w-[90%] sm:max-w-[60rem] mx-auto text-center leading-7 sm:leading-8">
      <p className="mb-6 text-sm sm:text-base">
        I am a passionate <span className="font-medium">Software Engineer</span> specializing in{" "}
        <span className="font-medium">mobile and web application development</span>. Since graduating from{" "}
        <span className="font-medium">École Supérieure en Informatique (ESI) Sidi-Bel-Abbès</span>, I have dedicated my
        career to building high-quality, scalable applications that provide real value to users.
      </p>

      <p className="mb-6 text-sm sm:text-base">
        Throughout my journey, I have developed multiple mobile and web applications, each project enhancing my
        expertise in modern technologies and best practices. My experience spans across{" "}
        <span className="font-medium">Flutter</span> for cross-platform mobile apps,{" "}
        <span className="font-medium">React</span> for dynamic web applications, and{" "}
        <span className="font-medium">NodeJS</span> for backend development.
      </p>

      <div className="mb-6">
        <p className="mb-3 text-sm sm:text-base">Through hands-on experience, I have mastered:</p>
        <div className="inline-block text-left max-w-full overflow-x-auto">
          <div className="min-w-[200px] text-[0.7rem] sm:text-base space-y-2">
            <p className="whitespace-nowrap">
              <span className="inline-block w-4 sm:w-6">✔</span> Mobile Development –{" "}
              <span className="font-medium">Flutter (Bloc, Provider, GetX)</span>,{" "}
              <span className="font-medium">Kotlin</span>, <span className="font-medium">Firebase</span>
            </p>
            <p className="whitespace-nowrap">
              <span className="inline-block w-4 sm:w-6">✔</span> Web Development –{" "}
              <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>,{" "}
              <span className="font-medium">Node.js</span>, <span className="font-medium">Laravel</span>
            </p>
            <p className="whitespace-nowrap">
              <span className="inline-block w-4 sm:w-6">✔</span> Backend & Databases –{" "}
              <span className="font-medium">PostgreSQL</span>, <span className="font-medium">MySQL</span>,{" "}
              <span className="font-medium">REST APIs</span>
            </p>
            <p className="whitespace-nowrap">
              <span className="inline-block w-4 sm:w-6">✔</span> Version Control & Deployment –{" "}
              <span className="font-medium">Git</span>, <span className="font-medium">GitHub</span>,{" "}
              <span className="font-medium">CI/CD</span>, <span className="font-medium">Docker</span>
            </p>
            <p className="whitespace-nowrap">
              <span className="inline-block w-4 sm:w-6">✔</span> Problem-Solving & Software Architecture
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base">
        Beyond technical expertise, my journey has strengthened my ability to analyze problems, optimize performance,
        and deliver user-friendly solutions. Whether it's a mobile or web application, I'm always eager to turn ideas
        into reality. <span className="italic">🚀</span>
      </p>
    </div>

      
    </motion.section>
  );
}
