import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0908] text-[#eae0d5] border-t border-[#5e503f]">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        
          <div>
            <h2 className="text-2xl font-semibold text-[#c6ac8f] mb-4">
              DriveFleet
            </h2>

            <p className="text-[#eae0d5]/70 leading-7 mb-4">
              Your trusted car rental platform. Find the perfect car
              and enjoy a smooth and comfortable journey.
            </p>

            <p className="text-[#eae0d5]/80">
              📍 Noakhali, Bangladesh
            </p>

            <p className="text-[#eae0d5]/80 mt-2">
              📞 +880 1XXX-XXXXXX
            </p>

            <p className="text-[#eae0d5]/80 mt-2">
              ✉️ support@drivefleet.com
            </p>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-[#c6ac8f] mb-5">
              Useful Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[#eae0d5]/75 hover:text-[#c6ac8f] transition"
              >
                Home
              </Link>

              <Link
                href="/explore-cars"
                className="text-[#eae0d5]/75 hover:text-[#c6ac8f] transition"
              >
                Explore Cars
              </Link>

              <Link
                href="/add-car"
                className="text-[#eae0d5]/75 hover:text-[#c6ac8f] transition"
              >
                Add Car
              </Link>

              <Link
                href="/my-bookings"
                className="text-[#eae0d5]/75 hover:text-[#c6ac8f] transition"
              >
                My Bookings
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-[#c6ac8f] mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22333b] text-[#eae0d5] hover:bg-[#c6ac8f] hover:text-[#0a0908] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22333b] text-[#eae0d5] hover:bg-[#c6ac8f] hover:text-[#0a0908] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22333b] text-[#eae0d5] hover:bg-[#c6ac8f] hover:text-[#0a0908] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22333b] text-[#eae0d5] hover:bg-[#c6ac8f] hover:text-[#0a0908] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        
        <div className="border-t border-[#5e503f] mt-10 pt-6 text-center">
          <p className="text-sm text-[#eae0d5]/60">
            © 2026 DriveFleet. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;