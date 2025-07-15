// import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      {/* Text Structure */}
      <div className="textstructure mt-44 px-20">
        {["we create", "eye-opening", "presentations"].map((text, index) => (
          <div className="masker" key={index}>
            <h1 className="text-[145px] font-grotesk uppercase leading-[6.8vw]">
              {text}
            </h1>
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
        <div className="start">
          <div className="uppercase font-neue text-[15px] leading-none px-5 py-2 border-2 border-zinc-500 rounded-full tracking-wide">
            Start The Project
          </div>
          <div className="w-3 h-3 rounded-full">
            {/* <FaArrowUpLong /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
