import React from "react";
import mission from "@/public/images/fraud.jpg";
import vision from "@/public/images/tax2.jpg";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import bg from "@/public/images/bg.jpg";

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  },
};

const Mission = () => {
  const router = useRouter();

  return (
    <div>
      <motion.div
        className="flex flex-items-center  text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <div id="missiontext" className=" container text-left  text-balance   ">
          <p className="text-lg text-balance justify-center items-center mt-20">
            We are a trusted firm offering{" "}
            <span className="font-bold">audit</span>,{" "}
            <span className="font-bold">tax </span> and{" "}
            <span className="font-bold">consultancy </span> services to
            businesses in Kenya, East Africa and beyond. Our commitment to
            excellence, integrity and added value drives our operations. Through
            a purpose-driven culture, we build lasting relationships based on
            transparency, reliability and growth. Our diverse team provides
            tailored solutions, empowering clients to thrive in today's complex
            business environment. With expertise across industries, we deliver
            innovative, client-focused solutions. Our people are key to our
            success, united by shared values and a passion for high-quality
            service. We aim to positively impact businesses and local economies.
          </p>
        </div>

        <br />
        <br />
        <Image
          src={mission}
          alt="image"
          className="align-right w-1/2 h-96 hidden md:block"
        ></Image>
      
      </motion.div>

 
      <br />
      <br />
      <hr/>
      <br />
      <br />
    

      {/* Mission Section */}
      <motion.div
        className="flex flex-items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <div id="missiontext" className="text-center  ">
          <p className=" font-bold text-6xl">Our Mission</p>
          <br />
          <p className="text-lg text-balance text-center">
            Our mission is to provide professional services to our clients to
            enable them to excel in their business. We offer professional
            services in assurance testing, Tax Planning and Tax Management,
            Forensic Investigation, Financial consulting, dispute resolution
            Consultancy services etc in Kenya, East Africa and beyond in an
            economical and value added manner. We do this with integrity to
            impact positively to the economy and world at large.
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="flex flex-items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-triggers animation on every scroll into view
        variants={slideIn}
      >
        <div className="text-center mt-5 text-balance ">
          <p className="font-bold text-6xl">Our Vision</p>
          <br />
          <p className="text-lg text-center">
            Our Vision is to become the most respected practising firm for its
            honesty, integrity and high quality professional service in East and
            Central Africa, a reference point for Consultancy, Assurance Testing
            Services and Tax Consultancy.
          </p>
        </div>
      </motion.div>

      {/* Final Image Section */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center items-end  mt-0"
      >
        <button
          className="text-white bg-[#C00000] border border-2 border-red-700 rounded uppercase text-2l py-4 px-8 font-extrabold mt-10"
          onClick={() => router.push("/about")}
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Mission;
