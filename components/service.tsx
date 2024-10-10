import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Service1 from "@/public/images/nairobi.jpg"; // Example image
// Import slick-carousel's styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    id: 1,
    title: "Tax",
    image: Service1,
    list: [
      "Tax Consultation",
      "Corporate Tax Services",
      "Tax Planning",
      "VAT Services",
      "International Tax Advisory",
      "Tax Compliance",
      "Tax Dispute Resolution",
    ],
  },
  {
    id: 2,
    title: "Forensics, Risk and Compliance",
    image: Service1,
    list: [
      "Fraud Investigations",
      "Risk Management",
      "Compliance Audits",
      "Forensic Analysis",
      "Corporate Governance",
      "Data Protection",
      "Regulatory Compliance",
    ],
  },
  {
    id: 3,
    title: "Real Estate & Construction",
    image: Service1,
    list: [
      "Property Development",
      "Construction Project Management",
      "Real Estate Investments",
      "Commercial Leasing",
      "Land Acquisition",
      "Urban Planning",
      "Real Estate Law",
    ],
  },
  {
    id: 4,
    title: "Projects & Infrastructure",
    image: Service1,
    list: [
      "Infrastructure Development",
      "Project Feasibility Studies",
      "Public-Private Partnerships",
      "Infrastructure Financing",
      "Construction Contracts",
      "Sustainability Projects",
      "Infrastructure Policy Planning",
    ],
  },
  {
    id: 5,
    title: "Private Clients",
    image: Service1,
    list: [
      "Estate Planning",
      "Wealth Management",
      "Tax Planning",
      "Investment Advisory",
      "Private Wealth Services",
      "Philanthropy",
      "Family Business Advisory",
    ],
  },
  {
    id: 6,
    title: "International Trade Law",
    image: Service1,
    list: [
      "Trade Policy Advisory",
      "Customs Regulations",
      "International Dispute Resolution",
      "Free Trade Agreements",
      "Export/Import Compliance",
      "Tariff and Non-Tariff Barriers",
      "Trade Finance",
    ],
  },
  {
    id: 7,
    title: "Intellectual Property",
    image: Service1,
    list: [
      "Patents and Trademarks",
      "Copyright Protection",
      "IP Licensing",
      "Patent Litigation",
      "Intellectual Property Strategy",
      "Trade Secret Protection",
      "IP Audits",
    ],
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
      <h2 className="text-2xl md:text-3xl ml-4 md:ml-10 font-bold">Services</h2>
      <Slider {...settings}>
        {services.map((service) => (
          <div
            key={service.id}
            className="relative px-2 group"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image with blur effect on hover */}
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className={`w-full h-auto transition-all duration-500 ease-in-out ${
                hovered === service.id ? "blur-md" : "" // Smooth blur effect on hover
              }`}
            />

            {/* Title */}
            <div className="absolute bottom-0 left-0 text-white p-2">
              <p className="text-xl ml-5">{service.title}</p>
            </div>

            {/* List to display on hover, specific to the service */}
            {hovered === service.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-500 ease-in-out">
                <ul className="text-white text-lg space-y-2">
                  {service.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Service;
