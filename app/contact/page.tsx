import React from "react";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Banner from "@/public/images/nairobi5.webp";
import Image from "next/image";


const contactus = () => {
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
            <span className=" inline-block px-2 mr-auto  pb-2 pt-2">Contact Us</span>
          </p>
          <br />
          <p className="text-left text-xl font-sans font-bold flex flex-col text-white ml-20">
            <span className="inline px-2 mr-auto pb-2 pt-2">
              H.W. Gichohi & Co. CPA(K)
            </span>
          </p>
        </div>
      </div>

      <div id="contact-us" className="mt-20 mb-10 flex flex-col gap-7">
        
        <div className="flex flex-col-reverse h-full w-full items-center gap-6 md:flex-row md:h-[33.875rem] md:pl-8">
          <div className="w-full md:w-2/5 h-full">
            <ContactForm />
          </div>
          <div className="w-full md:w-3/5 h-full mr-5">
            <ContactMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
