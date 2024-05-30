import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Projects = () => {
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

  const projectVariants = {
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
    <div className='min-h-screen bg-[url("src/assets/section.svg")] bg-center bg-cover bg-no-repeat border-b border-[#6F4CC1] '>
      <motion.div
        ref={containerRef}
        className="max-sm:px-[2rem] px-[6rem]"
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
      >
        <motion.div
          animate={containerControls}
          variants={projectVariants}
          className="flex items-center justify-center relative top-[100px]"
        >
          <div className="bg-gradient-to-r from-[#0D1224] to-[#0A0D37] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
          <p className="text-white font-semibold rounded-lg text-2xl tracking-wider bg-gradient-to-r from-[#0A0D37] to-[#0D1224] border border-[#312E81] py-4 px-7 shadow-lg uppercase w-fit">
            Projects
          </p>
          <div className="bg-gradient-to-r from-[#0A0D37] to-[#0D1224] to-75% h-[4px] w-[200px] max-sm:w-[100px]" />
        </motion.div>

        <div className="grid grid-cols-3 gap-6 content-center justify-items-center h-fit max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 max-2xl:grid-cols-2 max-3xl:grid-cols-3 mt-[200px] mb-[100px]">
          <div className="bg-[#0c0e27] h-auto w-[400px] max-lg:h-[600px] max-sm:w-[300px] rounded-xl border border-[#312E81] overflow-hidden">
            <div className="">
              <img
                src="src/assets/project1.jpg"
                className="rounded-t-xl h-[200px] w-full object-cover"
                alt="Project Image"
              />
            </div>
            <div className="p-4 text-white flex flex-col space-y-2">
              <p className="text-xl font-semibold uppercase tracking-wider">
                Inventory Billing Web App
              </p>
              <p className="font-semibold text-lg text-violet-500 uppercase">
                Description:
              </p>
              <p className="indent-5">
                This Inventory Billing Web Application is a powerful tool for
                managing inventory and billing processes.It helps
                businesses track inventory, manage sales, and create invoices
                easily.
              </p>
              <p className="font-semibold text-lg">
                Technologies:{" "}
                <span className="font-medium text-[#1ED6B0]">MERN Stack</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#E8489C] to-[#7E3AEC] w-fit rounded-[20px] px-[20px] py-[5px] m-4 ">
              <a
                href="https://inventory-billing-web.netlify.app/"
                className="text-white font-semibold tracking-wide uppercase flex items-center space-x-1"
                target="_blank"
              >
                <span className="text-[20px]">
                  <MdKeyboardDoubleArrowRight />
                </span>{" "}
                <span>Demo </span>
              </a>
            </div>
          </div>

          <div className="bg-[#0c0e27] h-auto w-[400px] max-sm:w-[300px] rounded-xl border border-[#312E81] overflow-hidden">
            <div className="">
              <img
                src="src/assets/project2.jpg"
                className="rounded-t-xl h-[200px] w-full object-cover"
                alt="Project Image"
              />
            </div>
            <div className="p-4 text-white flex flex-col space-y-2">
              <p className="text-xl font-semibold uppercase tracking-wider">
                Admin Dashboard
              </p>
              <p className="font-semibold text-lg text-violet-500 uppercase">
                Description:
              </p>
              <p className="indent-5">
                Developed an admin dashboard for managing product details,
                prices, and past sales information. It handles customer details,
                including purchase history. By analyzing data displayed in grids
                and charts, admins can understand customer purchasing behavior
                and product performance
              </p>
              <p className="font-semibold text-lg">
                Technologies:{" "}
                <span className="font-medium text-[#1ED6B0]">MERN Stack</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#E8489C] to-[#7E3AEC] w-fit rounded-[20px] px-[20px] py-[5px] m-4 ">
              <a
                href="https://github.com/Madesh2003/Ecommerce_Dashboard_Frontend"
                className="text-white font-semibold tracking-wide uppercase flex items-center space-x-1"
              >
                <span className="text-[20px]">
                  <MdKeyboardDoubleArrowRight />
                </span>{" "}
                <span>Demo </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
