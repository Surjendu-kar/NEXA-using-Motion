import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      {/* Text Structure */}
      <div className="textstructure mt-44 px-20">
        {["we create", "eye-opening", "presentations"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center gap-2">
              {index === 1 && <div className="relative top-2 w-[9vw] h-[5.5vw] bg-red-50 rounded-md"></div>}
              <h1 className="text-[145px] font-grotesk uppercase leading-[6.8vw]">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* border */}
      <div className="border-t-[1px] border-zinc-800 mt-40 flex items-center justify-between py-4 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, index) => (
          <div className="text-[17px] leading-6 font-neue" key={index}>
            {text}
          </div>
        ))}
        <div className="start flex items-center gap-2 group cursor-pointer">
          <div className="group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300 uppercase font-neue text-[15px] leading-none px-5 py-2 border-[1px] border-zinc-400 rounded-full tracking-wide">
            Start The Project
          </div>
          <div className="w-9 h-9 flex items-center justify-center rotate-45 rounded-full border-[1px] border-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
