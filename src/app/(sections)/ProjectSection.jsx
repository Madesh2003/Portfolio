"use client";
import React from "react";
import GridItem from "../(UIcomponents)/GlowingEffect";
import { motion } from "framer-motion";
import { PROJECT_SECTION } from "@/Data/data";

const ProjectsSection = () => {
  const { TITLE, PROJECTS_LIST } = PROJECT_SECTION;
  return (
    <div
      id="projects"
      className="w-full min-h-screen max-h-full text-white py-10 flex flex-col items-center gap-8 relative"
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:text-3xl md:text-2xl text-xl font-bold text-center md:mb-10 mb-5"
      >
        {TITLE}
      </motion.h1>

      <ul className="grid min-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-5">
        {PROJECTS_LIST.map((details, ind) => (
          <GridItem
            key={ind}
            icon={details.IMG}
            title={details.TITLE}
            description={details.DESC}
            stack={details.STACK}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
