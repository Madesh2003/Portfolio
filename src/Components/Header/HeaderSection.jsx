import React from "react";
import Navbar from "./Navbar";
import { animate, delay, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      ease: 'easeInOut',
    },
  },
};

const letterVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const titlevariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
      ease: 'easeInOut'
    },
  },
};

const riarrowvariants = {
  initial: {
  x: 10,
  opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildre:0.1,
      repeat: Infinity,
      repeatType:"reverse",
      repeatDelay: 1,
      ease: 'easeInOut'
    }
  },
 
}

const codebox = {
  initial: {
    x: 500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      staggerChildren: 0.1
}
  }
}

const HeaderSection = () => {
  const splitString = (str) => str.split("");

  const name = splitString("Madesh M");

  return (
    <div className="text-white min-h-screen bg-[url('src/assets/hero.svg')] bg-center bg-no-repeat bg-cover border-b border-[#6F4CC1] ">
      <Navbar />
    <div className="grid h-[800px] gap-5 content-center max-2xl:grid-cols-2 max-3xl:grid-cols-2 max-xl:grid-cols-2  max-lg:grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-1 max-sm:justify-items-center md:justify-items-center relative overflow-hidden px-[6rem] max-sm:px-[2rem] max-sm:mt-1 max-md:mt-1 max-lg:pt-24 ">
    <motion.div
        variants={titlevariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center h-fit space-y-7 self-center justify-self-center  "
      >
        <p className="max-3xl:text-4xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl font-semibold">
          Hello There I'm{" "}
          <motion.span
            className="uppercase font-bold text-violet-600 "
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {name.map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </p>
        <h3 className="max-3xl:text-4xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl font-semibold">
          Web Developer
        </h3>
        <div className="flex space-x-5 max-3xl:text-4xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
          <a href="https://github.com/Madesh2003" target="_blank" className="hover:text-violet-600 duration-500"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/madesh2003/" target="_blank"  className="hover:text-violet-600 duration-500"><FaLinkedin /></a>     
        </div>
        <div className="px-5 py-3 max-sm:px-3 max-sm:py-2 hover:text-violet-600 hover:bg-white duration-500 border w-fit rounded-[25px]">
          <a href="https://drive.google.com/file/d/1F7CdhaH-EyeXm-VgSXT_EcyIUbsNwRPf/view?usp=drive_link" target="_blank" className="flex flex-row items-center font-semibold uppercase tracking-wider max-3xl:text-xl max-2xl:text-xl max-xl:text-lg max-lg:text-lg max-md:text-lg max-sm:text-[12px]">
           <p>Get Resume</p> 
           <motion.p
           variants={riarrowvariants}
           initial="initial"
           animate="animate"
           className="text-2xl max-sm:text-xl"><MdKeyboardDoubleArrowRight /></motion.p>
          </a>
        </div>
      </motion.div>
      <motion.div
      variants={codebox}
      initial="initial"
      animate="animate"
      className="self-center rounded-lg bg-gradient-to-r from-[#0D1224] to-[#0A0D37] border border-[#152155] h-fit w-fit max-sm:mb-14 max-md:mb-14 max-lg:mb-14 ">
        <div className="flex space-x-2 border-b border-b-[#312E81] px-8 py-5 ">
          <div className="bg-[#F87171] h-3 w-3 rounded-full"></div>
          <div className="bg-[#FB923C] h-3 w-3 rounded-full"></div> 
          <div className="bg-[#BBF7D0] h-3 w-3 rounded-full"></div>
        </div>
        <div className="py-5 px-8 max-3xl:text-base max-2xl:text-base max-xl:text-base max-lg:text-base max-md:text-base max-sm:text-[12px] ">
          <code>
            <span className="text-red-600">const</span> <span>Developer</span> <span className="text-red-600">=</span> <span className="text-[#F1D700]">&#123;</span><br />
            <span className="pl-6">name:</span> <span className="text-[#A5FF84]">'Madesh M'</span><span>,</span><br />
            <span className="pl-6">skills:</span> <span className="text-[#F1D700]">&#123;</span><br />
            <span className="pl-9">web_skills:</span> <span className="text-gray-300">[</span><span className="text-[#A5FF84]">'HTML', 'CSS', 'JavaScript', 'ReactJS'</span><br />
            <span className="pl-9 text-[#A5FF84]">'Bootstrap', 'TailwindCSS', 'MUI', 'Redux', 'ExpressJS', </span>
            <span className="pl-9 text-[#A5FF84]">'NodeJS', 'MySQL', 'MongoDB', 'AWS', 'Git'</span><span className="text-gray-300">]</span><br />
            <span className="pl-9">soft_skills:</span> <span className="text-gray-300">[</span><span className="text-[#A5FF84]">'Adaptability', 'Teamwork',</span><br />
            <span className="pl-9 text-[#A5FF84]">'problemsolver'</span><span className="text-gray-300">]</span><br />
            <span className="pl-6 text-[#F1D700]">&#125;;</span><br />
            <span className="pl-6">AreaOfInterest:</span> <span className="text-gray-300">[</span><span className="text-[#A5FF84]">'Web and App Development',</span>< br/>
            <span className="pl-6 text-[#A5FF84]">'Data Structures'</span><span className="text-gray-300">]</span><br />
            <span className="text-[#F1D700]">&#125;;</span>
          </code>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default HeaderSection;
