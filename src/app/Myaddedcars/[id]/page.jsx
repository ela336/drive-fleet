"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const EditPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data: tokenData } = await authClient.token();

        if (!tokenData?.token) {
          toast.error("You are not authenticated");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/cardetails/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenData.token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch car");
        }

        const data = await res.json();

        setCar(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch car data");
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const editedData = {
      carType: formData.get("carType"),
      availability: formData.get("availability"),
      dailyRentPrice: Number(formData.get("dailyRentPrice")),
      imageUrl: formData.get("imageUrl"),
      pickupLocation: formData.get("pickupLocation"),
      description: formData.get("description"),
    };

    try {
      const { data: tokenData } = await authClient.token();

      if (!tokenData?.token) {
        toast.error("You are not authenticated");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cardetails/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(editedData),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error(errorText);
        throw new Error("Failed to update car");
      }

      toast.success("Car information updated successfully!");

      setTimeout(() => {
        router.push("/Myaddedcars");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update car information");
    } finally {
      setLoading(false);
    }
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-[#eae0d5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-[#0a0908]">
            Loading car information...
          </p>
        </div>

        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eae0d5] px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-[#f8f5f0] shadow-xl">
        <div className="border-b border-[#c6ac8f] p-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a0908]">
            Edit Car Information
          </h2>

          <p className="mt-1 text-sm text-[#5e503f]">
            Update your car details
          </p>
        </div>

        <div className="p-5">
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Car Type
              </label>

              <select
                name="carType"
                defaultValue={car.carType || ""}
                required
                className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              >
                <option value="">Select car type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Pickup">Pickup</option>
                <option value="Van">Van</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Availability
              </label>

              <select
                name="availability"
                defaultValue={car.availability || "Available"}
                required
                className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Daily Rent Price
              </label>

              <input
                type="number"
                name="dailyRentPrice"
                defaultValue={car.dailyRentPrice || ""}
                placeholder="Enter daily rent price"
                min="0"
                required
                className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Image URL
              </label>

              <input
                type="url"
                name="imageUrl"
                defaultValue={car.imageUrl || ""}
                placeholder="Enter image URL"
                required
                className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Pickup Location
              </label>

              <input
                type="text"
                name="pickupLocation"
                defaultValue={car.pickupLocation || ""}
                placeholder="Enter pickup location"
                required
                className="w-full rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#0a0908]">
                Description
              </label>

              <textarea
                name="description"
                rows="4"
                defaultValue={car.description || ""}
                placeholder="Enter car description"
                required
                className="w-full resize-none rounded-lg border border-[#c6ac8f] bg-white px-4 py-3 outline-none focus:border-[#22333b]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#22333b] px-6 py-4 font-semibold text-[#eae0d5] transition duration-300 hover:bg-[#0a0908] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default EditPage;