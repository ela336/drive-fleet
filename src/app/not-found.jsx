import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#eae0d5] flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">
        <p className="text-7xl sm:text-8xl font-bold text-[#22333b]">
          404
        </p>

        <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-[#0a0908]">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm sm:text-base leading-7 text-[#5e503f]">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          The page may have been moved, deleted, or the URL may be incorrect.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-lg bg-[#22333b] px-6 py-3 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#5e503f] active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;