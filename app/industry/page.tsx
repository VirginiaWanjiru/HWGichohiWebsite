"use client";

import React, { useEffect, useState } from "react";
import IndustryCarousel from "@/components/ui/industry-carousel";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Contact from "@/public/images/manufacturing_sector.jpg";
import Banner from "@/public/images/landing.png";
import Image from "next/image";


const Industry = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders after the first client-side render
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // This will prevent rendering of components that might cause hydration errors until after the first client-side render
    return null;
  }

  return (
    <>
    

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
            <span className="inline-block px-2 mr-auto pb-2 pt-2">
              Industries
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
        <p className="mt-10 ml-40 text-red-800 font-bold text-5xl">Overview</p>
        <p className="mt-10 ml-40 text-lg text-balance text-left ">
          The accounting and audit services sector is vital to the financial
          ecosystem, providing transparency and accountability essential for
          trust in financial reporting. As businesses navigate complex
          regulations, the expertise in financial management, compliance, and
          risk assessment offered by firms like{" "}
          <span className="font-bold"> H.W. Gichohi & Co. CPA (K) </span> is
          invaluable. Through our financial audits and advisory services, we
          empower organizations to make informed decisions, achieve sustainable
          growth, protect value, and optimize efficiencies—reinforcing investor
          confidence with meticulous analysis and objective reporting that drive
          lasting business success.
        </p>

        <p className="mt-10 ml-40 text-lg ">
          We have worked with industries such as:
        </p>
      </div>

      <div className="mt-10 mb-10 flex flex-col gap-0 h-360" id="industry">
        <IndustryCarousel />
      </div>

      {/* Full-width Image with Text and Button */}
      <div className="relative mb-20">
        <div className="relative w-full h-[70vh]">
          <Image
            src={Contact}
            alt="Full-width Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-1"
          />
        </div>
        {/* Background Blur Overlay */}
        <div className="absolute inset-0  bg-opacity-5 backdrop-blur-lg z-0 "></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6 py-4">
            {/* Text Content */}
            <p className="text-lg mb-6 text-balance mt-20">
              Whether you are a sole proprietorship just starting out, a growing
              mid-sized business, or a large corporation with complex needs, we
              have a dedicated team of professionals ready and equipped to
              support your success. With a focus on personalized service and a
              deep understanding of industry-specific requirements, we partner
              with you every step of the way to help you navigate the
              complexities of your financial and business environment. No matter
              your size or sector, we deliver the expertise and attention your
              business deserves to thrive.
            </p>

            {/* Additional Text */}
            <span className="font-bold">
              Contact us today to schedule a personalized one-on-one
              consultation.
            </span>
            <br />
            <br />

            {/* Button */}
            <a href="/contact">
            <button className="px-6 py-2 bg-red-900 text-white font-bold rounded-lg hover:bg-red-700">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
