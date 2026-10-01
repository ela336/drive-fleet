"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams, useRouter } from "next/navigation";

const Editpage = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/cardetails/${id}`
        );

        const data = await res.json();

        setCar(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch car data");
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  const router = useRouter();
  const onsubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formdata = new FormData(form);

    const editeddata = Object.fromEntries(formdata.entries());

   
    toast.success("Car information updated successfully!");

    router.push("/Myaddedcars");

     try {
      const res = await fetch(`http://localhost:5000/cardetails/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editeddata),
      });
    } catch (error) {
      
      toast.error("Failed to update car information");
    }
  };

  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eae0d5]">
        <p className="text-xl font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10">

      <div className="mx-auto max-w-xl rounded-2xl bg-[#f8f5f0] shadow-xl">

        <div className="text-center border-[#c6ac8f] p-6">
          <h2 className="text-2xl font-bold text-[#0a0908]">
            Edit Car Information
          </h2>

          <p className="text-sm text-[#5e503f]">
            Update your car details
          </p>
        </div>

        <div className="p-5">

          <form
            className="space-y-5"
            onSubmit={onsubmit}
          >

            
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

            
            <button
              type="submit"
              className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
            >
              Save
            </button>

          </form>

          <ToastContainer />

        </div>
      </div>
    </div>
  );
};

export default Editpage;