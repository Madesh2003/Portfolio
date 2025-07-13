"use client"

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[45%] -right-6 sm:right-0 h-1.5 bg-purple-600 z-50 w-14 rotate-90 border-[0.1px] border-gray-400 rounded-full"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgressBar