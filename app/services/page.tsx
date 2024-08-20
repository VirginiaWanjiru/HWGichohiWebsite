import Banner from "@/public/images/audit1.webp";
import Consulting from "@/public/images/image 2.png";
import Accounting from "@/public/images/image 3.png";
import Assurance from "@/public/images/image 4.png";
import Tax from "@/public/images/image 5.png";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const services = [
    { 
        id:1,
        name: "Accounting",
        image: Accounting,
        description: "H.Gichohi is the CEO of the company. He is a seasoned professional with over 10 years of experience in the industry. He has a proven track record of delivering results and has a passion for helping clients achieve their goals.",
    },
    {
        id:2,
        name: "Assurance",
        image: Assurance,
        description: "Amos Kiragu is a partner at the company. He has over 5 years of experience in the industry and has a strong background in business development and marketing. He is passionate about helping clients grow their businesses and achieve their goals.",
    },
    {
        id:3,
        name: "Tax Planning and Advisory",
        image: Tax,
        description: "Isaac Mwangi is a partner at the company. He has over 5 years of experience in the industry and has a strong background in software development and technology. He is passionate about helping clients leverage technology to achieve their goals.",
    },
    {
        id:4,
        name: "Consulting",
        image: Consulting,
        description: "Karanja Mwaura is a partner at the company. He has over 5 years of experience in the industry and has a strong background in finance and accounting. He is passionate about helping clients manage their finances and achieve their goals.",
    }
]

export default function Services() {
  return (
    <>
      <div style={{ height: "60vh", position: "relative" }}>
        <Image src={Banner} alt="Services" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity as needed
        }}  >
          
            <h1 className="text-white text-center text-7xl tracking-wide">WE PROVIDE PROPER AUDIT SOLUTIONS</h1>
            <p className="text-black text-center text-4l mt-30 tracking-wide font-serif ">Here we are</p>
            
            
            
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6 mt-10">
            {services.map((member) => (
                <Card key={member.id} className="w-full p-4 bg-white rounded-lg shadow-lg relative">
                    <div className="flex justify-center">
                    <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-md mb-3 transition-transform ease-in-out duration-300 hover:scale-95" />
                    </div>
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-md font-bold">{member.name}</CardTitle>
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
