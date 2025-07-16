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

function Navbar() {
  const navItems = [
    "Services",
    "Our works",
    "about us",
    "insights",
    "contact us",
  ];
  return (
    <div className="fixed z-[999] w-full px-5 lg:px-16 py-8 flex items-center justify-between">
      <div className="logo">
        <svg
          width="70"
          height="30"
          viewBox="0 0 75 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
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
        </svg>
      </div>

      <div className="links flex gap-10">
        {navItems.map((item, index) => (
          <a
            className={`text-[1.1vw] font-neue font-normal capitalize ${
              index === navItems.length - 1 && "ml-32"
            }`}
            key={index}
            href={`/${item}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
