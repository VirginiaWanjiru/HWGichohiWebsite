"use client";
import Image from "next/image";
import Banner from "@/public/images/nairobi.jpg";

import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Audit & Assurance services ",
    options: [
      "Financial Audits",
      "Project Audits",
      "Governance audit",
      "Special audit and investigations",
      "Acquisition review and corporate financial advice",
      "Forensic Audits",
      "Environmental impact audits",
      
    ],
    description:
      "Our firm’s Audit and assurance services comply with the Companies Act, InternationalAuditing Standards, International Financial Reporting Standards, and other relevantlaws. However, some audits are tailored to our client’s requirements in accordance withcontracts between us and the client.",
  },
  {
    id: 2,
    name: "Fraud & Forensic Investigation Division",
    options: [
      "Forensic Investigations",
      "Fraud Training",
      "Fraud Risk Assessment",
      "Litigation support",
      "Business disengagement consultancy",
    ],
    description:
      "Our firm’s expertise in fraud and forensic investigation is extensive, backed by a team of certified fraud experts (CFE)s and skilled professionals. Our team is equipped to assess, detect and identify fraudulent activities while providing actionablerecommendations to prevent and uncover fraud within the organisation.",
  },

  {
    id: 3,
    name: "Tax Services",
    options: [
      "Preparation & Submission of annual income tax returns ",
      "Tax Planning to minimize our clients tax expenses",
      "Value Added Tax Consultancy services",
      "Represent our clients in the Tax Tribunal and other forums as necessary",
      "We keep our clients abreast of tax changes through providing them with tax update reports which are produced annually after the budget",
     
    ],
    description:
      "Our firm’s attentive and expert tax services cover all aspects of corporate and personal taxation. Thus, ensuring our clients are compliant with relevant statutory tax laws and have peace of mind while carrying out their business.",
  },

  {
    id: 4,
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
    id: 5,
    name: "Consultancy, corporate restructuring & Business Advisory services",
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
      "Strategic management"

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
          <p className="font-sans mt-10 ml-20 text-red-800 font-bold text-5xl">
            Overview
          </p>
          <p className="mt-10   ml-20 text-base ">
            {" "}
            H. W. Gichohi and Company offers all the services that a Certified
            Public Accountant firm provides.Our competencies are anchored on the
            combination of our EXPERTISE, TECHNICAL KNOW-HOW, continual TRAINING
            and PROFESSIONALISM in delivering all services expected of a
            Certified Public Accounting firm and cater for the needs of clients;
            including individuals, businesses and all types of organizations; by
            providing integrated and holistic solutions through personalized
            services.
          </p>

          <p className="mt-10   ml-20 text-lg ">
            They include but not limited to:
          </p>
        </div>

        <div className="mt-10 ">
          {services.map((service) => (
            <div
              key={service.id}
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
      </div>
    </>
  );
}
