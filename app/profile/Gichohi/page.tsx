"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import ExecutiveImage from "@/public/images/bg3.jpg"; // Replace with actual image path
import { FaDownload } from "react-icons/fa";

export default function ExecutiveProfile() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      {/* Left Side: Profile Image */}
      <motion.div
        className="w-full md:w-1/2 h-96 md:h-full relative"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={ExecutiveImage}
          alt="Executive Image"
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Right Side: Executive Details */}
      <motion.div
        className="w-full md:w-1/2 p-10 md:p-16 bg-white flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Name and Location */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">CPA ISAAC M. KIRAGU</h1>
        <p className="text-xl text-gray-500 mb-6">Nairobi, Kenya</p>

        {/* Background/Description */}
        <p className="text-gray-700 text-base mb-8">
          Isaac M. Kiragu is the managing partner of XYZ Consulting Firm, with over 15 years of experience in
          financial advisory and corporate consulting. He is passionate about driving positive change in
          organizations through innovative solutions and strategic planning.
        </p>

        {/* Download CV Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="self-start"
        >
          <Link href="/cv/isaac-kiragu-cv.pdf" passHref>
            <button
              className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <FaDownload className={`mr-2 ${hovered ? "animate-bounce" : ""}`} />
              Download CV
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
