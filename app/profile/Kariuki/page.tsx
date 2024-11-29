"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; // Import the back icon
import ExecutiveImage from "@/public/images/bg3.jpg";

export default function Kariuki() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-center mt-28 z-15 font-bold relative w-full">
        {/* Back Icon */}
        <a href="/">
          <p className="absolute left-0 ml-4 text-red-900 text-lg px-4 flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </p>
        </a>

        {/* Navbar Links */}
        <a href="/profile/Gichohi">
          <p className="text-black text-lg px-4 hover:underline">
            MR H. W. GICHOHI
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
            MR J. N. KARIUKI - ASSOCIATE PARTNER
          </p>
          <p className="text-xl text-gray-600 mb-6">Nairobi, Kenya</p>

          {/* Background/Description */}
          <p className="text-gray-900 text-base mb-8">
            An Associate member of both CPA and CPS with over 17 years of
            experience in Financial Services Sector, Mr. J. N. Kariuki
            specializes in Accounting, Auditing, Financial Advisory, and
            Management Consultancy.
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

      <div className=" p-20 ">
        <h1 className="text-4xl text-red-900 mb-10 ">
          Background & Expertise{" "}
        </h1>
        <p className="text-xl text-black text-balance ">
          Jonah Njuguna Kariuki is the Associate Partner at H.W. Gichohi &
          Company, Certified Public Accountants, in Kenya. With over 30 years of
          professional experience, Jonah is a seasoned expert in financial and
          assurance audits, governance and compliance audits, and forensic
          investigations. He has a strong command handling of secretarial,
          taxation and litigation matters, along with vast experience in
          institutional management. Jonah has continuously enhanced his
          expertise through regular participation in professional development
          courses on topics such as audit quality, tax compliance, and
          leadership. In his role, Jonah oversees large portfolios of financial
          assurance and project audits, represents clients in tax appeals and
          alternative dispute resolution, and contributes to fraud
          investigations and litigation support. He is deeply involved in
          capacity building, mentoring junior professionals, and ensuring the
          firm adheres to quality standards. Jonah has served in leadership
          roles, including as the Former Chairman of the Credit Committee at
          Mhasibu Sacco Society and Former Board Member of Gatanga Girls High
          School. His dedication to professional and corporate governance,
          combined with his expertise in mediation and strategic planning, makes
          him a key asset to our firm and the accounting profession.
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10" >Educational & Professional Qualifications </h1>
        <p className="text-xl text-black text-base">
          <ul>
            <li>Master of Business Administration, Moi University</li>
            <li>Certified Public Secretary (CPS)</li>
            <li>Certified Public Accountant (CPA-K)</li>
            <li>Certified Professional Mediator (CPM) – MTI East Africa</li>
            <li>Governance Auditor Accreditation - ICPSK</li>
          </ul>
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10 ">Professional Membership</h1>
        <p className="text-xl text-black text-base">
          <ul>
            <li>Institute of Certified Public Accountants of Kenya (ICPAK)</li>
            <li>Institute of Certified Public Secretaries of Kenya (ICPSK)</li>
          </ul>
        </p>

        <h1 className="text-4xl text-red-900 mb-10 mt-10 ">Career Summary</h1>

        <p className="text-xl text-black text-base">
          <ul>
            <li>
              1994 – 1999: Taxation & Consultancy Manager, H.W. Gichohi & Co.
              CPA(K)
            </li>
            <li>
              2000 – 2001: Senior Auditor, Kassim Lakha Abdula (Pannel Kerr
              Forster) Certified Public Accountants
            </li>
            <li>2002 to date: Associate Partner, H.W. Gichohi & Co. CPA(K)</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
