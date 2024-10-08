import React from "react";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Banner from "@/public/images/landing.png";
import Image from "next/image";


const contactus = () => {
  return (
    <>
      <ProgressBar />

      <div style={{ height: "56vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(128, 128, 128, 0.7)' // Adjust the color and opacity as needed
        }}>
      
          <p className="text-center text-6xl  font-bold flex flex-col mt-52 text-red-950">Contact Us</p> 
          <br />
          <p className=" text-center text-xl font-bold flex flex-col ">H.W. Gichohi & Co. CPA(K)</p> 
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
