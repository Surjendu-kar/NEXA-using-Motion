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

  // Font sizes for each breakpoint
  const initialFontSizes = {
    lg: "7.8rem",
    md: "5.5rem",
    sm: "3rem",
  };
  const animateFontSizes = {
    lg: "9rem",
    md: "6rem",
    sm: "3.5rem",
  };
  // Line heights for each breakpoint
  const initialLineHeights = {
    lg: "5.5rem",
    md: "4rem",
    sm: "2.5rem",
  };
  const animateLineHeights = {
    lg: "6.5rem",
    md: "4.5rem",
    sm: "3rem",
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
    sm: "4.5rem",
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

  return (
    <div
      data-scroll
      data-scroll-speed="-0.5"
      className="w-full h-screen bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{
          width: "80%",
          height: "80vh",
          borderRadius: "15px",
          opacity: 0.7,
        }}
        animate={{
          width: loadingComplete ? "100%" : "80%",
          height: loadingComplete ? "100vh" : "80vh",
          borderRadius: loadingComplete ? "0px" : "15px",
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative bg-zinc-900 text-white pt-1 overflow-hidden"
      >
        {/* Text Structure */}
        <div className="textstructure mt-40 px-5 lg:px-14">
          {["we build", "digital presence", "for brands"].map((text, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center gap-3">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: loadingComplete ? getImageWidth() : 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                      delay: loadingComplete ? 1 : 0,
                    }}
                    className="overflow-hidden relative top-1 left-1 lg:top-2 w-[10vw] h-[2.5rem] md:h-[4rem] lg:w-[10rem] lg:h-[5.7vw] rounded-sm lg:rounded-md"
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
              <div className="absolute bottom-5 left-5 text-zinc-400">
                Loading...
              </div>
              <div className="absolute bottom-5 right-5 text-zinc-400 text-4xl font-semibold">
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
                      delay: 1.2,
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
                      delay: 1.8,
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default LandingPage;
