"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardList = [
    {
      title: "Salience Labs",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
    },
    {
      title: "Cardboard Spaceship",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
    },
    {
      title: "AH2 & Matt Horn",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
    },
    {
      title: "Fyde",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
    },
    {
      title: "Vise",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
    },
    {
      title: "All Things Go",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
    },
  ];
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-16 border-b-[1px] pb-10 border-zinc-700">
        {/* heading */}
        <h1 className="text-[55px] leading-none  font-neue">
          Featured projects
        </h1>
      </div>

      {/* cards */}
      <div className="cards w-full flex flex-wrap gap-10 px-16 pt-10 relative">
        <h1
          className="absolute flex overflow-hidden text-[#CDEA68] z-[9] text-8xl leading-none font-grotesk left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top:
              hoveredIndex !== null
                ? `${
                    ((Math.floor(hoveredIndex / 2) + 0.5) /
                      Math.ceil(cardList.length / 2)) *
                    100
                  }%`
                : "50%",
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
        >
          {hoveredIndex !== null &&
            cardList[hoveredIndex].title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </h1>

        {cardList.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cardcontainer group h-[600px] overflow-hidden"
            style={{ width: "calc(50% - 20px)" }}
          >
            <div className="card w-full h-full flex flex-col gap-4 rounded-xl ">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-zinc-100 rounded-full" />
                <h1 className="text-[15px] font-neue uppercase">
                  {card.title}
                </h1>
              </div>
              <div className="w-full flex-1 rounded-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-[0.95]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={card.imgSrc}
                  alt="Featured Project"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
