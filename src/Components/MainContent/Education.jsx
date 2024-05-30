import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Education = () => {
    const containerRef = useRef(null);
    const containerControls = useAnimation();
  
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
  
    const Educationvariants = {
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
    <div className='min-h-screen bg-[url("src/assets/section.svg")] bg-cover bg-center bg-no-repeat border-b border-[#6F4CC1] '>
      <motion.div
        ref={containerRef}
        className="max-sm:px-[2rem] px-[6rem]"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        <motion.div
          animate={containerControls}
          variants={Educationvariants}
          className="flex items-center justify-center relative top-[100px]"
        >
          <div className="bg-gradient-to-r from-[#0D1224] to-[#0A0D37] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
          <p className="text-white font-semibold rounded-lg text-2xl tracking-wider bg-gradient-to-r from-[#0A0D37] to-[#0D1224] border border-[#312E81] py-4 px-7 shadow-lg uppercase w-fit">
           Education
          </p>
          <div className="bg-gradient-to-r from-[#0A0D37] to-[#0D1224] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
        </motion.div>
    <div className='flex justify-center items-center flex-col h-[700px] max-sm:h-[800px] space-y-5 '>
      <div className='h-[150px] w-[600px] max-sm:h-fit max-sm:w-[350px] rounded-xl py-[10px] px-[30px] border border-[#2A2E5A] bg-[#111124]'>
        <p className='text-center font-semibold text-[#1ED6B0] text-base max-sm:text-[12px] '>2021 - 2024</p>
        <div className='flex space-x-5 items-center h-[80px] mt-[8px]'>
            <div>
            <img src="src/assets/degree.svg" className='h-[60px] w-[60px] max-sm:h-[40px] max-sm:w-[40px] text-violet-600 ' alt="" />
            </div>
            <div className='text-white'>
                <p className='font-semibold tracking-wider text-xl max-sm:text-[14px] '>B.Sc. Information Technology</p>
                <p className='text-lg max-sm:text-[12px] '>The American College | Madurai </p>
                <p className='text-base max-sm:text-[12px] '>GPA - <span className='text-[#1ED6B0]'>7.6</span></p> 
            </div>
        </div>
      </div>
      <div className='h-[150px] w-[600px] max-sm:h-fit max-sm:w-[350px] rounded-xl py-[10px] px-[30px] border border-[#2A2E5A] bg-[#111124]'>
        <p className='text-center font-semibold text-[#1ED6B0] text-base max-sm:text-[12px] '>2019 - 2021</p>
        <div className='flex space-x-5 items-center h-[80px] mt-[8px]'>
            <div>
            <img src="src/assets/degree.svg" className='h-[60px] w-[60px] max-sm:h-[40px] max-sm:w-[40px] text-violet-600 ' alt="" />
            </div>
            <div className='text-white'>
                <p className='font-semibold tracking-wider text-xl max-sm:text-[14px] uppercase '>higher secondary</p>
                <p className='text-lg max-sm:text-[12px] '>Nehru Vidhya Salai Hr.Sec.Shool | Madurai </p>
                <p className='text-base max-sm:text-[12px] '>Percentage - <span className='text-[#1ED6B0]'>81%</span></p> 
            </div>
        </div>
      </div>
    </div>
        </motion.div>
    </div>
  )
}

export default Education
