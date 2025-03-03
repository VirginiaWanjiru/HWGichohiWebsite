import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Amos from "@/public/images/nairobi1.jpg";
import Kariuki from "@/public/images/nairobi.jpg";
import Gichohi from "@/public/images/nairobi3.jpg";

// Data for the partners
const teamMembers = [
  {
    id: 1,
    name: "CPA ISAAC M. KIRAGU",
    position: "MANAGING PARTNER",
    image: Gichohi,
    description:
      "Experienced managing partner with a passion for positive change.",
    profileLink: "/profile/Kiragu",
  },
  {
    id: 2,
    name: "CPA JONAH N. KARIUKI",
    position: "ASSOCIATE PARTNER",
    image: Amos,
    description:
      "Visionary associate partner focused on shaping the future of our industry.",
    profileLink: "/profile/Kariuki",
  },
  {
    id: 3,
    name: "FCPA HEZEKIAH W. GICHOHI ",
    position: "CONSULTING PARTNER",
    image: Kariuki,
    description:
      "Skilled consulting partner with a wealth of industry knowledge.",
    profileLink: "/profile/Gichohi",
  },
];

// Component for individual team members
const TeamMember = ({ member }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-72 md:h-96">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="h-full transition-transform ease-in-out duration-600 hover:scale-105 mb-0"
        />

        {/* Hover Info */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
            {/* Button to see profile */}
            <a href={member.profileLink}>
              <button className="bg-red-900 mt-10 text-white rounded font-bold py-2 px-4  transition-transform hover:scale-110 hover:bg-white hover:text-red-900 ">
                See Profile
              </button>
            </a>
          </div>
        )}
      </div>
      {/* Name and Position Below the Image */}
      <div className="mt-4 text-center">
        <p className="font-bold text-sm">{member.name}</p>
        <p className="text-xs text-red-900 font-bold">{member.position}</p>
        <p className="text-xs text-gray-600">{member.description}</p>
      </div>
    </div>
  );
};

// Main component for the team section
export default function Team() {
  return (
    <div className="mt-40 md:m-10 flex flex-col gap-10" id="about-us">
      <p className="text-2xl md:text-3xl  md:ml-10 font-bold text-center">
        OUR PARTNERS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 mt-10">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
