
"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";

const login = () => {
  const onsubmit =async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());

    console.log(user);
     const { data, error } = await authClient.signIn.email({
            email : user.email,
            password : user.password,
            name :user.name,
            image :user.image
          
        })
       
        if(data)
        {
            redirect('/');
        }
        if(error)
        {
            toast.error(`${error.message}`);
        }
       
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eae0d5] px-4">
      <form
        onSubmit={onsubmit}
        className="w-full max-w-md bg-[#f8ecd2] p-8 rounded-2xl shadow-lg"
      >
       
        <h1 className="text-3xl font-bold text-center text-[#22333b] mb-6">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-[#22333b]">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="textenter w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block mb-2 font-semibold text-[#22333b]">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="textenter  w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className=" textenter  mt-4 w-full bg-[#5e503f] text-white py-3 rounded-lg font-semibold hover:bg-[#22333b] transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-[#5e503f] mt-5">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="textenter font-semibold text-[#22333b] hover:underline"
          >
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="h-px bg-[#c6ac8f] flex-1"></div>

          <span className="text-sm text-[#5e503f]">OR</span>

          <div className="h-px bg-[#c6ac8f] flex-1"></div>
        </div>

        
        <button
          type="button"
          className="textenter  w-full py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] text-[#22333b] font-semibold hover:bg-white transition"
        >
          Continue with Google
        </button>
      </form>
       <ToastContainer />
    </div>
  );
};

export default login;
