"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/Data/data";

export const FloatingNav = ({
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 sm:px-8 sm:py-4 px-6 py-3 items-center justify-center space-x-4",
          className
        )}>
        {NAV_ITEMS.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={() => {
              const el = document.querySelector(navItem.link)
              if(el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "relative text-neutral-50 items-center flex sm:space-x-1 space-x-0.5 hover:text-[#aa48ca] transition-colors duration-500"
            )}>
            <span className="block text-xs sm:text-sm">{navItem.name}</span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
