"use client";
import Image from "next/image";
import Banner from "@/public/images/nairobi.jpg";
import Nairobi from "@/public/images/nairobi5.webp";

import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Audit & Assurance services ",
    options: [
      "Financial Audits",
      "Statutory Audits",
      "Project Audits",
      "Governance audit",
      "Special audit and investigations",
      "Acquisition review and corporate financial advice",
      "Forensic Audits",
      "Environmental impact audits",
    ],
    description:
      "Our firm’s Audit and assurance services comply with the Companies Act, International Auditing Standards (ISAs), International Financial Reporting Standards (IFRSs), and other relevant laws. However, some audits are tailored to our client’s requirements in accordance with contracts between us and the client.",
  },

  {
    id: 2,
    name: "Tax Services",
    options: [
      "Outsourced Tax Compliance Services : This involves preparation & filing of returns and payment of tax payable on behalf of the client. Income Tax, VAT, PAYE, Monthly Rent Income Taxes, Capital Gains Tax, etc",
      "This involves preparation & filing of returns and payment of tax payable on behalf of the client. Income Tax, VAT, PAYE, Monthly Rent Income Taxes, Capital Gains Tax, etc",
      "Tax Accounting & Statutory Book Keeping",
      "Tax Compliance Management Services",
      "International Tax Consultancy (e.g. Expatriate taxation, Transfer pricing) ",
      "Tax Assessment & Investigation Resolution Services.This includes, responding to KRA on behalf of our clients, negotiating audits and timelines,negotations waiver of penalties and interests; representing our clients Tax Tribunals; ",
      "Indirect Tax Services (e.g. matters dealing with VAT, Customs Duty Tax)",
      "Tax Training Services",
      "Tax Back-Stopping Services",
    ],
    description:
      "Our firm’s attentive and expert tax services cover all aspects of corporate and personal taxation. Thus, ensuring our clients are compliant with relevant statutory tax laws and have peace of mind while carrying out their business.",
  },

  {
    id: 3,
    name: "Accounting",
    options: [
      "Keeping and maintaining accounting books",
      "Payroll administration",
      "Accounting Training packages for non-accountants",
      "Management controls for non-profits",
      "Expert guidance on analysis of financial statements",
    ],
    description:
      "Our firm offers expert handling of financial data and a wide range of accounting services to our clients, which is aimed at ensuring that the client’s financial data is well captured and interpreted to enhance business processes and decision making.",
  },
  {
    id: 4,
    name: "Fraud & Forensic Investigation Division",
    options: [
      "Forensic Investigations",
      "Fraud Training",
      "Fraud Risk Assessment",
      "Litigation support",
      "Business disengagement consultancy",
    ],
    description:
      "Our firm’s expertise in fraud and forensic investigation is extensive, backed by a team of certified fraud experts (CFE)s and skilled professionals. Our team is equipped to assess, detect and identify fraudulent activities while providing actionable recommendations to prevent and uncover fraud within the organization.",
  },

  {
    id: 5,
    name: "Business Advisory & Consultancy",
    options: [
      "Company restructuring ",
      "Specialty in company receivership and liquidation",
      "Litigation support",
      "Mediation,arbitration and business disengagement support services",
      "Systems design and review ",
      "Project Management",
      "Personnel recruitment and training",
      "Job Pricing",
      "Salary research",
      "Management training for supervisors and middle management",
      "Strategic management",
      "Conducting business feasibility studies",
      "Business Registration & Set up services"
    ],
    description:
      "Our firm offers comprehensive consultancy, legal and business advisory services for management, dispute resolution support services as well as providing positive and feasible solutions to company’s problems.",
  },

  {
    id: 6,
    name: "Secretarial Services ",
    options: [
      "Filing annual returns",
      "Company/ Business registration",
      "Organizing business meetings",
      "Maintaining company member registers",
      "Processing members dividends ",
      "Issue company shares/ shares certificate",
    ],
    description:
      "Our clients benefit from our firm’s comprehensive range of secretarial services designed to support corporate governance. We offer professional guidance to help our clients enhance their operations while ensuring compliance with relevant industry changes.",
  },
];

export default function Services() {
  // Managing each section's state independently
  const [expandedServices, setExpandedServices] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    // If the same section is clicked, collapse it. Otherwise, expand the new section.
    setExpandedServices((prevState) => (prevState === id ? null : id));
  };

  return (
    <>
      <div>
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
              <span className=" inline-block px-2 mr-auto  pb-2 pt-2">
                Services
              </span>
            </p>
            <br />
            <p className="text-left text-xl font-sans font-bold flex flex-col text-white ml-20">
              <span className="inline px-2 mr-auto pb-2 pt-2">
                H.W. Gichohi & Co. CPA(K)
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-sans mt-10 ml-40 text-red-800 font-bold text-5xl">
            Overview Of Our Services
          </p>
          <p className="mt-10   ml-40 text-base text-lg text-balance ">
            {" "}
            We offer a full range of services provided by a Certified Public
            Accountant firm. Our expertise, technical know-how, and
            professionalism enable us to deliver integrated and holistic
            solutions, tailored to meet the needs of individuals, businesses,
            and organizations
          </p>

          <p className="mt-10   ml-40 text-lg ">
            They include but not limited to:
          </p>
        </div>

        <div className="mt-10 ml-20 ">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.name.toLowerCase().replace(/[^a-z]+/g, "-")} // Converts the name to a URL-friendly id
              onClick={() => toggleExpand(service.id)}
              className=" mb-6 p-6 bg-neutral-100 rounded-lg shadow-lg ml-20 mr-20 hover:bg-gradient-to-r from-gray-300 via red-200 to-red-800 "
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
                    <p className="mt-4 text-lg text-gray-700">
                      {service.description}
                    </p>

                    <p className="text-lg font-semibold mb-2 mt-4">
                      They include :
                    </p>
                    <p className="list-disc ml-4 text-lg">
                      {service.options.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </p>
                  </div>
                )}
              </div>

              
            </div>
          ))}
        </div>
        {/* Full-width Image with Text and Button */}
        <div className="relative  mt-20 ">
          
          
          <div className="relative w-full h-[50vh]">
            <Image
              src={Nairobi}
              alt="Full-width Banner"
              layout="fill"
              objectFit="cover"
              className="opacity-1"
            />
          </div>
          {/* Background Blur Overlay */}
          <div className="absolute inset-0  bg-opacity-2 backdrop-blur-lg z-0 "></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-6 py-4">
              

              {/* Additional Text */}
              <span className="font-bold text-xl text-white">
                Contact us today to schedule a personalized one-on-one
                consultation.
              </span>
              <br />
              <br />
              <br />
              

              {/* Button */}
              <a href="/contact">
                <button className="px-10 py-4 bg-red-700 text-white font-bold  hover:bg-red-900 text-lg rounded ">
                CONTACT US
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
