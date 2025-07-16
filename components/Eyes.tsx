function Eyes() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex justify-between gap-1 w-1/3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          {[1, 2].map((item) => (
            <div className="flex items-center justify-center bg-zinc-100 w-[14vw] h-[14vw] rounded-full">
              <div className=" overflow-hidden relative bg-[#212121] w-3/5 h-3/5 rounded-full">
                <div className=" w-full h-7 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                  <div className="w-7 h-full bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
