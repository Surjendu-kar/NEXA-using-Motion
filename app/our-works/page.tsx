"use client";
import Navbar from "@/components/Navbar";
import LoadingDesign from "../../components/LoadingDesign";
import { useEffect, useState } from "react";

function OurWorks() {
  const [rotate, setRotate] = useState(0);
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180); //inverted

      const maxMove = 20;
      const moveX = (deltaX / (window.innerWidth / 2)) * maxMove;
      const moveY = (deltaY / (window.innerHeight / 2)) * maxMove;
      setIrisPosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <LoadingDesign pageName="Our Works">
      <div className="bg-[#CDEA68] h-[73vh] relative overflow-hidden">
        <Navbar />

        {/* Eyes - Lower z-index */}
        <div className="absolute flex justify-between gap-1 w-[90%] lg:w-[38rem] -bottom-7 left-1/2 -translate-x-[50%] -translate-y-[0%] z-10">
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-zinc-100 w-[40vw] h-[40vw] lg:w-[19vw] lg:h-[19vw] rounded-full"
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
                  className="line w-full h-7 absolute top-1/2 left-1/2"
                >
                  <div className="w-7 h-full bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom boxes - Higher z-index to appear above eyes */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col z-20">
          <div className="w-[80%] bg-[#BFDA62] h-11 rounded-md mx-auto border-b-[0.25px] border-[#A8C94A] shadow-sm"></div>
          <div className="w-[90%] bg-[#BFDA62] h-11 rounded-md mx-auto shadow-md"></div>
        </div>
      </div>
    </LoadingDesign>
  );
}

export default OurWorks;
