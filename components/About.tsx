import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-speed="-0.02"
      className="w-full py-10 lg:py-16 bg-[#CDEA68] rounded-tl-md rounded-tr-md lg:rounded-tl-2xl lg:rounded-tr-2xl"
    >
      <h1 className="px-5 lg:px-14 text-[#212121] font-neue text-[30px] lg:text-[55px] leading-none tracking-tight">
        We are a digital agency that helps brands grow and succeed online. We
        specialize in web design, development, and digital marketing.
      </h1>

      <div className="pt-5 mt-5 lg:pt-10 lg:mt-20  w-full border-t-[1px] border-[#99AD53] flex flex-col md:flex-row gap-5">
        <div className="px-5 lg:px-14 w-full lg:w-1/2">
          <h1 className="text-[#212121] font-neue text-[30px] lg:text-[55px]">
            Our Approach:
          </h1>
          <button
            className={`uppercase  h-14 w-[12rem] ${
              !isHovered ? "pl-5 pr-6" : "pl-5 pr-2"
            }   mt-2 bg-zinc-800 text-xs lg:text-[15px] rounded-full flex items-center justify-between gap-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Learn More</span>
            {!isHovered ? (
              <motion.div
                layoutId="hover"
                className="w-2 h-2  bg-zinc-100 rounded-full"
              />
            ) : (
              <motion.div
                layoutId="hover"
                className="bg-white p-3 rounded-full"
              >
                <FaArrowUp className="text-zinc-800 transform rotate-45" />
              </motion.div>
            )}
          </button>
        </div>

        <div className="lg:mr-14 w-full lg:w-1/2 h-[300px] lg:h-[469px] bg-[#99ad536c] rounded-none lg:rounded-3xl overflow-hidden">
          <img
            src="./nexa.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
