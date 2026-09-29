
import React from "react";


const Mybookings = () => {
 

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10 sm:px-6 lg:px-10">
      
     
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#0a0908]">
          My Bookings
        </h1>

        <p className="mt-2 text-[#5e503f]">
          View and manage all your car bookings
        </p>
      </div>

      
      <div className="mx-auto max-w-6xl space-y-5">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-[#f8f5f0] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
          >
            
           
            <div className="h-56 w-full md:h-auto md:w-64">
              <img
                src={booking.imageUrl}
                alt={booking.carName}
                className="h-full w-full object-cover"
              />
            </div>

           
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              
              
              <div>
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  
                  <div>
                    <p className="text-sm text-[#5e503f]">
                      Car Name
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a0908]">
                      {booking.carName}
                    </h2>
                  </div>

                 
                 
                </div>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  
                  {/* Total Price */}
                  <div>
                    <p className="text-sm text-[#5e503f]">
                      Total Price
                    </p>

                    <p className="font-bold text-[#22333b]">
                      ৳{booking.totalPrice}
                    </p>
                  </div>

                  {/* Booking Date */}
                  <div>
                    <p className="text-sm text-[#5e503f]">
                      Booking Date
                    </p>

                    <p className="font-semibold text-[#0a0908]">
                      {new Date(booking.bookingDate).toLocaleDateString(
                        "en-GB"
                      )}
                    </p>
                  </div>

                  {/* Driver */}
                  <div>
                    <p className="text-sm text-[#5e503f]">
                      Driver
                    </p>

                    <p className="font-semibold text-[#0a0908]">
                      {booking.driverNeeded}
                    </p>
                  </div>

                 
                  <div>
                    <p className="text-sm text-[#5e503f]">
                      Pickup
                    </p>

                    <p className="font-semibold text-[#0a0908]">
                      {booking.pickupLocation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 flex flex-col gap-3 border-t border-[#c6ac8f] pt-4 sm:flex-row sm:items-center sm:justify-between">
                
                <p className="text-sm text-[#5e503f]">
                  Booking ID: #{booking.id}
                </p>

               
              </div>
            </div>
          </div>
        ))}

        {/* No Booking */}
        {bookings.length === 0 && (
          <div className="rounded-2xl bg-[#f8f5f0] p-10 text-center shadow-md">
            <h2 className="text-xl font-bold text-[#0a0908]">
              No Bookings Found
            </h2>

            <p className="mt-2 text-[#5e503f]">
              You haven't booked any car yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mybookings;
