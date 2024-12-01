import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Service1 from "@/public/images/bg2.jpeg";
import bg2 from "@/public/images/bg2.jpeg";
import bg3 from "@/public/images/bg2.jpeg";
import bg4 from "@/public/images/bg2.jpeg";
import bg5 from "@/public/images/bg2.jpeg";
import bg6 from "@/public/images/bg2.jpeg";

// Import slick-carousel's styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    title: "Audit and Assurance services",
    image: bg3,
    link: "/services#1",
  },
  {
    id: 2,
    title: "Tax",
    image: Service1,
    link: "/services#3",
  },
  {
    id: 3,
    title: "Accounting",
    image: bg4,
    link: "/services#4",
  },
  {
    id: 4,
    title: "Fraud and Forensic Investigation",
    image: bg2,
    link: "/services#2",
  },
  {
    id: 5,
    title: "Consultancy, corporate restructuring & Business Advisory services",
    image: bg5,
    link: "/services#5",
  },
  {
    id: 6,
    title: "Secretarial services",
    image: bg6,
    link: "/services#6",
  },
];

const Service = () => {
  const [hovered, setHovered] = useState<number | null>(null); // Set the type to accept number or null

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-40 md:m-10">
      <h2 className="text-2xl md:text-3xl ml-4 md:ml-10 font-bold mb-10">
        Our Services
      </h2>
      <Slider {...settings}>
        {services.map((service) => (
          <div
            key={service.id}
            id={`${service.id}`}
            className="relative px-2 group"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Card Number */}
            <div
              className={`absolute top-8 left-8 text-white text-6xl font-bold z-10 transition-opacity duration-300 ${
                hovered === service.id ? "opacity-0" : "opacity-80"
              }`}
            >
              {service.id}
            </div>

            {/* Image with blur effect on hover */}
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className={`w-full h-auto transition-all duration-500 ease-in-out ${
                hovered === service.id ? "blur-md" : "" // Smooth blur effect on hover
              }`}
            />

            {/* Title */}
            <div className="absolute bottom-0 left-0 text-white p-4">
              <p className="text-xl ml-5">{service.title}</p>
            </div>
            {/* Button to display on hover */}
            {hovered === service.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-500 ease-in-out">
                <a
                  href={service.link}
                  className="bg-maroon text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Service;
