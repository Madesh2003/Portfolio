import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GoRocket } from "react-icons/go";
import { HiAtSymbol } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g929byo",
        "template_p5loeln",
        formRef.current,
        "AoB52gS6b_p1prMrs"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen my-10 text-white grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-5 content-center max-sm:px-[2rem] px-[6rem]"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer flex flex-1 flex-col gap-10 "
        variants={variants}
      >
        <motion.h1 className=" text-5xl max-sm:text-2xl " variants={variants}>
          Need assistance? <br />
          Give me a shout
        </motion.h1>
        <motion.div
          className="text-xl max-sm:text-sm flex items-center space-x-2 cursor-pointer "
          variants={variants}
        >
          <span className="bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-2">
            <HiAtSymbol />
          </span>
          <a
            href="mailto:Mmadeshraina@gmail.com"
            className="hover:text-purple-500 duration-500 text-2xl max-sm:text-base"
          >
            Mmadeshraina@gmail.com
          </a>
        </motion.div>
        <motion.div
          className="text-xl max-sm:text-sm flex items-center space-x-2 "
          variants={variants}
        >
          <span className="bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-2">
            <FaLocationArrow />
          </span>
          <span className="">Madurai, Tamil Nadu</span>
        </motion.div>
        <motion.div
          className="text-xl max-sm:text-sm flex items-center space-x-2 "
          variants={variants}
        >
          <span className="bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-2">
            <FaPhoneAlt />
          </span>
          <span className="">+91 9894350561</span>
        </motion.div>
        <motion.div className="flex justify-evenly">
          <a
            href="https://github.com/Madesh2003"
            target="_blank"
            className="text-2xl max-sm:text-lg bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/madesh2003/"
            target="_blank"
            className="text-2xl max-sm:text-lg bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-3"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Madesh2003/"
            target="_blank"
            className="text-2xl max-sm:text-lg bg-[#9aa7b4] hover:bg-[#0DF8B5] duration-500 text-black rounded-full p-3"
          >
            <SiLeetcode />
          </a>
        </motion.div>
      </motion.div>

      <div className="formContainer flex-1 relative ">
        <motion.form
          className="flex flex-col gap-5"
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            className=" p-5 max-sm:w-auto bg-transparent focus:bg-transparent border border-white text-white rounded-[5px]"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            className=" p-5 max-sm:w-auto bg-transparent border border-white text-white rounded-[5px]"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            className=" p-5 max-sm:w-auto bg-transparent border border-white text-white rounded-[5px]"
            rows={8}
            placeholder="Message"
            name="message"
          />
          <button
            className="bg-transparent uppercase max-sm:w-auto w-full border border-white py-2 hover:bg-white transition duration-500 tracking-widest font-semibold flex justify-center items-center gap-1 
          rounded-lg hover:text-violet-600"
          >
            Submit <GoRocket className="text-lg" />
          </button>
          <p className="text-center text-2xl tracking-wide">
            {error && "Error"}
            {success && "Message Sent Successfully !"}
          </p>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
