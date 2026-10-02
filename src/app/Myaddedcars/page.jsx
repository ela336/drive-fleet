
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import Link from "next/link";


import Delete from "../components/Delete";

const Myaddedcars = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#eae0d5] flex items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-[#0a0908] text-center">
          Please login to see your Added Cars.
        </h1>
      </div>
    );
  }
 const {token}= await auth.api.getToken(
    {
      headers:await headers()
    }
  )
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myadded/${user?.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const cars = await res.json();
  

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10 sm:px-6 lg:px-10">
      
      <div className="mx-auto mb-10 max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#5e503f]">
          DriveFleet
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#0a0908] md:text-4xl">
          My Added Cars
        </h1>

        <p className="mt-2 text-[#5e503f]">
          Manage the cars you have added to DriveFleet.
        </p>
      </div>

     
      {cars.length === 0 ? (
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#c6ac8f] bg-[#f8f1e8] p-10 text-center shadow-md">
          <h2 className="text-2xl font-bold text-[#0a0908]">
            No Cars Added
          </h2>

          <p className="mt-2 text-[#5e503f]">
            You have not added any cars yet.
          </p>

          <Link
            href="/Add-car"
            className="mt-6 inline-block rounded-lg bg-[#22333b] px-6 py-3 text-sm font-semibold text-[#eae0d5] transition hover:bg-[#0a0908]"
          >
            Add Your First Car
          </Link>
        </div>
      ) : (
      
        <div className="mx-auto max-w-6xl space-y-6">
          {cars.map((car) => (
            <div
              key={car._id}
              className="flex flex-col textenter overflow-hidden rounded-2xl border border-[#c6ac8f] bg-[#f8f1e8] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
            >
              
              <div className="h-64 w-full shrink-0 md:h-auto md:w-72">
                <img
                  src={car.imageUrl}
                  alt={car.carName}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Car name + availability */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-2xl font-bold text-[#0a0908]">
                      {car.carName}
                    </h2>

                    <span
                      className={`w-fit rounded-full px-4 py-2 text-xs font-bold capitalize ${
                        car.availability === "available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {car.availability}
                    </span>
                  </div>

                  
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Price */}
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Daily Rent
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#0a0908]">
                        ৳{car.dailyRentPrice}
                      </p>
                    </div>

                  
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Car Type
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {car.carType}
                      </p>
                    </div>

                  
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Seats
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {car.seatCapacity}
                      </p>
                    </div>

                    
                    <div>
                      <p className="text-sm text-[#5e503f]">
                        Pickup Location
                      </p>

                      <p className="mt-1 font-semibold text-[#0a0908]">
                        {car.pickupLocation}
                      </p>
                    </div>
                  </div>

                  
                  {car.description && (
                    <div className="mt-5">
                      <p className="text-sm text-[#5e503f]">
                        Description
                      </p>

                      <p className="mt-1 text-sm text-[#22333b]">
                        {car.description}
                      </p>
                    </div>
                  )}
                </div>

               
                <div className="mt-6 flex flex-wrap gap-3">
                
                 
                  <Link href={`/Myaddedcars/${car._id}`} className="  bg-[#22333b] px-6 py-2.5 btn font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908]">
                   <button>Edit </button>
                  </Link>

                  <Delete car={car}></Delete>
                 
                </div>
              </div>
               
            </div>
            
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Myaddedcars;
