"use client";

import styles from "@/app/home/home.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Mission from "@/components/Mission/Mission";
import Banner from "@/components/banner";

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
            <p className="text-center  font-bold text-6xl ">Who We Are </p>
            <div className="flex justify-between gap-8  ">
              <div>
                <Mission />
              </div>
            </div>
          </motion.div>

          <Team />
          <Service />
        </div>
      </div>
    </>
  );
}
