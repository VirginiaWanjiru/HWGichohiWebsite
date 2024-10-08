"use client";

import { useState } from "react";
import Banner from "@/public/images/landing.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Amos from "@/public/images/nairobi1.jpg";
import Karanja from "@/public/images/nairobi.jpg";
import Gichohi from "@/public/images/nairobi3.jpg";

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

const teamMembers = [
  {
    id: 1,
    name: "CPA ISAAC M. KIRAGU - MANAGING PARTNER",
    position: "'You must be the change you want to see'",
    image: Gichohi,
    description:
      "Experienced managing partner with a passion for positive change.",
  },
  {
    id: 2,
    name: "MR J. N. KARIUKI – ASSOCIATE PARTNER",
    position: "'The best way to predict a future is to create it'",
    image: Amos,
    description:
      "Visionary associate partner focused on shaping the future of our industry.",
  },
  {
    id: 4,
    name: "MR H.W. GICHOHI – CONSULTING PARTNER",
    position: "Dedicated to providing expert consulting services",
    image: Karanja,
    description:
      "Skilled consulting partner with a wealth of industry knowledge.",
  },
];

const TeamMember = ({ member }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full p-0 bg-white rounded-lg shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex flex-col items-center p-0">
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md h-full transition-transform ease-in-out duration-6000 smooth hover:scale-105 mb-0"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
              <p className="text-sm mb-2">{member.name}</p>
              <p className="text-sm mb-2">{member.position}</p>
              <p className="text-xs text-center">{member.description}</p>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center mt-4"></CardContent>
    </Card>
  );
};

export default function Team() {
  return (
    <>
      <div className="gap-10 p-4 md:ml-20 md:mr-20">
        <div>
          <motion.div
            className="text-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideIn}
          >
            <div id="missiontext" className="mt-20 ">
              <p className="text-left text-lg  md:text-md leading-relaxed ml-10 ">
                Our competencies are anchored on the combination of our{" "}
                <span className="text-red-700 font-bold">
                  EXPERTISE, TECHNICAL KNOW-HOW,
                </span>{" "}
                continual{" "}
                <span className="text-red-700 font-bold">TRAINING</span> and{" "}
                <span className="text-red-700 font-bold">PROFESSIONALISM</span>{" "}
                in delivering all services expected of a Certified Public
                Accounting firm and cater for the needs of clients; including
                individuals, businesses and all types of organizations; by
                providing integrated and holistic solutions through personalized
                services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="m-4 md:m-10 flex flex-col gap-10" id="about-us">
        <p className="text-2xl md:text-3xl ml-4 md:ml-10 font-bold">
          Our Partners
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 mt-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}
