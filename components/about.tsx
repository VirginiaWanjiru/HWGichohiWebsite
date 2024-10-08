import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Amos from "@/public/images/nairobi1.jpg";
import Karanja from "@/public/images/nairobi.jpg";
import Gichohi from "@/public/images/nairobi3.jpg";

// Animation for slide-in
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
    profileLink: "/user/isaac",
  },
  {
    id: 2,
    name: "MR J. N. KARIUKI – ASSOCIATE PARTNER",
    position: "'The best way to predict a future is to create it'",
    image: Amos,
    description:
      "Visionary associate partner focused on shaping the future of our industry.",
    profileLink: "/user/karanju",
  },
  {
    id: 4,
    name: "MR H.W. GICHOHI – CONSULTING PARTNER",
    position: "Dedicated to providing expert consulting services",
    image: Karanja,
    description:
      "Skilled consulting partner with a wealth of industry knowledge.",
    profileLink: "/user/gichohi",
  },
];

const TeamMember = ({ member }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-72 md:h-96">
        <a href={member.profileLink} className="block w-full h-full">
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md h-full transition-transform ease-in-out duration-600 hover:scale-105 mb-0"
          />
        </a>

        {/* Hover Info */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
            <p className="text-sm mb-2 font-bold">{member.name}</p>
            <p className="text-sm mb-2">{member.position}</p>
            <p className="text-xs text-center">{member.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <>
      <div className="gap-10 p-4 md:ml-20 md:mr-20">
        <div>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideIn}
          >
            <div id="missiontext" className="mt-20"></div>
          </motion.div>
        </div>
      </div>

      <div className="m-4 md:m-10 flex flex-col gap-10 mt-0" id="about-us">
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
