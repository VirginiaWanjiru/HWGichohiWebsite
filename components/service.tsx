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
    title: "Tax",
    image: Service1,
    list: [
      "Preparation & submission of annual income tax returns ",
      "Tax Planning to minimize our clients tax expenses ",
      "Value Added Tax consultancy services",
      "Tax Tribunal representation",
      "International Tax Advisory",
      "Tax Compliance",
    ],
  },
  {
    id: 2,
    title: "Fraud and Forensic Investigation",
    image: bg2,
    list: [
      "Forensic Investigations",
      "Forensic Audit",
      "Fraud Training",
      "Fraud Risk Assessment",
      "Litigation support",
      "Business disengagement consultancy",
    ],
  },
  {
    id: 3,
    title: "Audit and Assurance services",
    image: bg3,
    list: [
      "Statutory audits ",
      "Forensic audits",
      "Project audits",
      "Special audit and investigations",
      "Environmental impact audits",
      "Acquisition review and corporate advice",
    ],
  },
  {
    id: 4,
    title: "Accounting ",
    image: bg4,
    list: [
      "Keeping and maintaining accounting books ",
      "Payroll administration",
      "Accounting Training packages for non-accountants",
      "Management controls for non-profits",
      "Expert guidance on analysis of financial statements",
    ],
  },
  {
    id: 5,
    title: "Consultancy, corporate restructuring &amp; Business Advisory services",
    image: bg5,
    list: [
      "Company restructuring ",
      "Specialty in company recievership and liquidation",
      "Litigation Support ",
      "Mediation, arbitration and business disengagement support services",
      "Systems design and review ",
      "Project Management",
      "Strategic Management",
    ],
  },
  {
    id: 6,
    title: "Secretarial services",
    image: bg6,
    list: [
      "Filing annual returns.",
      "Company / business registration.",
      "Organizing business meetings",
      "Maintaining company member’s registers.",
      "Processing members dividends.",
      "Issue company shares/ share certificate.",
      "Governance audit",
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
      <h2 className="text-2xl md:text-3xl ml-4 md:ml-10 font-bold mb-10 ">
        Services
      </h2>
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
