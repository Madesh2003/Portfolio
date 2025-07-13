"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";

import React, { useEffect } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = {
    damping: 20,
    stiffness: 100,
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="pointer-glass" style={{ translateX: cursorXSpring, translateY: cursorYSpring }} />
      <motion.div className="pointer-inner shadow-xl" style={{ translateX: cursorXSpring, translateY: cursorYSpring }} />
    </>
  );
};

export default CustomCursor;
