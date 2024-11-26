"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; // Import the back icon
import ExecutiveImage from "@/public/images/bg3.jpg";

export default function Gichohi() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-center mt-32 z-15 font-bold relative w-full font-lg">
        {/* Back Icon */}
        <a href="/">
          <p className="absolute left-0 ml-8 text-white text-lg px-4 flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </p>
        </a>

        {/* Navbar Links */}
        <a href="/profile/Gichohi">
          <p className="text-white text-lg px-4 hover:underline">
            MR H.W. GICHOHI
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Kiragu">
          <p className="text-white text-lg px-4 hover:underline">
            MR ISAAC M. KIRAGU
          </p>
        </a>
        <span className="text-gray-400 mx-4">|</span>
        <a href="/profile/Karanja">
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
            MR H.W. GICHOHI - CONSULTING PARTNER
          </p>
          <p className="text-xl text-gray-200 mb-6">Nairobi, Kenya</p>
        </motion.div>
      </div>

      {/* Dropdowns Section */}
      <div className="w-full flex flex-col items-center mt-10 space-y-4">
        <select className="w-3/4 md:w-1/2 p-3 text-lg rounded bg-gray-800 text-white border border-gray-600">
          <option value="">Select Option 1</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <select className="w-3/4 md:w-1/2 p-3 text-lg rounded bg-gray-800 text-white border border-gray-600">
          <option value="">Select Option 2</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <select className="w-3/4 md:w-1/2 p-3 text-lg rounded bg-gray-800 text-white border border-gray-600">
          <option value="">Select Option 3</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <select className="w-3/4 md:w-1/2 p-3 text-lg rounded bg-gray-800 text-white border border-gray-600">
          <option value="">Select Option 4</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>
  );
}
