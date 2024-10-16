"use client";

import Banner from "@/public/images/nairobi5.jpg";
import Consulting from "@/public/images/image2.png";
import Accounting from "@/public/images/image 3.png";
import Assurance from "@/public/images/image 4.png";
import Tax from "@/public/images/image 5.png";
import Image from "next/image";

import { useState } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    name: "Audit and Business Advisory Services ",
    image: Tax,
    options: [
      "Project Audits ",
      "Special audit and investigations ",
      "Acquisition review and corporate financial advice",
      "Forensic Audits",
      "Environmental impact audits",
    ],
  },
  {
    id: 2,
    name: "Management consultancy services division",
    image: Assurance,
    options: [
      "Finance and consultancy services ",
      "Information Technology",
      "Systems design and their regular review",
      "Business performance review",
      "Economic studies",
      "Feasibility studies and market research",
      "Structure designs for efficiency",
      "Company re-structuring and re-engineering",
    ],
  },
  {
    id: 3,
    name: "Human Resources and Personnel Division",
    image: Accounting,
    options: [
      "Personnel Recruitment",
      "Personnel training ",
      "Management development and training ",
      "Job Pricing exercise",
      "Salary and renumaration research",
      "Maintenance of a wide range of personnel databank",
    ],
  },
  {
    id: 4,
    name: "Corporate Re-construction and insolvency devision",
    image: Consulting,
    options: ["Audit Consulting", "Risk Management", "Financial Strategy"],
  },
  {
    id: 5,
    name: "Accounting ",
    image: Consulting,
    options: ["Audit Consulting", "Risk Management", "Financial Strategy"],
  },
  {
    id: 6,
    name: "Secretarial",
    image: Consulting,
    options: ["Audit Consulting", "Risk Management", "Financial Strategy"],
  },
  {
    id: 7,
    name: "Legal and Mediation ",
    image: Consulting,
    options: ["Audit Consulting", "Risk Management", "Financial Strategy"],
  },
  {
    id: 8,
    name: "Forensics",
    image: Consulting,
    options: ["Audit Consulting", "Risk Management", "Financial Strategy"],
  },
];

export default function Services() {
  return (
    <>
      <ProgressBar />

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

      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-6 mt-10">
        {services.map((service) => (
          <Card
            key={service.id}
            className="w-full p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex items-center">
              {/* Left Side: Image */}
              <div className="w-1/3 flex justify-center">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={150}
                  height={150}
                  className="rounded-md transition-transform ease-in-out duration-300 hover:scale-95"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="w-2/3 pl-4">
                <CardHeader className="flex flex-col items-start">
                  <CardTitle className="text-lg font-bold ">
                    {service.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-justify mt-1 mb-1">
                  <div className="mt-2 rounded-md p-3">
                    <p className="text-sm font-semibold mb-2">
                      Available Options:
                    </p>
                    <ul className="list-disc ml-4 text-sm">
                      {service.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
