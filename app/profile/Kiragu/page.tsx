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
      "CPA Isaac Mwangi Kiragu is the current Managing Partner at H.W. Gichohi & Company, Certified Public Accountants, in Kenya.\n With over 33 years of professional experience in auditing, taxation, and management consultancy, Isaac has cultivated deep expertise in corporate governance, forensic investigations, and organizational restructuring. Isaac has held several notable leadership roles, including serving as a Former Board Member of the Association of Certified Fraud Examiners (Kenya Chapter), the National Vice Chairman of Mhasibu Sacco Ltd, and the Chairman of the Mhasibu Housing Company Ltd. His career highlights include managing high-profile receiverships, and successfully restoring renowned enterprises.\n He has also consulted on strategic planning, fraud investigations, and restructuring businesses for sustainability and growth.As former Lecturer at the University of Nairobi, Isaac has contributed to academia by developing curricula, supervising research projects, and serving on faculty examination and disciplinary boards. His commitment to capacity building and leadership extends to delivering training programs in fraud management, operational risk, and financial management.Mr. Isaac is an award-winning professional, recognized for academic excellence and outstanding contributions in accounting, and remains dedicated to fostering innovation and excellence in financial management and corporate governance.",

    options: [],
  },

  {
    id: 2,
    name: "Educational & Professional Qualifications",
    options: [
      "Masters of Business Administration – University of Nairobi",
      "Bachelor of Commerce – University of Nairobi",
      "Diploma in Forensic Accounting",
      "Certified Public Accountant (CPA-K)",
      "Certified Fraud Examiner (CFE)",
      "Environmental Impact Assessment – Lead Expert",
    ],
  },

  {
    id: 3,
    name: " Professional Membership",
    options: [
      "Institute of Certified Public Accountants of Kenya (ICPAK)",
      "The Kenya Institute of Management",
      "Association of Certified Fraud Examiners (ACFE)",
      "Professional Trainers Association",
    ],
  },
  {
    id: 4,
    name: "Career Summary",
    options: [
      "2011 - Present: Managing Partner, H.W. Gichohi & Co. CPA(K)",
      "1999 – 2010: Resident Partner, H.W. Gichohi & Co. CPA(K)",
      "1998 – 1999: Senior Manager, H.W. Gichohi & Co. CPA(K)",
      "1995 – 1997: Lecturer – Accounting & Finance Department, University of Nairobi ",
      "1994: Audit Senior, Peat Marwick Certified Public Accountants",
      "1991 – 1993: Audit & Tax Senior Accountant, H.W. Gichohi & Co. CPA(K)",
      "1989 – 1990: Stock Control Accountant, Delmonte Kenya Limited",
    ],
  },
];

export default function Kiragu() {
  const [hovered, setHovered] = useState(false);

  const [expandedGichohi, setExpandedGichohi] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    // If the same section is clicked, collapse it. Otherwise, expand the new section.
    setExpandedGichohi((prevState) => (prevState === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-center mt-28 z-15 font-bold relative w-full text-black">
        {/* Back Icon */}
        <a href="/">
          <p className="absolute left-0 ml-8 text-red-900 text-lg px-4 flex items-center">
            <FaArrowLeft className="mr-2 " /> Back
          </p>
        </a>

        {/* Navbar Links */}
        <a href="/profile/Kiragu">
          <p className="text-black text-lg px-4 hover:underline">
            MR. ISAAC M. KIRAGU
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kariuki">
          <p className="text-black text-lg px-4 hover:underline">
            MR. JONAH N. KARIUKI
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Gichohi">
          <p className="text-black text-lg px-4 hover:underline">
            MR. HEZEKIAH W. GICHOHI
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
            CPA ISAAC M. KIRAGU - MANAGING PARTNER
          </p>
          <p className="text-xl text-gray-600 mb-6">Nairobi, Kenya</p>

          {/* Background/Description */}
          <p className="text-gray-700 text-base mb-8">
            With over 43 years of extensive experience in various fields
            including Accounting, Tax Practice, Auditing, Financial Consulting,
            and Human Resources, Mr. H. W. Gichohi leads our consulting division
            with a commitment to excellence.
          </p>

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
      <div className="mt-10 ml-20 w-3/4">
        {profile.map((profiles) => (
          <div
            key={profiles.id}
            id={profiles.name.toLowerCase().replace(/[^a-z]+/g, "-")} // Converts the name to a URL-friendly id
            onClick={() => toggleExpand(profiles.id)}
            className=" mb-6 p-6 bg-transparent  shadow-lg ml-20 mr-20 hover:bg-gradient-to-r from-gray-300 via red-200 to-red-800"
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
                expandedGichohi === profiles.id ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {expandedGichohi === profiles.id && (
                <div className="mt-4">
                  <p className="mt-4 text-lg text-gray-700">
                    {profiles.description &&
                      profiles.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index} className="mb-6 text-lg text-gray-700">
                            {" "}
                            {/* Adjust `mb-6` for more space */}
                            {paragraph}
                          </p>
                        ))}
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
