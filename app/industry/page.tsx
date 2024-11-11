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
        <p className=" mt-10 ml-40 text-red-900 font-bold text-5xl">
          Overview
        </p>
        <p className="mt-10 ml-40 text-lg text-balance ">
          {" "}
          The accounting and audit industry plays a crucial role in the
          financial ecosystem, providing transparency, accuracy, and
          accountability that underpin trust in financial reporting and business
          operations. As companies navigate an increasingly complex regulatory
          landscape, the need for expert guidance in financial management,
          compliance, and risk assessment has never been greater. Accounting and
          audit firms empower businesses by delivering insights that enhance
          decision-making and ensure compliance with standards. From financial
          audits to advisory services, these firms help organizations achieve
          sustainable growth, optimize operational efficiencies, and maintain
          investor confidence through meticulous analysis and objective
          reporting.
        </p>

        <p className="mt-10 ml-40 text-lg ">They include :</p>
      </div>

      <div className="mt-10 mb-10 flex flex-col gap-0  h-360" id="industry">
        <IndustryCarousel />
      </div>
    </>
  );
};

export default industry;
