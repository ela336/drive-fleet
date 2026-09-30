
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Mybookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
 

  if (!user) {
    return (
      <div className="min-h-screen bg-[#eae0d5] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-[#0a0908]">
          Please login to see your bookings.
        </h1>
      </div>
    );
  }

  const res = await fetch(`http://localhost:5000/bookings/${user.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();
  
   let sum =0;
   bookings.forEach(booking => {
       sum= sum+Number(booking.price);
   });

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10 sm:px-6 lg:px-10">
      
      <div className="mx-auto mb-10 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#0a0908]">
          My Bookings
        </h1>

        <p className="mt-2 text-[#5e503f]">
          View and manage all your car bookings
        </p>
      </div>

    
      {bookings.length === 0 ? (
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#f8f1e8] p-10 text-center shadow">
          <h2 className="text-2xl font-semibold text-[#0a0908]">
            No bookings found
          </h2>

          <p className="mt-2 text-[#5e503f]">
            You haven't booked any car yet.
          </p>
        </div>
      ) : (
        
        <div className="mx-auto max-w-6xl space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#f8f1e8] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
            >
              
              <div className="h-64 w-full shrink-0 md:h-auto md:w-72">
                <img
                  src={booking.carimage}
                  alt={booking.carName}
                  className="h-full w-full object-cover p-3"
                />
              </div>

              
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <h2 className="text-2xl font-bold text-[#0a0908]">
                      {booking.carName}
                    </h2>

                   
                  </div>

                 
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                   
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Driver
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {booking.driver}
                      </p>
                    </div>

                   
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Pickup Location
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {booking.pickloc}
                      </p>
                    </div>

                   
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Per day Price
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#5e503f]">
                        ৳{booking.price}
                      </p>
                    </div>

                    {/* Booking Date */}
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Booking Date
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {new Date(
                          booking.bookingDate
                        ).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      )}


       <div className="flex justify-between p-3     items-center my-3 rounded-xl bg-[#f8f1e8] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
                      <p className="text-m font-semibold text-[#5e503f]">
                        Total Price
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                           ৳{sum}
                      </p>
                    </div>
    </div>
   
  );
};

export default Mybookings;
