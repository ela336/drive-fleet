
"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const Editmodal = ({ car }) => {
  console.log(car);

  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedCar = {
      dailyRentPrice: formData.get("dailyRentPrice"),
      description: formData.get("description"),
      availability: formData.get("availability"),
      imageUrl: formData.get("imageUrl"),
      carType: formData.get("carType"),
      pickupLocation: formData.get("pickupLocation"),
    };

    console.log("Updated Car:", updatedCar);
    console.log("User:", user);

    toast.success("Car information updated successfully!");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
      >
        Edit Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#f8f5f0] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#c6ac8f] p-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0a0908]">
                  Edit Car Information
                </h2>

                <p className="mt-1 text-sm text-[#5e503f]">
                  Update your car details
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#5e503f] transition hover:text-[#0a0908]"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="mt-2 space-y-5">
                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Price
                  </label>

                  <input
                    type="number"
                    name="dailyRentPrice"
                    defaultValue={car?.dailyRentPrice}
                    placeholder="Enter daily rent price"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Description
                  </label>

                  <textarea
                    name="description"
                    rows="4"
                    defaultValue={car?.description}
                    placeholder="Enter car description"
                    required
                    className="w-full resize-none rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Availability
                  </label>

                  <select
                    name="availability"
                    defaultValue={car?.availability}
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Image URL
                  </label>

                  <input
                    type="url"
                    name="imageUrl"
                    defaultValue={car?.imageUrl}
                    placeholder="Enter image URL"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Car Type
                  </label>

                  <select
                    name="carType"
                    defaultValue={car?.carType}
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  >
                    <option value="">Select car type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Van">Van</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-[#0a0908]">
                    Pickup Location
                  </label>

                  <input
                    type="text"
                    name="pickupLocation"
                    defaultValue={car?.pickupLocation}
                    placeholder="Enter pickup location"
                    required
                    className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
                >
                  Edit
                </button>
              </form>

              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Editmodal;