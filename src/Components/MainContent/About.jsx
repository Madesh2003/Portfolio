import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import section from '../../assets/section.svg'

const About = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

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

  const AboutVariants = {
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
  return (
   <div className="min-h-screen grid grid-cols-1 border-b border-[#6F4CC1] bg-center bg-cover bg-no-repeat" 
   style={{ backgroundImage: `url(${section})` }}>
     <motion.div
      ref={ref}
      className="max-sm:px-[2rem] px-[6rem] "
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
      ref={ref}
       animate={controls}
       variants={AboutVariants}
      className="flex items-center justify-center relative top-24 ">
        <div className="bg-gradient-to-r from-[#0D1224] to-[#0A0D37] to-75% h-[4px] w-[200px] max-sm:w-[50px] max-md:w-[50px] " />
        <p className="text-white font-semibold rounded-lg text-2xl tracking-wider bg-gradient-to-r from-[#0A0D37] to-[#0D1224] border border-[#312E81] py-4 px-7 shadow-lg uppercase w-fit max-lg:text-xl max-md:text-lg max-sm:text-lg ">
          About Me
        </p>
        <div className="bg-gradient-to-r from-[#0A0D37] to-[#0D1224] to-75% h-[4px] w-[200px] max-sm:w-[50px] max-md:w-[50px] " />
      </motion.div>

      <div className="grid grid-cols-2 h-full max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 ">
        <span className=" text-white text-2xl max-sm:text-xl self-center max-lg:pt-10 max-md:pt-10 max-sm:pt-10 ">
          Hi, I'm <span className="text-violet-600 font-bold ">Madesh M</span>,
          a MERN stack developer with a degree in IT. I specialize in JavaScript
          and love creating dynamic web applications. I'm passionate about
          learning new technologies and solving complex problems. I aim to make
          the web more open and accessible. I'm seeking exciting job
          opportunities that align with my skills. Let's connect!
        </span>
        <div>
      
        </div>
      </div>
    </motion.div>
   </div>
  );
};

export default About;
