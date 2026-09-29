
"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const onsubmit = async(e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());

    const { data, error } = await authClient.signUp.email({
        email : user.email,
        password : user.password,
        name :user.name,
        image :user.image
      
    })
    console.log({data,error});
    if(data)
    {
        redirect('/login');
    }
    if(error)
    {
        toast.error(`${error.message}`);
    }
   


  };
  const handlegooglesignin = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eae0d5] px-4">
      <form
        className="w-full max-w-md bg-[#f8ecd2] p-8 rounded-2xl shadow-lg"
        onSubmit={onsubmit}
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-[#22333b] mb-6 textenter">
          Create Account
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className=" textenter block mb-2 font-semibold text-[#22333b]">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        </div>

        
        <div className="mb-4">
          <label className=" textenter block mb-2 font-semibold text-[#22333b]">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        </div>

        
        <div className="mb-4">
          <label className=" textenter block mb-2 font-semibold text-[#22333b]">
            Photo URL
          </label>

          <input
            type="url"
            name="photo"
            placeholder="Enter your photo URL"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        </div>

        
        <div className="mb-2">
          <label className=" textenter block mb-2 font-semibold text-[#22333b]">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] outline-none focus:ring-2 focus:ring-[#5e503f]"
          />
        
        </div>

       
        <button
          type="submit"
          className="mt-4 mb-3 w-full bg-[#5e503f] text-white py-3 rounded-lg font-semibold hover:bg-[#22333b] transition"
        >
          Create Account
        </button>

        
        <button onClick={handlegooglesignin}
  type="button"
  className="w-full  py-3 rounded-lg border border-[#c6ac8f] bg-[#fefaf2] text-[#22333b] font-semibold hover:bg-white transition flex items-center justify-center gap-2"
>
  <FcGoogle className="text-xl" />
  <span>Continue with Google</span>
</button>

      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;

