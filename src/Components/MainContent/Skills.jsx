import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import javascript from '../../assets/skills/javascript.svg';
import bootstrap from '../../assets/skills/bootstrap.svg';
import tailwind from '../../assets/skills/tailwind.svg';
import materialui from '../../assets/skills/materialui.svg';
import framer_motion from '../../assets/skills/framer_motion.svg';
import react from '../../assets/skills/react.svg';
import nodejs from '../../assets/skills/nodejs.svg';
import express from '../../assets/skills/Express.svg';
import mysql from '../../assets/skills/mysql.svg';
import mongoDB from '../../assets/skills/mongoDB.svg';
import git from '../../assets/skills/git.svg';
import aws from '../../assets/skills/aws.svg';
import figma from '../../assets/skills/figma.svg';

const Skills = () => {
  const skills = [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: javascript },
    { name: 'Bootstrap', img: bootstrap },
    { name: 'Tailwind', img: tailwind },
    { name: 'MaterialUI', img: materialui },
    { name: 'Framer Motion', img: framer_motion },
    { name: 'React', img: react },
    { name: 'NodeJS', img: nodejs },
    { name: 'Express', img: express },
    { name: 'MySQL', img: mysql },
    { name: 'MongoDB', img: mongoDB },
    { name: 'Git', img: git },
    { name: 'AWS', img: aws },
    { name: 'Figma', img: figma }
  ];

  const containerRef = useRef(null);
  const containerControls = useAnimation();
  const sliderControls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerControls.start("visible");
        } else {
          containerControls.start("hidden");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerControls]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 1,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 1,
      },
    },
  };

  const animateSlider = () => {
    sliderControls.start({
      x: -(skills.length * 160),
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    if (!isPaused) {
      animateSlider();
    } else {
      sliderControls.stop();
    }
  }, [isPaused, sliderControls]);

  return (
    <div className="min-h-screen grid grid-cols-1 bg-[#0D1224] border-b border-[#6F4CC1] ">
      <motion.div
        ref={containerRef}
        className="grid grid-rows-2 max-sm:px-[2rem] px-[6rem]"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        <motion.div
          animate={containerControls}
          variants={skillVariants}
          className="flex items-center justify-center relative -top-[50px]"
        >
          <div className="bg-gradient-to-r from-[#0D1224] to-[#0A0D37] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
          <p className="text-white font-semibold rounded-lg text-2xl tracking-wider bg-gradient-to-r from-[#0A0D37] to-[#0D1224] border border-[#312E81] py-4 px-7 shadow-lg uppercase w-fit">
            skills
          </p>
          <div className="bg-gradient-to-r from-[#0A0D37] to-[#0D1224] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
        </motion.div>
        <div className="overflow-x-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={sliderControls}
            className="flex space-x-10"
            onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}
          >
            {[...skills, ...skills, ...skills].map((data, index) => (
              <motion.a
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                key={index}
                href=""
                className="bg-[#11152C] mt-[30px] h-[120px] w-[120px] px-[40px] py-[60px] rounded-lg flex flex-col justify-center space-y-5 items-center border-t border-[#5C41A9] hover:border shadow-xl"
              >
                <img src={data.img} className="w-[50px] h-[50px]" alt={data.name} />
                <p className={data.name === "Framer Motion" ? 'text-white font-semibold text-xs' : 'text-white font-semibold text-sm'}>{data.name.toUpperCase()}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
