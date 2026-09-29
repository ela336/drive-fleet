
"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const BookModal = ({ car }) => {
  console.log(car);
  const [isOpen, setIsOpen] = useState(false);
   const { data: session } = authClient.useSession();
  
    const user = session?.user;

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingD = Object.fromEntries(formData.entries());
  
    const bookingdata ={
      userid:user?.id,
      username:user?.name,
      carid:car._id,
      carName : car.carName,
      carimage:car.imageUrl,
      bookingDate : new Date(bookingD.bookingDate),
      driver:bookingD.driverNeeded,
      note:bookingD.specialNote,
      price:car.dailyRentPrice,
      pickloc: car.pickupLocation

    }
    
     const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingdata),
      });

      const data = res.json();
      console.log(data);
      
    toast.success("Booking Confirmed");


   
  };
  

  return (
    <>
      
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
      >
        Book Now
      </button>

      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
         
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#f8f5f0] shadow-2xl">

           
            <div className="flex items-center justify-between border-b border-[#c6ac8f] p-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0a0908]">
                  Book Your Car
                </h2>

                <p className="mt-1  text-sm text-[#5e503f]">
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

               

              

             
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                 

               

               

                
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

                
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0a0908]">
                    Driver Needed
                  </label>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-[#0a0908]">
                      <input
                        type="radio"
                        name="driverNeeded"
                        value="Yes"
                        required
                      />
                      Yes
                    </label>

                    <label className="flex items-center gap-2 text-[#0a0908]">
                      <input
                        type="radio"
                        name="driverNeeded"
                        value="No"
                      />
                      No
                    </label>
                  </div>
                </div>

               
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0a0908]">
                    Special Note
                  </label>

                  <textarea
                    name="specialNote"
                    rows="4"
                    placeholder="Any special request or note..."
                    className="w-full resize-none rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
                  ></textarea>
                </div>

               
                <button 
                  type="submit"
                  className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]"
                >
                  Confirm Booking
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

export default BookModal;
