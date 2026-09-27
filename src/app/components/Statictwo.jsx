import {
  FaCar,
  FaUsers,
  FaLocationDot,
  FaStar,
  FaLock,
} from "react-icons/fa6";

const Statictwo = () => {
  const stats = [
    {
      icon: <FaCar />,
      text: "500+ Cars Available",
    },
    {
      icon: <FaUsers />,
      text: "10K+ Happy Customers",
    },
    {
      icon: <FaLocationDot />,
      text: "20+ Locations",
    },
    {
      icon: <FaStar />,
      text: "4.9/5 Customer Rating",
    },
    {
      icon: <FaLock />,
      text: "100% Secure Booking",
    },
  ];

  return (
    <section className="bg-[#c6ac8f] overflow-hidden py-5">
      <div className="flex w-max animate-marquee">
        {[...stats, ...stats].map((stat, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            {/* Icon + Text */}
            <div className="flex items-center gap-3 mx-8 whitespace-nowrap">
              <span className="text-[#0a0908] text-xl">
                {stat.icon}
              </span>

              <span className="text-[#0a0908] text-lg md:text-xl font-semibold">
                {stat.text}
              </span>
            </div>

            {/* Separator */}
            <span className="text-[#5e503f] text-2xl">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statictwo;