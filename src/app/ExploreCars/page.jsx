
import React from "react";
import Link from "next/link";


const page = async () => {
  const res = await fetch("http://localhost:5000/cardetails", {
    cache: "no-store",
  });

  const cars = await res.json();

  return (

    <div className="min-h-screen bg-[#eae0d5] px-6 py-12 ">
      <div className="mx-auto max-w-7xl textenter">

      
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#0a0908] md:text-5xl">
            Explore Cars
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-[#5e503f]">
            Find the perfect car for your next journey. Browse our collection
            and choose a car that fits your needs.
          </p>
        </div>
       

        {/* Cars */}
        {cars.length === 0 ? (
          <div className="rounded-2xl bg-[#f8f5f0] p-10 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-[#0a0908]">
              No Cars Found
            </h2>

            <p className="mt-2 text-[#5e503f]">
              There are currently no cars available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car._id || car.id || car.carName}
                className="group relative overflow-hidden rounded-xl p-3 bg-[#f8f5f0] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-3xl"
              >
                {/* Car Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={car.imageUrl}
                    alt={car.carName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">

                  {/* View Details Button */}
                  <Link
                    href={`/ExploreCars/${car._id}`}
                    className="translate-y-4 rounded-lg bg-[#eae0d5] px-6 py-3 font-semibold text-[#0a0908] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#c6ac8f]"
                  >
                    View Details
                  </Link>

                </div>

               
                <div className="absolute right-3 top-3 z-20">
                  {car.availability=="available" ? (
                    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                      Available
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                      Unavailable
                    </span>
                  )}
                </div>

                
                <div className="p-5">

                  
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-[#0a0908]">
                        {car.carName}
                      </h2>

                     
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-[#22333b]">
                        ৳{car.dailyRentPrice}
                      </p>

                      <p className="text-xs text-[#5e503f]">
                        per day
                      </p>
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="space-y-2 border-t border-[#c6ac8f] pt-4 text-sm text-[#5e503f]">

                   

                    {/* Pickup */}
                    <div className="flex justify-between gap-3">
                      <span>📍 Pickup</span>

                      <span className="text-right font-medium text-[#0a0908]">
                        {car.pickupLocation}
                      </span>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-[#5e503f]">
                    {car.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default page;