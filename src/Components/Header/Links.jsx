import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const links = ["Home","About", "Skills","Education", "Projects", "Contact"];

  return (
    <motion.div className="absolute w-full h-full flex flex-col items-center justify-center gap-10" variants={variants}>
      {links.map((data,index) => (
        <motion.a
          href={`#${data.toLocaleLowerCase()}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-4xl max-sm:text-2xl  hover:text-violet-700 tracking-wide font-semibold "
        > 
          {data}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;