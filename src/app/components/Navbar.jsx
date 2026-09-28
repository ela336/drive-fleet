"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isLoggedIn = false;
  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 


  return (
    <nav className="bg-[#0a0908] border-b border-[#5e503f] px-6 text-[30px">
      <div className="max-w-7xl mx-auto flex items-center justify-between">


        <Link href="/" className="flex items-center">
          <Image
            src="/rent.png"
            alt="DriveFleet Logo"
            width={120}
            height={20}
            className="object-contain"
          />
        </Link>

        
        <div className="flex items-center gap-7">
          <Link
            href="/"
            className="text-[#eae0d5] hover:text-[#c6ac8f] transition"
          >
            Home
          </Link>

          <Link
            href="/ExploreCars"
            className="text-[#eae0d5] hover:text-[#c6ac8f] transition"
          >
            Explore Cars
          </Link>

          <Link
            href="/Add-car"
            className="text-[#eae0d5] hover:text-[#c6ac8f] transition"
          >
            Add Car
          </Link>

          <Link
            href="/my-bookings"
            className="text-[#eae0d5] hover:text-[#c6ac8f] transition"
          >
            My Bookings
          </Link>
        </div>

        
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="relative">
              <button className="px-4 py-2 rounded-md bg-[#22333b] text-[#eae0d5] hover:bg-[#5e503f] transition">
                Profile
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-[#22333b] border border-[#5e503f] rounded-md shadow-lg p-2">
                <Link
                  href="/add-car"
                  className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                >
                  Add Car
                </Link>

                <Link
                  href="/my-bookings"
                  className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                >
                  My Bookings
                </Link>

                <Link
                  href="/my-added-cars"
                  className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                >
                  My Added Cars
                </Link>

                <button className="w-full text-left px-3 py-2 text-[#c6ac8f] hover:bg-[#5e503f] rounded">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-[#eae0d5] hover:text-[#c6ac8f] transition"
              >
                Login
              </Link>

              <Link
                href="/Register"
                className="px-5 py-2 rounded-md bg-[#c6ac8f] text-[#0a0908] font-medium hover:bg-[#eae0d5] transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;