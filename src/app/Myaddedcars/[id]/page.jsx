
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Editpage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/cardetails/${id}`);
  const car = await res.json();

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-[#f8f5f0] shadow-xl textenter ">

       
        <div className="text-center  border-[#c6ac8f] p-6 ">
          <h2 className="text-2xl font-bold text-[#0a0908]">
            Edit Car Information
          </h2>

          <p className=" text-sm text-[#5e503f]">
            Update your car details
          </p>
        </div>

        {/* Form */}
        <div className="p-5">
          <form className="space-y-5">

            {/* Car Type */}
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

              {/* Availability */}
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


            {/* Price */}
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

          

           

            
            

            {/* Submit */}
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
