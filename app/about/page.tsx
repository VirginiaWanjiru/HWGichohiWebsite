import Banner from "@/public/images/team.jpg";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Amos from "@/public/images/Amos.jpg";
import Isaac from "@/public/images/Amos.jpg";
import Karanja from "@/public/images/Amos.jpg";
import Gichohi from "@/public/images/Amos.jpg";
const teamMembers = [
    { 
        id:1,
        name: "H.Gichohi",
        position: "CEO",
        image: Gichohi,
        description: "H.Gichohi is the CEO of the company. He is a seasoned professional with over 10 years of experience in the industry. He has a proven track record of delivering results and has a passion for helping clients achieve their goals.",
    },
    {
        id:2,
        name: "Amos Kiragu",
        position: "partner",
        image: Amos,
        description: "Amos Kiragu is a partner at the company. He has over 5 years of experience in the industry and has a strong background in business development and marketing. He is passionate about helping clients grow their businesses and achieve their goals.",
    },
    {
        id:3,
        name: "Isaac Mwangi",
        position: "partner",
        image: Isaac,
        description: "Isaac Mwangi is a partner at the company. He has over 5 years of experience in the industry and has a strong background in software development and technology. He is passionate about helping clients leverage technology to achieve their goals.",
    },
    {
        id:4,
        name: "Karanja Mwaura",
        position: "partner",
        image: Karanja,
        description: "Karanja Mwaura is a partner at the company. He has over 5 years of experience in the industry and has a strong background in finance and accounting. He is passionate about helping clients manage their finances and achieve their goals.",
    }
]

export default function Team() {
  return (
    <>
      <div style={{ height: "35vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity as needed
        }}>
          
            <h1 className="text-white text-center my-12 text-7xl tracking-wide">MEET THE TEAM</h1>
            
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6 mt-10">
            {teamMembers.map((member) => (
                <Card key={member.id} className="w-full p-4 bg-white rounded-lg shadow-lg relative">
                    <CardHeader className="flex flex-col items-center">
                        <Image src={member.image} alt={member.name} width={250} height={250} className="rounded-md mb-3 transition-transform ease-in-out duration-300 hover:scale-95" />
                        <CardTitle className="text-md font-bold">{member.name}</CardTitle>
                        <p className="text-sm text-gray-500">{member.position}</p>
                    </CardHeader>
                    <CardContent className="text-justify mt-1 mb-1">
                        <p className="text-sm italic hover:underline underline-offset-4 decoration-[#C00000]/30 decoration-4">{member.description}</p>
                    </CardContent>
                    
                </Card>
            ))}
        </div>
    </>
  );
}
