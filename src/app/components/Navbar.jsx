
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

 

  return (
    <nav className="bg-[#0a0908] border-b border-[#5e503f] px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/rent.png"
            alt="DriveFleet Logo"
            width={120}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-7 text-lg">
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

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <div className="relative">

              {/* User Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#22333b] transition"
              >

               
                <Image
                  src={user.image || "/user.png"}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#c6ac8f]"
                />

                
                <span className="text-[#eae0d5] text-base">
                  {user.name}
                </span>

              
                <span
                  className={`text-[#c6ac8f] text-lg transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>

              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-[#22333b] border border-[#5e503f] rounded-md shadow-lg p-2 z-50">

                  <Link
                    href="/Add-car"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                  >
                    Add Car
                  </Link>

                  <Link
                    href="/my-bookings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/my-added-cars"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-3 py-2 text-[#eae0d5] hover:bg-[#5e503f] rounded"
                  >
                    My Added Cars
                  </Link>

                  <button
                    onClick={async () => {
                      await authClient.signOut();
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-[#c6ac8f] hover:bg-[#5e503f] rounded"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <>
             
              <Link
                href="/Loginn"
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
