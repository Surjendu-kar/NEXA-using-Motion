function Navbar() {
  const navItems = [
    "Services",
    "Our works",
    "about us",
    "insights",
    "contact us",
  ];
  return (
    <div className="fixed z-[999] w-full px-5 lg:px-20 py-8 flex items-center justify-between">
      <div className="logo">
        <svg
          width="80"
          height="30"
          viewBox="0 0 80 30"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="25"
            fontFamily="Arial, sans-serif"
            fontSize="30"
            fontWeight="bold"
          >
            NEXA
          </text>
        </svg>
      </div>

      <div className="links flex gap-10">
        {navItems.map((item, index) => (
          <a
            className={`text-[1.1vw] font-neue font-normal capitalize ${
              index === navItems.length - 1 && "ml-32"
            }`}
            key={index}
            href={`/${item}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
