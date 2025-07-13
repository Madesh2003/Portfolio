"use client";

import React from "react";
import { Spotlight } from "../(UIcomponents)/Spotlight";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "../(lib)/utils";
import { TextGenerateEffect } from "../(UIcomponents)/TextGenerativeEffect";
import { HoverBorderGradient } from "../(UIcomponents)/HoverBorderGradient";
import { motion } from "framer-motion";
import FadeInSection from "../(components)/FadeInSection";
import { HERO_SECTION } from "@/Data/data";

const HeroSection = () => {
  const { TITLE, DESC1, DESC2, RESUME, RIGHT_ARROW_ICON } = HERO_SECTION;
  return (
    <>
      <Spotlight
        className="lg:left-80 lg:top-28 lg:h-[80vh] lg:w-[50vw]"
        fill="#bf77f6"
      />
      <GridPattern
        width={45}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <FadeInSection delay={0.1}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="home"
          className="flex flex-col justify-center items-center relative h-screen"
        >
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent pointer-events-none" />
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="text-white-01 uppercase tracking-widest sm:text-xs text-10 text-center max-w-100">
              {TITLE}
            </p>
            <TextGenerateEffect
              words={DESC1}
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            />
            <TextGenerateEffect
              words={DESC2}
              className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
            />
            <HoverBorderGradient>
              <div className="flex items-center sm:gap-3 gap-1 max-sm:text-sm">
                <span>{RESUME}</span>{" "}
                <span className="relative top-0.5">{RIGHT_ARROW_ICON}</span>
              </div>
            </HoverBorderGradient>
          </div>
        </motion.div>
      </FadeInSection>
    </>
  );
};

export default HeroSection;
