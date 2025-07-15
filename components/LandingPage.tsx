import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-auto lg:h-screen pt-1">
      {/* Text Structure */}
      <div className="textstructure mt-40 px-5 lg:px-20">
        {["we build", "digital presence", "for brands"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center gap-2">
              {index === 1 && (
                <div className="relative top-1 lg:top-2 w-[10vw] h-[7.2vw] lg:w-[9vw] lg:h-[5.5vw] bg-zinc-50 rounded-sm lg:rounded-md"></div>
              )}
              <h1 className="text-5xl md:text-[100px] lg:text-[9vw] font-grotesk uppercase leading-[10vw] md:leading-[9vw] lg:leading-[6.8vw]">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* border */}
      <div className="border-t-[1px] border-zinc-800 mt-40 flex items-center justify-between py-4 px-20">
        {[
          "For startups and established businesses",
          "From concept to launch",
        ].map((text, index) => (
          <div className="text-[1.1vw] leading-6 font-neue" key={index}>
            {text}
          </div>
        ))}
        <div className="start flex items-center gap-2 group cursor-pointer">
          <div className="group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300 uppercase font-neue text-[1vw] leading-none px-5 py-2 border-[1px] border-zinc-400 rounded-full tracking-wide">
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
