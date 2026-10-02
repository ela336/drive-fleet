import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#eae0d5] text-[#0a0908] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">

          <div className="w-full lg:w-1/2 text-center lg:text-left textenter">

            <p className="text-[#5e503f] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              Your Journey Starts Here
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find Your
              <span className="block text-[#22333b]">
                Perfect Ride
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-[#22333b] leading-7 sm:leading-8">
              Explore a wide range of reliable and comfortable cars.
              Choose the perfect vehicle for your journey and enjoy
              a smooth and hassle-free rental experience.
            </p>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/ExploreCars"
                className="inline-block bg-[#22333b] text-[#eae0d5] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#5e503f] active:scale-95 transition duration-200"
              >
                Explore Cars
              </Link>
            </div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/car.png"
              alt="DriveFleet Banner"
              width={1000}
              height={900}
              priority
              className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-[650px] h-auto object-contain car-enter"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;