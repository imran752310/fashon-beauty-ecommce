export const NewCollection = () => {
  return (
    <div className="my-10 px-4" data-aos="fade-up"
    data-aos-anchor-placement="top-center">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Banner */}
        <div className="w-full md:w-2/3 overflow-hidden">
          <div className="bg-[url('/images/banner-1.jpg')] bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[450px]  transform transition-transform duration-300 hover:scale-105 ">
            <div className="w-[90%] h-full mx-auto flex flex-col justify-center space-y-4 p-6 sm:p-10">
              <h3 className="text-sm sm:text-base uppercase text-black">New Collection</h3>
              <h1 className="text-xl sm:text-4xl md:text-4xl font-Urbanist leading-tight text-black">
                Discover Our <br /> Autumn Skincare
              </h1>
              <div>
                <button className="w-36 sm:w-40 p-2 sm:p-3 text-black bg-white hover:bg-black hover:text-white rounded font-semibold text-sm sm:text-md cursor-pointer transition-all duration-500">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Banner */}
        <div className="w-full md:w-1/3 overflow-hidden">
          <div className="bg-[url('/images/banner-2.jpg')] bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[450px]  transform transition-transform duration-300 hover:scale-105 ">
            <div className="w-[90%] h-full mx-auto flex flex-col justify-center space-y-4 p-6 sm:p-10">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-Urbanist leading-tight text-black">
                25% off Everything
              </h1>
              <p className="text-sm text-gray-600">
                Makeup with extended range in colors for every human.
              </p>
              <div>
                <button className="w-36 sm:w-40 p-2 sm:p-3 text-black bg-white hover:bg-black hover:text-white rounded font-semibold text-sm sm:text-md cursor-pointer transition-all duration-500">
                  Shop Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
