  export default function Wallpic() {
    return (
      <div
        className="flex flex-col md:flex-row h-auto w-full md:max-w-[1440px] mx-auto relative bg-cover bg-center rounded-xl py-8 md:py-36"
        style={{ backgroundImage: "url('./bgwall.png')" }}
      >
        <div className="bg-[#FFF3E3] relative md:left-[50%] md:top-6 top-8 px-6 py-6 md:py-8 md:h-[400px] w-full md:w-[48%]">
          <p className="font-semibold text-center md:text-left my-4 text-md md:text-lg">
            New Arrival
          </p>
          <h1 className="text-[#B88E2F] font-extrabold text-2xl md:text-3xl lg:text-4xl text-center md:text-left mx-auto md:mx-0 md:w-[90%]">
            Discover Our <br /> New Collection
          </h1>
          <p className="font-medium text-center md:text-left text-sm md:text-md mt-6 md:mt-8 mx-auto md:mx-0 md:w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Perspiciatis voluptas quidem enim doloremque.
          </p>
  
          <button className="bg-[#B88E2F] hover:scale-110 hover:bg-green-900 rounded transition-all my-6 py-3 px-10 text-sm text-white font-bold w-full sm:w-auto md:w-auto ">
            BUY NOW
          </button>
        </div>
      </div>
    );
  }