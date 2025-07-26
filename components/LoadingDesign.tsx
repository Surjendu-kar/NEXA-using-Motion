"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingDesignProps {
  pageName: string;
  onLoadingComplete?: () => void; // Callback when loading is done
  children?: React.ReactNode; // Content to show after loading
}

function LoadingDesign({ pageName, onLoadingComplete, children }: LoadingDesignProps) {
  const [rotate, setRotate] = useState(0);
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });
  const [showServices, setShowServices] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const eyesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide overflow during component mount to prevent scrollbar
    document.body.style.overflow = "hidden";

    // Auto-hide the services page after 1.5 seconds
    const autoHideTimer = setTimeout(() => {
      setShowServices(false);
      setShowContent(true); // Show content immediately when loading starts to exit
      
      // Restore overflow after both animations complete
      setTimeout(() => {
        // This is a fallback in case onAnimationComplete doesn't fire
        if (document.body.style.overflow !== "auto") {
          document.body.style.overflow = "auto";
        }
        onLoadingComplete?.(); // Call callback if provided
      }, 1000); // Wait for exit animation to complete
    }, 1500);

    const handleMouseMove = (e: MouseEvent) => {
      if (!eyesContainerRef.current) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the position of the eyes container
      const eyesRect = eyesContainerRef.current.getBoundingClientRect();
      const eyesCenterX = eyesRect.left + eyesRect.width / 2;
      const eyesCenterY = eyesRect.top + eyesRect.height / 2;

      // Calculate the difference between mouse and eyes center
      const deltaX = mouseX - eyesCenterX;
      const deltaY = mouseY - eyesCenterY;

      // Calculate angle for rotation
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate iris movement (limit the movement range)
      const maxMove = 8; // Reduced for smaller eyes to prevent overflow
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 200; // Maximum distance to consider for full movement

      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const moveX = (deltaX / distance) * maxMove * normalizedDistance;
      const moveY = (deltaY / distance) * maxMove * normalizedDistance;

      setIrisPosition({
        x: isNaN(moveX) ? 0 : moveX,
        y: isNaN(moveY) ? 0 : moveY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(autoHideTimer);
      // Restore overflow when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [onLoadingComplete]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {showServices && (
          <motion.div
            key="services"
            initial={{
              opacity: 0,
              y: "100vh",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-100vh",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-50 bg-[#18181B] flex items-center"
          >
            <h1 className="font-grotesk uppercase text-7xl lg:text-9xl text-white pl-5 lg:pl-14">
              {pageName}
            </h1>

            <div
              ref={eyesContainerRef}
              className="absolute bottom-5 right-0 w-[130px] lg:w-[180px] h-auto flex justify-center gap-2"
            >
              {[1, 2].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-zinc-100 w-[3rem] h-[3rem] lg:w-[3.5vw] lg:h-[3.5vw] rounded-full"
                >
                  <div
                    className="relative bg-[#212121] w-3/5 h-3/5 rounded-full transition-transform duration-200 ease-out"
                    style={{
                      transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`,
                    }}
                  >
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                      }}
                      className="line w-full h-2 absolute top-1/2 left-1/2"
                    >
                      <div className="w-2 h-full bg-zinc-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content appears with push-up effect */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ y: "100vh" }} // Start from bottom of screen
            animate={{ y: 0 }} // Move to normal position
            transition={{ 
              duration: 1, 
              ease: "easeInOut" // Same easing as loading exit
            }}
            onAnimationStart={() => {
              // Keep overflow hidden during content animation
              document.body.style.overflow = "hidden";
            }}
            onAnimationComplete={() => {
              // Restore overflow when content animation completes
              document.body.style.overflow = "auto";
            }}
            className="relative z-10 bg-white" // Added bg-white to ensure visibility
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoadingDesign;