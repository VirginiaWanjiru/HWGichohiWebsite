"use client";
import Image from 'next/image'
import Banner from '@/public/images/nairobi.jpg'

import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Audit & Assurance services ",
    options: [
      "Project Audits",
      "Special audit and investigations",
      "Acquisition review and corporate financial advice",
      "Forensic Audits",
      "Environmental impact audits",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec justo et nunc volutpat eleifend ut a leo. Donec at lectus ut erat convallis dignissim. Nulla facilisi.",
  },
  {
    id: 2,
    name: "Fraud, and Forensic Investigation Division",
    options: [
      "Finance and consultancy services",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },

  {
    id: 3,
    name: "Tax Services",
    options: [
      "Finance and consultancy services",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },

  {
    id: 4,
    name: "Accounting",
    options: [
      "Finance and consultancy services",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 5,
    name: "Consultancy, corporate restructuring & Business Advisory services",
    options: [
      "Finance and consultancy services",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },

  {
    id: 6,
    name: "Secretarial Services ",
    options: [
      "Finance and consultancy services",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

export default function Services() {
  // Managing each section's state independently
  const [expandedServices, setExpandedServices] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    // If the same section is clicked, collapse it. Otherwise, expand the new section.
    setExpandedServices(prevState => (prevState === id ? null : id));
  };

  return (
    <>
      <div style={{ height: "64vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            objectFit: "cover", // Adjust the color and opacity as needed
          }}
        >
          <p className="text-left text-7xl font-bold flex flex-col mt-48 text-white ml-20">
            <span className=" inline-block px-2 mr-auto  pb-2 pt-2">Services</span>
          </p>
          <br />
          <p className="text-left text-xl font-sans font-bold flex flex-col text-white ml-20">
            <span className="inline px-2 mr-auto pb-2 pt-2">
              H.W. Gichohi & Co. CPA(K)
            </span>
          </p>
        </div>
      </div>

         

        <div className="mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className="mb-6 p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                
                {/* Section Title */}
                <h2 className="text-lg font-bold">{service.name}</h2>

                {/* Expand Icon */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="text-xl text-gray-500 hover:text-gray-700"
                >
                  {expandedServices === service.id ? "-" : "+"}
                </button>
              </div>

              {/* Service Description and Options */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedServices === service.id ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expandedServices === service.id && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2">Available Options:</p>
                    <ul className="list-disc ml-4 text-sm">
                      {service.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    
    </>
  );
}
