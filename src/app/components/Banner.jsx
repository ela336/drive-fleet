
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#eae0d5] text-[#0a0908]">
      <div className="max-w-7xl mx-auto px-6 py-24 flex justify-center items-center">

        <div className="textenter" >

          
          <p className="text-[#5e503f] uppercase tracking-widest text-sm font-semibold mb-5">
            Your Journey Starts Here
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your
            <span className="block text-[#22333b]">
              Perfect Ride
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-[#22333b] leading-8">
            Explore a wide range of reliable and comfortable cars.
            Choose the perfect vehicle for your journey and enjoy
            a smooth and hassle-free rental experience.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/explore-cars"
              className="inline-block bg-[#22333b] text-[#eae0d5] px-7 py-3 rounded-lg font-semibold   hover:bg-[#5e503f] active:scale-95"
            >
              Explore Cars
            </Link>
          </div>

        </div>
       
         
         <Image
                    src="/car.png"
                    alt="DriveFleet Banner"
                    width={1000}
                    height={900}
                    className="object-contain car-enter"
         />
      

      </div>
      
    </section>
  );
};

export default Banner;
