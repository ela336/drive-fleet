"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await authClient.signOut();
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    router.push("/Loginn");
  };

  return (
    <nav className="w-full bg-[#0a0908] border-b border-[#5e503f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[72px] flex items-center justify-between gap-4">

          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={closeMenu}
          >
            <Image
              src="/rent.png"
              alt="DriveFleet Logo"
              width={120}
              height={30}
              priority
              className="w-[90px] sm:w-[105px] md:w-[120px] h-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-base xl:text-lg">
            <Link
              href="/"
              className="text-[#eae0d5] hover:text-[#c6ac8f] transition duration-200"
            >
              Home
            </Link>

            <Link
              href="/ExploreCars"
              className="text-[#eae0d5] hover:text-[#c6ac8f] transition duration-200"
            >
              Explore Cars
            </Link>

            <Link
              href="/Add-car"
              className="text-[#eae0d5] hover:text-[#c6ac8f] transition duration-200"
            >
              Add Car
            </Link>

            <Link
              href="/Mybookings"
              className="text-[#eae0d5] hover:text-[#c6ac8f] transition duration-200"
            >
              My Bookings
            </Link>
            
          </div>

          <div className="hidden lg:flex items-center shrink-0">

            {user ? (
              <div className="relative">

                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#22333b] transition duration-200"
                >
                  <Image
                    src={user.image || "/user.png"}
                    alt={user.name || "User"}
                    width={40}
                    height={40}
                    className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover border-2 border-[#c6ac8f]"
                  />

                  <span className="text-[#eae0d5] text-sm xl:text-base max-w-[120px] truncate">
                    {user.name}
                  </span>

                  <span
                    className={`text-[#c6ac8f] text-sm transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-[#22333b] border border-[#5e503f] rounded-lg shadow-xl p-2 z-50">

                    <Link
                      href="/Add-car"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md transition"
                    >
                      Add Car
                    </Link>

                    <Link
                      href="/Mybookings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md transition"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/Myaddedcars"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md transition"
                    >
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2.5 text-[#c6ac8f] hover:bg-[#5e503f] rounded-md transition"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            ) : (
              <div className="flex items-center gap-2">

                <Link
                  href="/Loginn"
                  className="px-3 py-2 text-[#eae0d5] hover:text-[#c6ac8f] transition"
                >
                  Login
                </Link>

                <Link
                  href="/Register"
                  className="px-4 py-2 rounded-md bg-[#c6ac8f] text-[#0a0908] font-medium hover:bg-[#eae0d5] transition"
                >
                  Register
                </Link>

              </div>
            )}

          </div>

          <div className="flex lg:hidden items-center gap-2">

            {user && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center"
                >
                  <Image
                    src={user.image || "/user.png"}
                    alt={user.name || "User"}
                    width={40}
                    height={40}
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#c6ac8f]"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-[#22333b] border border-[#5e503f] rounded-lg shadow-xl p-2 z-[60]">

                    <div className="px-3 py-2 border-b border-[#5e503f] mb-1">
                      <p className="text-[#eae0d5] font-medium truncate">
                        {user.name}
                      </p>

                      <p className="text-[#c6ac8f] text-xs truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      href="/Add-car"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md"
                    >
                      Add Car
                    </Link>

                    <Link
                      href="/Mybookings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/Myaddedcars"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-3 py-2.5 text-[#eae0d5] hover:bg-[#5e503f] rounded-md"
                    >
                      My Added Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2.5 text-[#c6ac8f] hover:bg-[#5e503f] rounded-md"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#eae0d5] hover:text-[#c6ac8f] transition"
              aria-label="Toggle menu"
            >
              <div className="w-6 space-y-1.5">
                <span
                  className={`block h-0.5 bg-current transition duration-300 ${
                    isMenuOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`block h-0.5 bg-current transition duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 bg-current transition duration-300 ${
                    isMenuOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>

          </div>

        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#5e503f] py-4">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-md text-[#eae0d5] hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
              >
                Home
              </Link>

              <Link
                href="/ExploreCars"
                onClick={closeMenu}
                className="px-4 py-3 rounded-md text-[#eae0d5] hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
              >
                Explore Cars
              </Link>

              <Link
                href="/Add-car"
                onClick={closeMenu}
                className="px-4 py-3 rounded-md text-[#eae0d5] hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
              >
                Add Car
              </Link>
               <Link
                      href="/Myaddedcars"
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-3 rounded-md text-[#eae0d5] hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
                    >
                      My Added Cars
                    </Link>

              <Link
                href="/Mybookings"
                onClick={closeMenu}
                className="px-4 py-3 rounded-md text-[#eae0d5] hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
              >
                My Bookings
              </Link>
              <button
                      onClick={handleLogout}
                       className="px-4 py-3 rounded-md text-red-700 hover:bg-[#22333b] hover:text-[#c6ac8f] transition"
                    >
                      Logout
                    </button>

              {!user && (
                <div className="flex flex-col sm:flex-row gap-2 pt-3">

                  <Link
                    href="/Loginn"
                    onClick={closeMenu}
                    className="w-full sm:w-auto text-center px-4 py-3 rounded-md border border-[#5e503f] text-[#eae0d5] hover:bg-[#22333b] transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/Register"
                    onClick={closeMenu}
                    className="w-full sm:w-auto text-center px-5 py-3 rounded-md bg-[#c6ac8f] text-[#0a0908] font-medium hover:bg-[#eae0d5] transition"
                  >
                    Register
                  </Link>

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;