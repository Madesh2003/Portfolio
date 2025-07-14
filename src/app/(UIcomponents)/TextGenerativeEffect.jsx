"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    const selectiveWords = ["soul", "developer", "madesh"]
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                selectiveWords.includes(word.toLowerCase())
                  ? "text-[#aa48ca]" 
                  : "text-white-01"
              } opacity-0`}              
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="my-4">
        <div className="text-white-01 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
