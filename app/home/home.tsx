"use client";

import styles from "@/app/home/home.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Mission from "@/components/Mission/Mission";
import Banner from "@/components/banner";
import CountUp from "react-countup";
import Team from "@/components/about";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Service from "@/components/service";

export default function Home() {
  const router = useRouter();
  const [startCount, setStartCount] = useState(false);

  // Use the useInView hook to track when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the section comes into view
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  // Start counting when the section is in view
  if (inView && !startCount) {
    setStartCount(true);
  }

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
            <p className="text-center  font-bold text-6xl ">WHO WE ARE </p>
            <div className="flex justify-between gap-8  ">
              <div>
                <Mission />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative flex flex-col gap-2 bg-cover bg-center w-full min-h-[85vh] py-24"
            id="about-us"
            style={{
              backgroundImage: "url('/images/bg2.jpeg')", // Replace with the path to your image
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Background Blur Overlay */}
            <div className="absolute inset-0  bg-opacity-25 backdrop-blur-lg z-0 "></div>

            {/* Text Content */}
            <div ref={ref} className="relative z-5">
              <p className="font-bold text-6xl text-white text-center mt-40 ">
                With over{" "}
                <span className="font-bold text-6xl text-red-700 ">
                  {startCount && <CountUp start={0} end={45} duration={5.0} />}+{" "}
                  {/* The plus sign after the count */}
                </span>{" "}
                years of experience
              </p>
              <br />
              <br />
            </div>

            <div className="flex justify-between gap-8">
              <div></div>
            </div>
          </motion.div>

          <Team />
          <Service />
        </div>
      </div>
    </>
  );
}
