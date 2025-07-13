"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { EXPERTISE_SECTION } from "@/Data/data";

export default function ExpertiseSection() {
  const { TITLE, JOURNEY, SKILLS_IMGS } = EXPERTISE_SECTION;
  return (
    <div className="min-h-screen w-full text-white py-10 relative">
      <GridPattern
        width={45}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:text-3xl md:text-2xl text-xl font-bold text-center md:mb-10 mb-5"
      >
        {TITLE}
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-lg:px-6 max-md:px-0 max-md:py-10 min-lg:py-20 text-white">
        <div className="relative min-lg:pl-4 max-md:pl-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

          {JOURNEY.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`mb-12 w-full flex relative ${
                  isLeft ? "justify-start pr-10" : "justify-end pl-10"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute min-lg:left-[48.5%] max-md:left-[50%] transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full border-2 border-white z-10" />

                <div className="max-w-[300px] backdrop-blur-2xl bg-white/5 border border-white/30 min-lg:rounded-xl max-md:rounded-md shadow-lg min-lg:p-4 max-md:p-2">
                  <div className="flex flex-wrap items-center mb-1">
                    <h3 className="min-lg:text-base max-md:text-xs font-semibold">
                      {step.title}
                    </h3>
                    {step.location && (
                      <p className="min-lg:text-base max-md:text-xs">
                        &nbsp;- {step.location}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap max-md:flex-col space-x-1 items-center">
                    <p className="text-gray-400 min-lg:text-xs max-md:text-[10px]">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-500 min-lg:text-[10px] max-md:text-[8px] ">
                      ({step.year})
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="relative h-full flex items-center justify-center overflow-hidden text-white">
          <IconCloud images={SKILLS_IMGS} />
        </div>
      </section>
    </div>
  );
}
