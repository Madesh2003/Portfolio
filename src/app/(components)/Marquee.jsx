'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 100,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4">
      <motion.div
        className="inline-block text-white text-xl font-semibold"
        variants={marqueeVariants}
        animate="animate"
      >
        
      </motion.div>
    </div>
  );
};

export default Marquee;
