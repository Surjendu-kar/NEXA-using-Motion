import { FaArrowUp } from "react-icons/fa6";

function About() {
  return (
    <div className="w-full p-5 lg:p-20 bg-[#CDEA68] rounded-tl-lg rounded-tr-lg  lg:rounded-tl-2xl lg:rounded-tr-2xl">
      <h1 className="text-[#212121] font-neue text-[3.6vw] leading-none tracking-tight">
        We are a digital agency that helps brands grow and succeed online. We
        specialize in web design, development, and digital marketing.
      </h1>

      <div className="pt-10 mt-20  w-full border-t-[1px] border-[#99AD53] flex gap-5">
        <div className="w-1/2">
          <h1 className="text-[#212121] font-neue text-[3.6vw] ">
            Our Approach:
          </h1>
          <button className="uppercase px-5 py-4 mt-2 bg-zinc-800 text-[15px] rounded-full flex items-center gap-10">
            <span>Learn More</span>
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[469px] bg-[#99ad536c] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
