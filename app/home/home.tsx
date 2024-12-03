"use client";

import styles from "@/app/home/home.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Mission from "@/components/Mission/Mission";
import Banner from "@/components/banner";
import Image from "next/image";
import Nairobi from "@/public/images/nairobi5.webp";

import Team from "@/components/about";

import Service from "@/components/service";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center ">
        <Banner />

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="m-9 flex flex-col gap-14  "
            id="about-us"
          >
            <p className="text-center  font-bold text-6xl">Who We Are </p>
            <div className="flex justify-between gap-8  ">
              <div>
                <Mission />
              </div>
            </div>
          </motion.div>

          <Team />
          <Service />

          {/* Full-width Image with Text and Button */}
          <div className="relative  mt-20 ">
          
          
            <div className="relative w-full h-[40vh]">
              <Image
                src={Nairobi}
                alt="Full-width Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-1"
              />
            </div>
            {/* Background Blur Overlay */}
            <div className="absolute inset-0  bg-opacity-2 backdrop-blur-lg z-0 "></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-6 py-4">
                

                {/* Additional Text */}
                <span className="font-bold text-xl text-white">
                  Contact us today to schedule a personalized one-on-one
                  consultation.
                </span>
                <br />
                <br />
                <br />
                

                {/* Button */}
                <a href="/contact">
                  <button className="px-10 py-4 bg-red-700 text-white font-bold  hover:bg-red-900 text-lg rounded ">
                  CONTACT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
