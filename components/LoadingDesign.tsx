"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingDesignProps {
  pageName: string;
}

function LoadingDesign({ pageName }: LoadingDesignProps) {
  const [rotate, setRotate] = useState(0);
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });
  const [showServices, setShowServices] = useState(true);
  const eyesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide overflow during component mount to prevent scrollbar
    document.body.style.overflow = "hidden";

    // Auto-hide the services page after 3 seconds
    const autoHideTimer = setTimeout(() => {
      setShowServices(false);
    }, 1500);

    // Restore overflow after animation completes
    const overflowTimer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1000);

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
      clearTimeout(overflowTimer);
      // Restore overflow when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
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
            className="relative h-full bg-[#18181B] flex items-center"
          >
            <h1 className="font-grotesk uppercase text-9xl text-white pl-14">
              {pageName}
            </h1>

            <div
              ref={eyesContainerRef}
              className="absolute bottom-5 right-0 w-[180px] h-auto flex justify-center gap-2"
            >
              {[1, 2].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-zinc-100 w-20 h-20 lg:w-[3.5vw] lg:h-[3.5vw] rounded-full"
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
    </div>
  );
}

export default LoadingDesign;
