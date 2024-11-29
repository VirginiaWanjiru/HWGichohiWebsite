"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; // Import the back icon
import ExecutiveImage from "@/public/images/bg3.jpg";

export default function Kiragu() {
  const [hovered, setHovered] = useState(false);

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
        <a href="/profile/Gichohi">
          <p className="text-black text-lg px-4 hover:underline">
            MR H. W. GICHOHI
          </p>
        </a>
        <span className="text-gray-700 mx-4">|</span>
        <a href="/profile/Kiragu">
          <p className="text-black text-lg px-4 hover:underline">
            MR ISAAC M. KIRAGU{" "}
          </p>
        </a>
        <span className="text-gray-700 mx-4">|</span>
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
          <p  className="text-base text-gray-700">P.O. Box 34694, 00100 G.P.O. Nairobi</p>

          <br></br>

          <p className="text-gray-900 font-bold text-xl">Telephone </p>

          <p className="text-base text-gray-700" >Tel: (+254) 720 3981 02</p>

          
        </motion.div>
      </div>

      <div className=" p-20 ">
        <h1 className="text-4xl text-red-900 mb-10 ">
          Background & Expertise{" "}
        </h1>
        <p className="text-xl text-black text-balance">
          CPA Isaac Mwangi Kiragu is the current Managing Partner at H.W.
          Gichohi & Company, Certified Public Accountants, in Kenya. With over
          33 years of professional experience in auditing, taxation, and
          management consultancy, Isaac has cultivated deep expertise in
          corporate governance, forensic investigations, and organizational
          restructuring. Isaac has held several notable leadership roles,
          including serving as a Former Board Member of the Association of
          Certified Fraud Examiners (Kenya Chapter), the National Vice Chairman
          of Mhasibu Sacco Ltd, and the Chairman of the Mhasibu Housing Company
          Ltd. His career highlights include managing high-profile
          receiverships, and successfully restoring renowned enterprises. He has
          also consulted on strategic planning, fraud investigations, and
          restructuring businesses for sustainability and growth. As former
          Lecturer at the University of Nairobi, Isaac has contributed to
          academia by developing curricula, supervising research projects, and
          serving on faculty examination and disciplinary boards. His commitment
          to capacity building and leadership extends to delivering training
          programs in fraud management, operational risk, and financial
          management. Mr. Isaac is an award-winning professional, recognized for
          academic excellence and outstanding contributions in accounting, and
          remains dedicated to fostering innovation and excellence in financial
          management and corporate governance.
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10 ">
          Educational & Professional Qualifications{" "}
        </h1>
        <p className="text-xl text-black text-base">
          <ul>
            <li>Masters of Business Administration - University of Nairobi</li>
            <li>Bachelor of Commerce - University of Nairobi</li>
            <li>Diploma in Forensic Accounting </li>
            <li>Certified Public Accountant(CPA-K)</li>
            <li>Certified Fraud Examiner (CFE)</li>
            <li>Environmental Impact Assessment- Lead Expert </li>
          </ul>
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10 ">
          Professional Membership
        </h1>
        <p className="text-xl text-black">
          <ul>
            <li>Institute of Certified Public Accountants of Kenya (ICPAK) </li>
            <li>The Kenya Institute of Management </li>
            <li>Associate of Certified Fraud Examiners (ACFE)</li>
            <li>Professional Trainers Association</li>
          </ul>
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10">Career Summary</h1>

        <p className="text-xl text-black">
          <ul>
            <li>2011 to date: Managing Partner, H.W. Gichohi & Co. CPA(K)</li>
            <li>1999 – 2010: Resident Partner, H.W. Gichohi & Co. CPA(K)</li>
            <li>1998 – 1999: Senior Manager, H.W. Gichohi & Co. CPA(K)</li>
            <li>
              1995 – 1997: Lecturer – Accounting & Finance Department,
              University of Nairobi
            </li>
            <li>
              1994: Audit Senior, Peat Marwick Certified Public Accountants
            </li>
            <li>
              1991 – 1993: Audit & Tax Senior Accountant, H.W. Gichohi & Co.
              CPA(K)
            </li>
            <li>
              1989 – 1990: Stock Control Accountant, Delmonte Kenya Limited
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
