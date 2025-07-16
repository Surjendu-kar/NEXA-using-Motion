function Featured() {
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
      <div className="cards w-full flex flex-wrap gap-10 px-16 pt-10">
        {cardList.map((card, index) => (
          <div
            key={index}
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
