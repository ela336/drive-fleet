import React from "react";
import BookModal from "./BookModal";

const specIcon = (path) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

const ICONS = {
  type: specIcon(<path d="M3 13l1.5-5A2 2 0 0 1 6.4 6.5h11.2A2 2 0 0 1 19.5 8L21 13v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />),
  seats: specIcon(<><circle cx="12" cy="7" r="3" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>),
  location: specIcon(<><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  price: specIcon(<><circle cx="12" cy="12" r="9" /><path d="M9.5 15.5c.5.7 1.4 1 2.5 1 1.7 0 3-1 3-2.2 0-1.5-1.4-2-3-2.3-1.6-.3-3-.8-3-2.3 0-1.2 1.3-2.2 3-2.2 1.1 0 2 .3 2.5 1M12 7.5v1M12 15.5v1" /></>),
};

const SpecCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-[#1c1c1e] p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2d] text-[#c6ac8f]">
      {icon}
    </div>
    <div>
      <p className="text-xs text-[#8a8a8e]">{label}</p>
      <p className="mt-0.5 font-semibold text-white">{value}</p>
    </div>
  </div>
);

const Details = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/cardetails/${id}`, {
    cache: "no-store",
  });

  const car = await res.json();

  return (
    <div className="min-h-screen bg-[#0a0908] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        
        <p className="text-sm font-medium text-[#8a8a8e]">
          Explore Cars <span className="mx-1 text-[#4a4a4e]">/</span>{" "}
          <span className="text-[#c6ac8f]">{car.carType}</span>{" "}
          <span className="mx-1 text-[#4a4a4e]">/</span> {car.carName}
        </p>

       
        <div className="mt-6 overflow-hidden rounded-3xl bg-[#141416] shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_1.15fr_1fr]">
          
            <div className="order-2 flex flex-col justify-center gap-3 p-6 sm:p-8 lg:order-1 lg:p-10">
              <SpecCard icon={ICONS.type} label="Car Type" value={car.carType} />
              <SpecCard icon={ICONS.seats} label="Seats" value={car.seatCapacity} />
              <SpecCard icon={ICONS.location} label="Pickup Location" value={car.pickupLocation} />
            </div>

            {/* CENTER IMAGE */}
            <div className="order-1 flex flex-col items-center justify-center p-6 sm:p-8 lg:order-2 lg:p-10">
              <div className="flex w-full items-center justify-between">
                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold shadow ${
                    car.availability === "available"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-red-500/15 text-red-400"
                  }`}
                >
                  ● {car.availability === "available" ? "Available" : "Unavailable"}
                </span>

                <span className="rounded-full bg-[#1c1c1e] px-4 py-1.5 text-xs font-semibold text-[#c6ac8f]">
                  ৳{car.dailyRentPrice}/day
                </span>
              </div>

              <img
                src={car.imageUrl}
                alt={car.carName}
                className="mt-6 h-[220px] w-full object-contain sm:h-[280px] lg:h-[320px]"
              />

              <div className="mt-6 text-center">
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                  {car.carName}
                </h1>
                <p className="mt-1 text-sm text-[#8a8a8e]">{car.carType}</p>
              </div>
            </div>

            {/* RIGHT: PRICE + DESCRIPTION + CTA */}
            <div className="order-3 flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
              <SpecCard icon={ICONS.price} label="Daily Rate" value={`৳${car.dailyRentPrice}`} />

              <div className="rounded-2xl bg-[#1c1c1e] p-4">
                <p className="text-xs text-[#8a8a8e]">Description</p>
                <p className="mt-1 text-sm leading-6 text-[#c9c9cc]">
                  {car.description}
                </p>
              </div>

              {car.availability === "available" ? (
                <BookModal car={car} />
              ) : (
                <button
                  disabled
                  className="w-full cursor-not-allowed rounded-xl bg-[#2a2a2d] px-6 py-4 font-semibold text-[#6a6a6e]"
                >
                  Currently Unavailable
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;