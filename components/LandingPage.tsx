"use client";
import { motion } from "motion/react";

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.3,
      duration: 1,
      ease: "easeInOut" as const,
    },
  },
};

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.5"
      className="w-full h-auto lg:h-screen pt-1"
    >
      {/* Text Structure */}
      <div className="textstructure mt-40 px-5 lg:px-14">
        {["we build", "digital presence", "for brands"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center gap-3">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden relative top-1 left-1 lg:top-2 w-[10vw] h-[7.2vw] lg:w-[9vw] lg:h-[5.7vw]  rounded-sm lg:rounded-md"
                >
                  <img
                    src="./nexa.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <motion.h1 className="text-5xl md:text-[100px] lg:text-[9vw] font-grotesk uppercase leading-[10vw] md:leading-[9vw] lg:leading-[6.8vw]">
                {text}
              </motion.h1>
            </div>
          </div>
        ))}
      </div>

      {/* border */}
      <motion.div
        initial={{
          width: "0%",
        }}
        animate={{
          width: "100%",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="border-t-[1px] border-zinc-800 mt-40"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: "100vw",
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex items-center justify-between py-4 px-14"
      >
        {[
          "For startups and established businesses",
          "From concept to launch",
        ].map((text, index) => (
          <div className="text-[1.1vw] leading-6 font-neue" key={index}>
            {text}
          </div>
        ))}
        <div className="start flex items-center gap-2 group cursor-pointer">
          <motion.div
            initial={{
              x: "20%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300 uppercase font-neue text-[1vw] leading-none px-5 py-2 border-[1px] border-zinc-400 rounded-full tracking-wide"
          >
            Start The Project
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-9 h-9 flex items-center justify-center rotate-45 rounded-full border-[1px] border-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M12 19V5"
              />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M5 12l7-7 7 7"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
