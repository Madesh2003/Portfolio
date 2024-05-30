import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const links = ["Home","About", "Skills", "Education", "Projects", "Contact"];

  const navvarients = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div variants={navvarients} initial="initial" animate="animate" className="relative z-50" >
      <nav className=" w-full fixed flex justify-center max-md:hidden">
        <div className=" bg-white bg-opacity-[0.04] backdrop-filter backdrop-blur-lg rounded-[26px] px-[30px] py-[20px] mt-4 ">
          <div className="flex justify-center items-center space-x-5 text-white uppercase tracking-wider font-semibold">
            {links.map((data, index) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  href={`#${data.toLowerCase()}`}
                  className="hover:text-violet-700 duration-300 cursor-pointer"
                >
                  {data}
                </motion.a>
            ))}
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </motion.div>
  );
};

export default Navbar;
