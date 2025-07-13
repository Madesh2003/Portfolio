"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import React from "react";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { ABOUT_SECTION } from "@/Data/data";

const AboutSection = () => {
  const { TITLE, DESC, PROFILE } = ABOUT_SECTION;
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useTransform(tiltY, [-60, 60], [20, -20]);
  const rotateY = useTransform(tiltX, [-60, 60], [-20, 20]);

  const cardRef = useRef(null);

  function handlePointerMove(e) {
    const bounds = cardRef.current.getBoundingClientRect();
    const dx = e.clientX - (bounds.left + bounds.width / 2);
    const dy = e.clientY - (bounds.top + bounds.height / 2);
    tiltX.set(dx);
    tiltY.set(dy);
  }

  function resetTilt() {
    animate(tiltX, 0, { type: "spring", stiffness: 180, damping: 18 });
    animate(tiltY, 0, { type: "spring", stiffness: 180, damping: 18 });
  }

  return (
    <motion.div id="about" className="h-screen text-white-01 py-10 relative">
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
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:text-3xl md:text-2xl text-lg font-bold text-center md:mb-10 mb-5"
      >
        {TITLE}
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-10 min-lg:items-center h-full px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-sm:order-2"
        >
          <p className="lg:text-lg md:text-base text-sm leading-relaxed">
            {DESC}
          </p>
        </motion.div>

        <div className="w-full flex items-center justify-center py-8">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            className="
          group relative rounded-xl
          transition-transform duration-200
          shadow-xl
          [transform-style:preserve-3d]
        "
          >
            <span
              className="
            pointer-events-none
            absolute inset-0 rounded-xl
            bg-gradient-to-br from-transparent via-white/30 to-transparent
            opacity-0 group-hover:opacity-100
            blur-lg
            transition-opacity duration-300
          "
              style={{ transform: "translateZ(-1px)" }}
            />

            <motion.div
              initial={{ filter: "grayscale(100%)" }}
              whileHover={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.3 }}
              className="
            overflow-hidden rounded-xl
            will-change-transform
          "
            >
              <Image
                src={PROFILE}
                alt="Profile photo"
                priority
                className="object-cover min-lg:w-80 min-lg:h-80 max-md:h-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
