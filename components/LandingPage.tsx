"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook to get current breakpoint
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    function updateBreakpoint() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBreakpoint("lg");
      } else if (width >= 768) {
        setBreakpoint("md");
      } else {
        setBreakpoint("sm");
      }
    }

    // Set initial breakpoint immediately
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

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

function LandingPage({
  loadingComplete,
  count,
}: {
  loadingComplete: boolean;
  count: number;
}) {
  const breakpoint = useBreakpoint();

  const initialWidths = {
    lg: "80%",
    md: "80%",
    sm: "85%",
  };

  const initialHeights = {
    lg: "80vh",
    md: "80vh",
    sm: "85vh",
  };

  const getDimension = (dimensions: any) => {
    if (!breakpoint) return dimensions.sm; // mobile-first fallback
    if (breakpoint === "lg") return dimensions.lg;
    if (breakpoint === "md") return dimensions.md;
    return dimensions.sm;
  };

  // Font sizes for each breakpoint
  const initialFontSizes = {
    lg: "7.8rem",
    md: "5.5rem",
    sm: "4.5rem",
  };
  const animateFontSizes = {
    lg: "9rem",
    md: "6rem",
    sm: "5rem",
  };
  // Line heights for each breakpoint
  const initialLineHeights = {
    lg: "5.5rem",
    md: "4rem",
    sm: "3.5rem",
  };
  const animateLineHeights = {
    lg: "6.5rem",
    md: "4.5rem",
    sm: "3.75rem",
  };

  const getFontSize = (sizes: any) => {
    if (!breakpoint) {
      // Return mobile-first approach when breakpoint is not yet determined
      return sizes.sm;
    }
    if (breakpoint === "lg") return sizes.lg;
    if (breakpoint === "md") return sizes.md;
    return sizes.sm;
  };

  // Image sizes for each breakpoint
  const imageWidths = {
    lg: "10rem",
    md: "8rem",
    sm: "6rem",
  };

  const getImageWidth = () => {
    if (!breakpoint) return imageWidths.sm;
    if (breakpoint === "lg") return imageWidths.lg;
    if (breakpoint === "md") return imageWidths.md;
    return imageWidths.sm;
  };

  // Don't render until breakpoint is determined to avoid flash
  if (!breakpoint) {
    return (
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        className="w-full h-screen  flex items-center justify-center"
      >
        {/* <div className="text-white">Loading...</div> */}
      </motion.div>
    );
  }

  // Different text arrays based on breakpoint - ONLY change for mobile
  const getTextArray = () => {
    if (breakpoint === "sm") {
      return ["we build", "digital", "presence", "for brands"];
    } else {
      // Keep original for md and lg
      return ["we build", "digital presence", "for brands"];
    }
  };

  const textArray = getTextArray();

  return (
    <div
      data-scroll
      data-scroll-speed="-0.5"
      className="w-full h-[93vh] md:h-screen bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{
          width: getDimension(initialWidths),
          height: getDimension(initialHeights),
          borderRadius: "15px",
          opacity: 0.7,
        }}
        animate={{
          width: loadingComplete ? "100%" : getDimension(initialWidths),
          height: loadingComplete ? "100vh" : getDimension(initialHeights),
          borderRadius: loadingComplete ? "0px" : "15px",
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative bg-zinc-900 text-white pt-1 overflow-hidden"
      >
        {/* Text Structure */}
        <div className="textstructure mt-52 lg:mt-40 px-5 lg:px-14">
          {textArray.map((text, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center gap-3">
                {/* Show image after "digital" for mobile, after "digital presence" for larger screens */}
                {((breakpoint === "sm" && text === "digital") ||
                  (breakpoint !== "sm" && text === "digital presence")) && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: loadingComplete ? getImageWidth() : 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                      delay: loadingComplete ? 1 : 0,
                    }}
                    className="overflow-hidden relative top-1 left-1 lg:top-2 w-[10vw] h-[3.2rem] md:h-[4rem] lg:h-[5.8rem] lg:w-[10rem] rounded-sm lg:rounded-md"
                  >
                    <img
                      src="./nexa.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                <motion.h1
                  initial={{
                    fontSize: getFontSize(initialFontSizes),
                    lineHeight: getFontSize(initialLineHeights),
                  }}
                  animate={{
                    fontSize: getFontSize(animateFontSizes),
                    lineHeight: getFontSize(animateLineHeights),
                  }}
                  transition={{ delay: 1.7, duration: 1.5, ease: "easeInOut" }}
                  className="font-grotesk uppercase"
                >
                  {text}
                </motion.h1>
              </div>
            </div>
          ))}
        </div>

        {/* Loading UI or Footer UI */}
        <AnimatePresence>
          {!loadingComplete ? (
            <motion.div
              key="loading-ui"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full bottom-0"
            >
              <div className="absolute bottom-5 left-5 text-zinc-400 text-[14px] lg:text-[16px]">
                Loading...
              </div>
              <div className="absolute bottom-5 right-5 text-zinc-400 text-3xl lg:text-4xl font-semibold">
                {count}%
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="footer-ui"
              className="absolute bottom-0 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* border */}
              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="border-t-[1px] border-zinc-800 mt-40"
              />

              {/* footer */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100vw",
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="flex flex-col md:flex-row items-center justify-between py-4 px-5 lg:px-14"
              >
                {[
                  "For startups and established businesses",
                  "From concept to launch",
                ].map((text, index) => (
                  <div
                    className="text-[14px] md:text-[16px] lg:text-[17px] leading-6 font-neue"
                    key={index}
                  >
                    {text}
                  </div>
                ))}
                <div className="start mt-2 md:mt-0 flex items-center gap-2 group cursor-pointer mb-7 md:mb-0">
                  <motion.div
                    initial={{
                      x: "20%",
                    }}
                    animate={{
                      x: 0,
                    }}
                    transition={{
                      delay: 1.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300 uppercase font-neue text-[11px] lg:text-[1rem] leading-none px-3 py-2 lg:px-5 lg:py-2 border-[1px] border-zinc-400 rounded-full tracking-wide"
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
                      delay: 1.8,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rotate-45 rounded-full border-[1px] border-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default LandingPage;
