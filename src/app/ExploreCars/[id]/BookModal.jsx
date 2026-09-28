
"use client";

import React, { useState } from "react";

const BookModal = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingData = Object.fromEntries(formData.entries());

    console.log("Booking Data:", {
      ...bookingData,
      carName: car.carName,
      dailyRentPrice: car.dailyRentPrice,
      carType: car.carType,
      image: car.imageUrl,
      seatCapacity: car.seatCapacity,
      pickupLocation: car.pickupLocation,
      description: car.description,
      availability: car.availability,
    });
  };

  return (
    <>
     
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
      >
        Book Now
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

          {/* Modal Box */}
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#f8f5f0] shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#c6ac8f] p-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0a0908]">
                  Book Your Car
                </h2>

                <p className="mt-1 text-sm text-[#5e503f]">
                  Confirm your booking details
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#5e503f] transition hover:text-[#0a0908]"
              >
                ×
              </button>
            </div>

            {/* Car Information */}
            <div className="p-6">

              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={car.imageUrl}
                  alt={car.carName}
                  className="h-56 w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-[#5e503f]">
                    Car Name
                  </p>

                  <p className="font-semibold text-[#0a0908]">
                    {car.carName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#5e503f]">
                    Daily Rent
                  </p>

                  <p className="font-semibold text-[#0a0908]">
                    ৳{car.dailyRentPrice}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#5e503f]">
                    Car Type
                  </p>

                  <p className="font-semibold text-[#0a0908]">
                    {car.carType}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#5e503f]">
                    Seat Capacity
                  </p>

                  <p className="font-semibold text-[#0a0908]">
                    {car.seatCapacity} Seats
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm text-[#5e503f]">
                    Pickup Location
                  </p>

                  <p className="font-semibold text-[#0a0908]">
                    {car.pickupLocation}
                  </p>
                </div>

              </div>

              {/* Booking Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0a0908]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0a0908]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0a0908]">
                    Booking Date
                  </label>

                  <input
                    type="date"
                    name="bookingDate"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                {/* Confirm */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
                >
                  Confirm Booking
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookModal;
