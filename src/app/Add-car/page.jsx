
"use client";

import React from "react";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";


const Page = () => {
     

const { data: session } = authClient.useSession();
  
    const user = session?.user;
    

  const onsubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formdata = new FormData(form);
    const cardetail = Object.fromEntries(formdata.entries());

    const cardetails ={
      ...cardetail,
      userid:user?.id
    }
   
    console.log(cardetails);

    try {
      const res = await fetch("http://localhost:5000/cardetails", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cardetails),
      });

      const data = await res.json();

      console.log(data);

      
      if (res.ok) {
        form.reset();
        alert("Car added successfully!");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#eae0d5] py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
       
        <div className="text-center mb-6">
          <p className="text-[#5e503f] uppercase tracking-widest text-xs font-semibold mb-2">
            DriveFleet
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0908]">
            Add Your Car
          </h1>

          <p className="text-[#22333b]/70 mt-2 text-sm">
            Add your car details and make it available for customers.
          </p>
        </div>

       
        <form
          className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-[#c6ac8f]"
          onSubmit={onsubmit}
        >
        
          <div className="mb-4">
            <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
              Car Name
            </label>

            <input
              type="text"
              name="carName"
              placeholder="e.g. Toyota Corolla"
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] transition"
            />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
                Daily Rent Price
              </label>

              <input
                type="number"
                name="dailyRentPrice"
                placeholder="e.g. 2500"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] transition"
              />
            </div>

            
            <div>
              <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
                Car Type
              </label>

              <select
                name="carType"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] bg-white"
              >
                <option value="">Select type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Convertible">Convertible</option>
                <option value="Pickup">Pickup</option>
              </select>
            </div>
          </div>

          
          <div className="mt-4">
            <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
              Image URL
            </label>

            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] transition"
            />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
            <div>
              <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
                Seat Capacity
              </label>

              <input
                type="number"
                name="seatCapacity"
                min="1"
                placeholder="e.g. 5"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] transition"
              />
            </div>

            
            <div>
              <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
                Pickup Location
              </label>

              <input
                type="text"
                name="pickupLocation"
                placeholder="e.g. Dhaka"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] transition"
              />
            </div>
          </div>

         
          <div className="mt-4">
            <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
              Description
            </label>

            <textarea
              name="description"
              rows="3"
              placeholder="Describe your car..."
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] resize-none transition"
            ></textarea>
          </div>

         
          <div className="mt-4">
            <label className="block text-[#0a0908] text-sm font-bold mb-1.5">
              Availability Status
            </label>

            <select
              name="availability"
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#c6ac8f] outline-none focus:border-[#5e503f] bg-white"
            >
              <option value="">Select availability</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

         
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full mt-6 bg-[#22333b] text-[#eae0d5] py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0a0908] transition"
          >
            Add Car
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Page;
