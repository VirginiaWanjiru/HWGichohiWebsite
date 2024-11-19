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
        <p className=" mt-10 ml-40 text-red-900 font-bold text-5xl">Overview</p>
        <p className="mt-10 ml-40 text-lg text-balance text-left ">
          {" "}
          The accounting and audit services sector is vital to the financial
          ecosystem, providing transparency and accountability essential for
          trust in financial reporting. As businesses navigate complex
          regulations, the expertise in financial management, compliance, and
          risk assessment offered by firms like <span className="font-bold"> H.W. Gichohi & Co. CPA (K) </span> is
          invaluable. Through our financial audits and advisory services, we
          empower organizations to make informed decisions, achieve sustainable
          growth, protect value, and optimize efficiencies—reinforcing investor
          confidence with meticulous analysis and objective reporting that drive
          lasting business success.
        </p>

        <p className="mt-10 ml-40 text-lg ">We have worked with industries such as  :</p>
      </div>

      <div className="mt-10 mb-10 flex flex-col gap-0  h-360" id="industry">
        <IndustryCarousel />
      </div>
    </>
  );
};

export default industry;
