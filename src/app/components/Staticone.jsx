"use client";

import React from "react";
import { motion } from "framer-motion";

const Staticone = () => {
  const features = [
    {
      icon: "🚗",
      title: "Wide Range of Cars",
      description:
        "Choose from a variety of reliable cars that fit your needs and travel plans.",
    },
    {
      icon: "🔒",
      title: "Secure Booking",
      description:
        "Book your preferred car with a simple and secure rental process.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description:
        "Find competitive rental prices without compromising on comfort and quality.",
    },
    {
      icon: "🕐",
      title: "Flexible Rental",
      description:
        "Enjoy flexible rental options that make planning your journey easier.",
    },
  ];

  return (
    <section className="py-20 bg-[#22333b]">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#c6ac8f] uppercase tracking-widest text-sm font-semibold mb-3">
            Why Choose DriveFleet
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#eae0d5]">
            Everything You Need for a Better Journey
          </h2>

          <p className="mt-4 text-[#eae0d5]/80 leading-7">
            We make car rental simple, convenient, and reliable so you
            can focus on enjoying your journey.
          </p>
        </div>
         </motion.div>
          <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#eae0d5] border border-[#5e503f] rounded-xl p-7"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#c6ac8f] text-3xl mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0a0908] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#22333b] leading-7 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
         </motion.div>
     
    </section>
  );
};

export default Staticone;