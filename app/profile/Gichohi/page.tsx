"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; // Import the back icon
import ExecutiveImage from "@/public/images/bg3.jpg";

const profile = [
  {
    id: 1,
    name: "Background and Experience ",

    description:
      "Hezekiah Wang’ombe Gichohi is currently the Consulting Partner at H.W.Gichohi & Company CPA(K). With over 58 years of cumulative experience in auditing, taxation, and management consultancy, Hezekiah has built a remarkable career specializing in organizational development, strategic financial management, and the restructuring of businesses. Mr. Hezekiah has extensive expertise in auditing for diverse sectors, including insurance, banking, NGOs, manufacturing, and quasi-government institutions. He has played a pivotal role in turning around financially distressed organizations, including managing over 15 companies under receivership and successfully restoring them to profitability. Mr. Hezekiah has contributed significantly to the accounting profession. He initiated the acquisition of ICPAK's CPA Centre. He also initiated the establishment of the Mhasibu Sacco Society in 1986, which has grown to over 23,000 members globally. Beyond his professional achievements, Hezekiah has a passion for community service. He founded a water company that serves over 200 families, providing annual dividends of up to 30% for shareholders. As a mentor and leader, he has trained and guided countless professionals in their careers while serving as a patron for schools and health centers in his community.",

    options: [],
  },

  {
    id: 2,
    name: "Educational & Professional Qualifications",
    options: ["1968 - 1972: Kenya Polytechnic – ACCA"],
  },

  {
    id: 3,
    name: " Professional Membership",
    options: [
      "Fellow of the Institute of Certified Public Accountants of Kenya (ICPAK)",
      "Fellow of the Association of Chatered Accountants, London (ACCA)",
      "Fellow of the Kenya Institute of Management",
      "Professional Trainers Association",
    ],
  },
  {
    id: 4,
    name: "Career Summary",
    options: [
      "2011 - Present : Consulting Partner, H.W. Gichohi & Co. CPA(K)",
      "1986 – 2011: Managing Partner, H.W. Gichohi & Co. CPA(K)",
      "1979 – 1985: Managing Partner, Wanyeki Gichohi & Company, Certified Public Accountants",
      "1976 – 1979: Audit Senior, Delloite & Touche, Certified Public  Accountants",
      "1974 – 1976: Senior Accountant, Delloite & Touche, Certified Public Accountants",
      "1966 – 1974: Audit Assistant, Delloite & Touche, Certified Public Accountants",
    ],
  },
];

export default function Gichohi() {
  const [hovered, setHovered] = useState(false);

  const [expandedGichohi, setExpandedGichohi] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    // If the same section is clicked, collapse it. Otherwise, expand the new section.
    setExpandedGichohi((prevState) => (prevState === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-center mt-32 z-15 font-bold relative w-full font-lg">
        {/* Back Icon */}
        <a href="/">
          <p className="absolute left-0 ml-8 text-red-900 text-lg px-4 flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </p>
        </a>

        {/* Navbar Links */}
        <a href="/profile/Gichohi">
          <p className="text-black text-lg px-4 hover:underline">
            MR H.W. GICHOHI
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kiragu">
          <p className="text-black text-lg px-4 hover:underline">
            MR ISAAC M. KIRAGU
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kariuki">
          <p className="text-black text-lg px-4 hover:underline">
            MR J. N. KARIUKI
          </p>
        </a>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* Left Side: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 h-96 md:h-1/2 relative ml-10 mr-10 mt-10 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="relative w-full h-54">
            <Image
              src={ExecutiveImage}
              alt="Executive Image"
              style={{ objectFit: "cover" }}
              className="rounded-t-lg md:rounded-none"
            />
          </div>
        </motion.div>

        {/* Right Side: Executive Details */}
        <motion.div
          className="w-full md:w-1/2 p-10 md:p-16 bg-transparent flex flex-col justify-center mt-10 rounded mr-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          {/* Name and Location */}
          <p className="text-4xl font-bold text-black mb-4">
            MR H.W. GICHOHI - CONSULTING PARTNER
          </p>
          <p className="text-xl text-gray-900 mb-6">Nairobi, Kenya</p>

          <p className="text-gray-900 text-xl font-bold">Physical Address </p>
          <p className="text-base text-gray-700">
            Allimex Plaza, 4th Floor, Off Mombasa Road Next to Eka Hotel,
            Nairobi Kenya
          </p>
          <br></br>

          <p className="text-gray-900 font-bold text-xl ">Postal Address</p>
          <p className="text-base text-gray-700">
            P.O. Box 34694, 00100 G.P.O. Nairobi
          </p>

          <br></br>

          <p className="text-gray-900 font-bold text-xl">Telephone </p>

          <p className="text-base text-gray-700">Tel: (+254) 720 3981 02</p>
        </motion.div>
      </div>

      <div className="mt-10 ml-20 w-3/4  ">
        {profile.map((profiles) => (
          <div
            key={profiles.id}
            id={profiles.name.toLowerCase().replace(/[^a-z]+/g, "-")} // Converts the name to a URL-friendly id
            onClick={() => toggleExpand(profiles.id)}
            className=" mb-6 p-6 bg-transparent  shadow-lg ml-20 mr-20 hover:bg-gradient-to-r from-gray-300 via red-200 to-red-800  "
          >
            <div className="flex justify-between items-center">
              {/* Section Title */}
              <h2 className="text-lg font-bold">{profiles.name}</h2>

              {/* Expand Icon */}
              <button
                onClick={() => toggleExpand(profiles.id)}
                className="text-xl text-gray-500 hover:text-gray-700"
              >
                {expandedGichohi === profiles.id ? "-" : "+"}
              </button>
            </div>

            {/* Service Description and Options */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedGichohi === profiles.id ? "max-h-[600px]" : "max-h-0"
              }`}
            >
              {expandedGichohi === profiles.id && (
                <div className="mt-4">
                  <p className="mt-4 text-lg text-gray-700">
                    {profiles.description}
                  </p>

                  <p className="list-disc ml-4 text-lg">
                    {profiles.options.map((option, index) => (
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
  );
}
