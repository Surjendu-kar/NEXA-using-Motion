function Footer() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex p-14">
      <div className="w-1/2 flex flex-col justify-between">
        <div className="heading">
          {["Eye-", "Opening"].map((text, index) => (
            <h1
              key={index}
              className="text-5xl md:text-[100px] lg:text-[9vw] font-grotesk uppercase leading-[10vw] md:leading-[9vw] lg:leading-[7vw]"
            >
              {text}
            </h1>
          ))}
        </div>

        <div className="logo">
          <svg
            width="70"
            height="30"
            viewBox="0 0 75 30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* N */}
            <path d="M5 25V5 L15 25V5" />
            {/* E */}
            <path d="M28 5H20V25H28 M20 15H25" />
            {/* X */}
            <path d="M33 5L43 25 M43 5L33 25" />
            {/* A */}
            <path d="M48 25L53 5L58 25 M50.5 18H55.5" />
          </svg>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <h1 className="text-5xl md:text-[100px] lg:text-[9vw] font-grotesk uppercase leading-[10vw] md:leading-[9vw] lg:leading-[7vw]">
          presentations
        </h1>
        <div className="flex flex-col gap-8 flex-wrap">
          <div className="flex flex-col gap-4">
            <p className="title">S:</p>
            <div className="links flex flex-col capitalize gap-1">
              <p className="link underline underline-offset-2">Instagram</p>
              <p className="link underline underline-offset-2">LinkedIn</p>
              <p className="link underline underline-offset-2">Twitter</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="title">E:</p>
            <div className="links flex flex-col gap-1">
              <p className="link underline underline-offset-2 mailto:rahulkar9988@gmail.com">
                rahulkar9988@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="title">M:</p>
            <div className="links flex flex-col capitalize gap-1">
              <p className="link underline underline-offset-2">Home</p>
              <p className="link underline underline-offset-2">Services</p>
              <p className="link underline underline-offset-2">Our work</p>
              <p className="link underline underline-offset-2">About us</p>
              <p className="link underline underline-offset-2">Insights</p>
              <p className="link underline underline-offset-2">Contact us</p>
            </div>
          </div>
        </div>

        <div className="copyright flex items-center justify-between text-[#919395]">
          <div className="flex gap-2 ">
            <p>&copy;Nexa 2025</p>{" "}
            <span className="underline underline-offset-2">Legal Terms</span>
          </div>
          <p>&copy; Website by Surjendu.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
