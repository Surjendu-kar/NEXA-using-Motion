"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Services",
    "Our works",
    "about us",
    "insights",
    "contact us",
  ];
  return (
    <div
      className={`fixed z-[999] w-full px-5 lg:px-14 py-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/50 backdrop-blur-md" : ""
      } ${isNavbarVisible ? "top-0" : "-top-full"}`}
    >
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

      <div className="links flex gap-10 items-center">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={`/${item.replace(" ", "-").toLowerCase()}`}
            className={`relative text-[1.1vw] font-neue font-normal capitalize ${
              index === navItems.length - 1 && "ml-32"
            }`}
            whileHover="hover"
            initial="rest"
          >
            <div className="overflow-hidden relative">
              <motion.span
                className="inline-block"
                variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              >
                {item}
              </motion.span>
              <motion.span
                className="absolute left-0 top-0"
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              >
                {item}
              </motion.span>
            </div>
            <motion.div
              className="absolute bottom-[-5px] left-0 h-[1px] bg-white w-full"
              style={{ originX: 0 }}
              variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
