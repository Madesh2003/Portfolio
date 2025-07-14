//Icons
import { IoArrowForwardCircleOutline, IoLogoLinkedin } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

//Profile Image
import profile from "@/assets/icons/myProfile.jpg";

//Tech Images
import html from "@/assets/icons/html.png";
import css from "@/assets/icons/css.png";
import js from "@/assets/icons/js.png";
import ts from "@/assets/icons/ts.png";
import react from "@/assets/icons/reactjs.png";
import angular from "@/assets/icons/angular.png";
import next from "@/assets/icons/nextjs.png";
import tailwind from "@/assets/icons/tailwindcss.png";
import mui from "@/assets/icons/mui.png";
import framer from "@/assets/icons/framer-motion.png";
import redux from "@/assets/icons/redux.png";
import express from "@/assets/icons/expressjs.png";
import node from "@/assets/icons/nodejs.png";
import python from "@/assets/icons/python.png";
import socket from "@/assets/icons/socketio.png";
import sql from "@/assets/icons/sql.png";
import postgresql from "@/assets/icons/postgresql.png";
import git from "@/assets/icons/git.png";
import mongodb from "@/assets/icons/mongodb.png";
import aws from "@/assets/icons/aws.png";

//Projects Images
import adminProject from "@/assets/projects/admin_dashboard.jpg";
import ecommerce from "@/assets/projects/ecommerce.png";
import movieBooking from "@/assets/projects/movieBooking.png";

export const NAV_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Expertise", link: "#expertise" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const HERO_SECTION = {
  TITLE: "Full-Stack Expertise, Front-End Focused",
  DESC1: "Full-Stack Developer with a Front-End Soul",
  DESC2: "Hey there! I'm Madesh",
  RESUME: "Resume",
  RIGHT_ARROW_ICON: <IoArrowForwardCircleOutline />,
};

export const ABOUT_SECTION = {
  TITLE: "Meet the Dev",
  DESC: "I'm Madesh, a Front-End Developer at Inunet and BSc.IT student with hands-on experience in MERN, MEAN, PERN, Next.js, and JAMstack. I've built multiple full-stack projects using modern tools like Tailwind CSS and Material-UI, and I'm passionate about problem-solving, clean code, and building impactful web applications",
  PROFILE: profile,
};

export const EXPERTISE_SECTION = {
  TITLE: "Expertise",
  JOURNEY: [
    {
      title: "The American College",
      subtitle: "B.Sc. IT",
      year: "2018 - 2021",
    },
    { title: "GUVI", subtitle: "Full Stack MERN Program", year: "2023 - 2024" },
    {
      title: "Inunent",
      location: "Bengaluru",
      subtitle: "Full Stack Developer",
      year: "2024 - Present",
    },
  ],
  SKILLS_IMGS: [
    html,
    css,
    js,
    ts,
    react,
    angular,
    next,
    tailwind,
    mui,
    framer,
    redux,
    express,
    node,
    python,
    socket,
    aws,
    sql,
    postgresql,
    mongodb,
    git,
  ],
};

export const PROJECT_SECTION = {
  TITLE: "Projects",
  PROJECTS_LIST: [
    {
      IMG: adminProject,
      TITLE: "Admin Dashboard",
      DESC: "Developed an admin dashboard for managing product details, prices, and past sales information. It handles customer details, including purchase history",
      STACK: [react, tailwind, express, node, mongodb],
    },
    {
      IMG: ecommerce,
      TITLE: "GadZo - E-Commerce",
      DESC: "Developed an admin dashboard for managing product details, prices, and past sales information. It handles customer details, including purchase history",
      STACK: [next, tailwind, framer, mongodb],
    },
    {
      IMG: movieBooking,
      TITLE: "Flim Flix - Movie Booking System",
      DESC: "Developed an admin dashboard for managing product details, prices, and past sales information. It handles customer details, including purchase history",
      STACK: [react, redux, tailwind, express, node, mongodb],
    },
  ],
};

export const CONTACT_SECTION = {
  TITLE: "Contact",
  FORM_LABELS: {
    FULL_NAME: "Full Name",
    EMAIL: "Email",
    MESSAGE: "Your message",
  },
  SEND_MSG: "Send Message",
  BTN_ICON: <RiMailSendLine />,
  LOGOS: [<FaGithub />, <IoLogoLinkedin />, <SiLeetcode />],
};
