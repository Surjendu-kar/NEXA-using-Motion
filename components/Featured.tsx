"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardList = [
    {
      title: "Salience Labs",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
      tags: ["brand identity", "pitch deck"],
    },
    {
      title: "Cardboard Spaceship",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
      tags: ["branded template", "sales deck", "social media templates"],
    },
    {
      title: "AH2 & Matt Horn",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
      tags: ["pitch deck"],
    },
    {
      title: "Fyde",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
      tags: ["audit", "copy writing", "sales deck", "Slides design"],
    },
    {
      title: "Vise",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
      tags: ["agency", "company presentation"],
    },
    {
      title: "All Things Go",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
      tags: ["brand identity", "pitch deck"],
    },
  ];
  return (
    <div data-scroll data-scroll-speed="0.1" className="w-full py-2 lg:py-20 ">
      <div className="w-full px-5 lg:px-14 border-b-[1px] pb-10 border-zinc-700">
        {/*Top heading */}
        <h1 className="text-[31px] lg:text-[55px] leading-none  font-neue">
          Featured projects
        </h1>
      </div>

      {/* cards */}
      <div className="cards w-full flex flex-wrap gap-10 px-5 lg:px-14 pt-10 relative">
        {/* center heading */}
        <h1
          className="absolute flex overflow-hidden text-[#CDEA68] z-[9] text-9xl leading-none font-grotesk left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[115px]"
          style={{
            top:
              hoveredIndex !== null
                ? `${
                    ((Math.floor(hoveredIndex / 2) + 0.5) /
                      Math.ceil(cardList.length / 2)) *
                    100
                  }%`
                : "50%",
          }}
        >
          <AnimatePresence>
            {hoveredIndex !== null &&
              cardList[hoveredIndex].title.split("").map((char, i) => (
                <motion.span
                  key={hoveredIndex + char + i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%", transition: { duration: 0 } }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </AnimatePresence>
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap gap-10">
          {cardList.map((card, index) => (
            <div
              key={index}
              className="cardcontainer h-[400px] lg:h-[650px] overflow-hidden w-full md:[width:calc(50%-20px)]"
            >
              <div className="card w-full h-full flex flex-col gap-4 rounded-xl ">
                {/* title */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-zinc-100 rounded-full" />
                  <h1 className="text-[15px] font-neue uppercase">
                    {card.title}
                  </h1>
                </div>

                {/* image */}
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full flex-1 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer"
                  animate={{ scale: hoveredIndex === index ? 0.95 : 1 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <motion.img
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="w-full h-full object-cover"
                    src={card.imgSrc}
                    alt="Featured Project"
                  />
                </motion.div>

                {/* tags */}
                <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                  {card.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="cursor-pointer hover:bg-white hover:text-zinc-900 transition-all duration-300 uppercase font-neue text-[12px] lg:text-[0.9vw] leading-none px-3 lg:px-4 py-2 border-[1px] border-zinc-400 rounded-full tracking-wide"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
