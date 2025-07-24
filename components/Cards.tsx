"use client";
import { motion } from "motion/react";

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut" as const,
    },
  },
};

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col md:flex-row gap-4 items-center px-5 lg:px-14">
      <div className="cardcontainer h-[40vh] lg:h-[50vh] w-full lg:w-1/2">
        <div className="relative card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <div className="logo">
            <motion.svg
              width="180"
              height="180"
              viewBox="0 0 75 30"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#CDEA68"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* N */}
              <motion.path
                d="M5 25V5 L15 25V5"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              {/* E */}
              <motion.path
                d="M28 5H20V25H28 M20 15H25"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              {/* X */}
              <motion.path
                d="M33 5L43 25 M43 5L33 25"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              {/* A */}
              <motion.path
                d="M48 25L53 5L58 25 M50.5 18H55.5"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </div>
          <button className="absolute text-[10px] lg:text-sm bottom-3 lg:bottom-7 left-3 lg:left-7 px-3 py-1 rounded-full border-[1px] border-[#CDEA68] text-[#CDEA68] font-neue font-normal">
            &copy;2024-2025
          </button>
        </div>
      </div>

      <div className="cardcontainer w-full lg:w-1/2 h-[50vh] flex flex-col md:flex-row gap-4">
        <div className="card w-full lg:w-1/2 h-full bg-[#212121] rounded-xl relative flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            className="w-30 lg:w-40"
          />
          <button className="absolute uppercase text-[10px] lg:text-sm bottom-3 lg:bottom-7 left-3 lg:left-7 px-3 py-1 rounded-full border-[1px]   font-neue font-normal">
            rating 5.0 on clutch
          </button>
        </div>

        <div className="card w-full lg:w-1/2 h-full bg-[#212121] rounded-xl relative flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            className="w-20 lg:w-28"
          />
          <button className="absolute uppercase text-[10px] lg:text-sm bottom-3 lg:bottom-7 left-3 lg:left-7 px-3 py-1 rounded-full border-[1px]   font-neue font-normal">
            businesses bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
