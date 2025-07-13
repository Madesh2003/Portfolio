"use client";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../(UIcomponents)/HoverBorderGradient";
import { CONTACT_SECTION } from "@/Data/data";

const ContactSection = () => {
  const { TITLE, FORM_LABELS, SEND_MSG, BTN_ICON, LOGOS } = CONTACT_SECTION;
  return (
    <div id="contact" className="text-white-01 py-10 relative">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:text-3xl md:text-2xl text-xl font-bold text-center md:mb-10 mb-5"
      >
        {TITLE}
      </motion.h1>
      <div className="h-full w-full flex flex-col items-center">
        <div className="min-lg:w-[500px] max-md:w-full p-6 border border-gray-600 rounded-3xl space-y-5">
          <div>
            <label htmlFor="name" className="text-white-01 text-lg font-medium">
              {FORM_LABELS.FULL_NAME}
            </label>
            <br />
            <input
              type="text"
              placeholder="eg., John Doe"
              className="mt-2 border border-gray-400 rounded-xl px-3 py-2 w-full focus:outline-none bg-black"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-white-01 text-lg font-medium">
              {FORM_LABELS.EMAIL}
            </label>
            <br />
            <input
              type="email"
              placeholder="eg., johndoe@gmail.com"
              className="mt-2 border border-gray-400 rounded-xl px-3 py-2 w-full focus:outline-none bg-black"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white-01 text-lg font-medium"
            >
              {FORM_LABELS.MESSAGE}
            </label>
            <br />
            <textarea
              name="message"
              rows="5"
              placeholder="Share your thoughts or inquiries..."
              className="mt-2 border border-gray-400 rounded-xl px-3 py-2 w-full focus:outline-none bg-black"
            />
          </div>
          <HoverBorderGradient containerClassName={"w-full"}>
            <div className="flex items-center sm:gap-3 gap-1 max-sm:text-sm">
              <span>{SEND_MSG}</span>{" "}
              <span className="relative top-0.5">{BTN_ICON}</span>
            </div>
          </HoverBorderGradient>
        </div>
      </div>

      <div className="space-x-3 mt-7 flex justify-center">
        {LOGOS.map((logo, ind) => (
          <div
            key={ind}
            className="h-10 w-10 rounded-full border border-gray-600 p-1 backdrop-blur-md bg-white/5 shadow-inner flex items-center justify-center"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
