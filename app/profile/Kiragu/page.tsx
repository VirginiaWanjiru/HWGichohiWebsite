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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-center mt-28 z-15 font-bold relative w-full">
        {/* Back Icon */}
        <a href="/">
          <p className="absolute left-0 ml-8 text-white text-lg px-4 flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </p>
        </a>

        {/* Navbar Links */}
        <a href="/profile/Gichohi">
          <p className="text-white text-lg px-4 hover:underline">
            MR H. W. GICHOHI
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kiragu">
          <p className="text-white text-lg px-4 hover:underline">
            MR ISAAC M. KIRAGU{" "}
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kariuki">
          <p className="text-white text-lg px-4 hover:underline">
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
          <p className="text-4xl font-bold text-white mb-4">
            CPA ISAAC M. KIRAGU - MANAGING PARTNER
          </p>
          <p className="text-xl text-gray-200 mb-6">Nairobi, Kenya</p>

          {/* Background/Description */}
          <p className="text-gray-300 text-base mb-8">
            With over 43 years of extensive experience in various fields
            including Accounting, Tax Practice, Auditing, Financial Consulting,
            and Human Resources, Mr. H. W. Gichohi leads our consulting division
            with a commitment to excellence.
          </p>

          {/* Download CV Button 
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="self-start"
          >
            <a href="/cv/isaac-kiragu-cv.pdf">
              <button
                className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all ease-in-out"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <FaDownload
                  className={`mr-2 ${hovered ? "animate-bounce" : ""}`}
                />
                Download CV
              </button>
            </a>
          </motion.div>

          */}
        </motion.div>
      </div>
    </div>
  );
}
