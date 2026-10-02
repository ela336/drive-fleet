import React from "react";
import Link from "next/link";

const AvailableCar = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cardetails`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  const cars = await res.json();

  const availableCars = cars
    .filter(
      (car) => car.availability?.toLowerCase() === "available"
    )
    .slice(0, 6);

  return (
    <section className="min-h-screen bg-[#eae0d5] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#0a0908] sm:text-4xl md:text-5xl">
            Available Cars
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#5e503f] sm:text-base">
            Find the perfect car for your next journey. Browse our available
            cars and choose the one that fits your needs.
          </p>
        </div>

        {availableCars.length === 0 ? (
          <div className="rounded-2xl bg-[#f8f5f0] p-8 text-center shadow-md sm:p-10">
            <h2 className="text-xl font-semibold text-[#0a0908] sm:text-2xl">
              No Cars Available
            </h2>

            <p className="mt-2 text-sm text-[#5e503f] sm:text-base">
              There are currently no available cars.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {availableCars.map((car) => (
              <div
                key={car._id || car.id || car.carName}
                className="textenter group relative overflow-hidden rounded-xl bg-[#f8f5f0] p-3 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-52 overflow-hidden rounded-lg sm:h-56">
                  <img
                    src={car.imageUrl}
                    alt={car.carName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                  <Link
                    href={`/ExploreCars/${car._id}`}
                    className="translate-y-4 rounded-lg bg-[#eae0d5] px-5 py-2.5 text-sm font-semibold text-[#0a0908] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#c6ac8f] sm:px-6 sm:py-3 sm:text-base"
                  >
                    View Details
                  </Link>
                </div>

                <div className="absolute right-4 top-4 z-20">
                  <span className="rounded-full bg-green-600 px-2.5 py-1 text-xs font-semibold text-white sm:px-3 sm:text-sm">
                    Available
                  </span>
                </div>

                <div className="p-3 sm:p-5">

                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-bold text-[#0a0908] sm:text-xl">
                        {car.carName}
                      </h2>

                      <p className="mt-1 text-xs text-[#5e503f] sm:text-sm">
                        {car.carType}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-lg font-bold text-[#22333b] sm:text-xl">
                        ৳{car.dailyRentPrice}
                      </p>

                      <p className="text-[10px] text-[#5e503f] sm:text-xs">
                        per day
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-[#c6ac8f] pt-4 text-xs text-[#5e503f] sm:text-sm">

                    <div className="flex items-start justify-between gap-3">
                      <span className="shrink-0">
                        📍 Pickup
                      </span>

                      <span className="text-right font-medium text-[#0a0908] line-clamp-2">
                        {car.pickupLocation}
                      </span>
                    </div>

                    {car.seatCapacity && (
                      <div className="flex justify-between gap-3">
                        <span>💺 Seats</span>

                        <span className="font-medium text-[#0a0908]">
                          {car.seatCapacity}
                        </span>
                      </div>
                    )}

                  </div>

                  <p className="mt-4 line-clamp-2 text-xs leading-5 text-[#5e503f] sm:text-sm sm:leading-6">
                    {car.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        )}

        {availableCars.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              href="/ExploreCars"
              className="inline-block rounded-lg bg-[#22333b] px-6 py-3 text-sm font-semibold text-[#eae0d5] transition duration-200 hover:bg-[#5e503f] sm:px-7 sm:text-base"
            >
              View All Cars
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default AvailableCar;