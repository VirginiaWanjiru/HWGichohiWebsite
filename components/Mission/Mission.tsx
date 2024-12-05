import React from "react";
import mission from "@/public/images/fraud.jpg";
import vision from "@/public/images/tax2.jpg";
import Image from "next/image";


import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


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
  const [startCount, setStartCount] = useState(true);

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
    <div>
      <motion.div
        className="flex flex-items-center text-balance text-center mb-10  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <div
          id="missiontext"
          className=" container text-center min-h-[40vh] text-balance border  py-20 "
        >
          <p className="text-center  font-bold text-6xl mb-10">Who We Are </p>
          <p className="text-lg justify-center items-center mb-20">
            We are a trusted firm offering{" "}
            <span className="font-bold text-red-900 ">audit</span>,{" "}
            <span className="font-bold text-red-900  ">tax </span> and{" "}
            <span className="font-bold text-red-900  ">consultancy </span>{" "}
            services to businesses in Kenya, East Africa and beyond. Our
            commitment to excellence, integrity and added value drives our
            operations. Through a purpose-driven culture, we build lasting
            relationships based on transparency, reliability and growth. Our
            diverse team provides tailored solutions, empowering clients to
            thrive in today's complex business environment. With expertise
            across industries, we deliver innovative, client-focused solutions.
            Our people are key to our success, united by shared values and a
            passion for high-quality service. We aim to positively impact
            businesses and local economies.
          </p>
        </div>

        <br />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative flex flex-col gap-2 bg-cover bg-center w-full min-h-[40vh] py-10"
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
        <div ref={ref} className=" container text-balance relative z-5">
          <p className="  font-bold text-6xl text-white text-center mt-10 ">
            Over {" "}
            <span className="font-bold text-6xl text-red-700 ">
              {startCount && <CountUp start={0} end={45} duration={7.0} />}+{" "}
              {/* The plus sign after the count */}
            </span>{" "}
            years of experience
          </p>
          <p className="  mt-10 text-white text-lg text-balance text-center">
            Since the 1970s, we have built a legacy of trust and a wealth of
            expertise, delivering professional services to thousands of small,
            medium, and large institutions across diverse industries, including
            finance, manufacturing, education, healthcare, technology, retail,
            non-profit, real estate, construction, insurance, public sector,
            agriculture & agribusiness, mining, transportation & logistics,
            legal, hospitality, and energy.
          </p>
          <br />
          <br />
        </div>

        <div className="flex justify-between gap-8">
          <div></div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="flex flex-items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <div id="missiontext" className="text-center container text-balance ">
          <p className=" font-bold text-6xl mt-10">Our Mission</p>
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
        <div className="text-center mt-5 text-balance  mb-20">
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
      <hr />

      {/* Values Section */}
      <motion.div
        className="flex items-center mb-20 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <div id="missiontext" className="text-center max-w-4xl mx-auto">
          <p className="font-bold text-6xl mb-5 ">Our Values</p>

          {/* Integrity */}
          <div className="mb-8">
            <p className="text-4xl text-red-900 font-bold">Integrity</p>
            <p className="text-lg text-balance mx-auto max-w-xl">
              We uphold the highest standards of honesty and ethics, fostering
              long-lasting trust in every engagement.
            </p>
          </div>

          {/* Excellence */}
          <div className="mb-8">
            <p className="text-4xl text-red-900 font-bold">Excellence</p>
            <p className="text-lg text-balance mx-auto max-w-xl">
              We are committed to delivering high-quality, practical solutions
              with precision, driving results through continuous improvement.
            </p>
          </div>

          {/* Client */}
          <div className="mb-8">
            <p className="text-4xl text-red-900 font-bold">Client</p>
            <p className="text-lg text-balance mx-auto max-w-xl">
              We take a personalized, proactive approach to understanding and
              addressing each client’s unique needs, delivering tailored
              financial guidance.
            </p>
          </div>

          {/* Innovation & Sustainability */}
          <div className="mb-8">
            <p className="text-4xl text-red-900 font-bold">
              Innovation & Sustainability
            </p>
            <p className="text-lg text-balance mx-auto max-w-xl">
              We leverage cutting-edge methods and forward-thinking solutions to
              drive innovation, ensuring sustainability and long-term success.
            </p>
          </div>

          {/* Accountability */}
          <div className="mb-8">
            <p className="text-4xl text-red-900 font-bold">Accountability</p>
            <p className="text-lg text-balance mx-auto max-w-xl">
              We are dedicated to providing complete transparency, ensuring
              accountability in all aspects of our reporting and advisory
              services.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Final Image Section */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative flex flex-col gap-2 bg-cover bg-center w-full min-h-[40vh] py-5"
        id="about-us"
        style={{
          backgroundImage: "url('/images/bg2.jpeg')", // Replace with the path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Blur Overlay */}
        <div className="absolute inset-0  bg-opacity-25 backdrop-blur-md z-0 "></div>

        {/* Text Content */}
        <div ref={ref} className="relative z-5 container text-balance ">
          <p className=" container text-balance   text-white font-bold text-5xl text-center mt-20  " style={{ lineHeight: "1.2" }}>
           Pooling together many skilled, diverse & exceptional professionals
          </p>
          <br />

          <p className=" text-white text-lg text-balance text-center">
            Our diverse team of professionals brings expertise across a wide
            range of services. Each team member is dedicated to offering
            innovative, practical solutions to complex business challenges.
          </p>
          <br />
        </div>

        <div className="flex justify-between gap-8">
          <div></div>z
        </div>
      </motion.div>

      <br></br>
    </div>
  );
};

export default Mission;
