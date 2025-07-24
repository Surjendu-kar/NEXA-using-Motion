"use client";
import { useEffect, useState } from "react";

function Eyes() {
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
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.8"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex justify-between gap-1 w-[90%] lg:w-1/3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-zinc-100 w-[40vw] h-[40vw] lg:w-[14vw] lg:h-[14vw] rounded-full"
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
      </div>
    </div>
  );
}

export default Eyes;
