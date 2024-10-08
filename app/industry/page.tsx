import React from "react";
import IndustryCarousel from "@/components/ui/industry-carousel";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Banner from "@/public/images/landing.png";
import Image from "next/image";

const industry = () => {
  return (
    <>
      <ProgressBar />

      <div style={{ height: "56vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(128, 128, 128, 0.7)", // Adjust the color and opacity as needed
          }}
        >
          <p className="text-center text-6xl font-serif font-bold flex flex-col mt-52 text-red-950">
            Industries
          </p>
          <br />
          <p className=" text-center text-xl font-sans font-bold flex flex-col ">
            H.W. Gichohi & Co CPA (K)
          </p>
        </div>
      </div>

      <div className="mt-20 mb-10 flex flex-col gap-0  h-360" id="industry">
        <IndustryCarousel />
      </div>
    </>
  );
};

export default industry;
