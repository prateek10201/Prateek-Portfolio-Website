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
      <p className="mb-3">
        Graduated with a Master’s in Computer Science from{" "}
        <b>Clemson University</b> and bringing over a year of experience as a
        software developer, I specialize in <b>Java</b>, <b>Python</b>, and{" "}
        <b>Web Technologies</b>. My passion lies in building{" "}
        <b>Full-Stack Applications</b>,{" "}
        <b>Integrating AI with Backend Systems (APIs)</b>, automation tools, and
        data processing solutions. I’ve worked as a Software Developer at{" "}
        <b>Daedalus Cybernetics</b>, built responsive websites. Before that,
        worked at <b>Cognizant</b>, where I optimized and migrated legacy XML
        code to Python scripts, and at <b>PlayerOrbit</b>, where I led the
        development of a RESTful Authentication service for an EdTech gaming
        system, I am driven by innovation and efficiency. Eager to contribute to
        impactful projects and collaborate with dynamic teams!
      </p>
    </motion.section>
  );
}
