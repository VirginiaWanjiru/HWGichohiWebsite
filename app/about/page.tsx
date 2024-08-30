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
        name: "CPA ISAAC M. KIRAGU - MANAGING PARTNER",
        position: "You must be the change you want to see",
        image: Gichohi,
        description: "Isaac M. Kiragu holds Bachelor of Commerce (BCOM Hons) and MBA (University of Nairobi), CPA (K), MKIM, AFCE, EIA (Lead Expert). He has spent over 30 years of his professional life in Banking, Accountancy, and Taxation, Audit and Assurance and, Human Resource Management fields.",
    },
    {
        id:2,
        name: "MR J. N. KARIUKI – ASSOCIATE PARTNER",
        position: "The best way to predict a future is to create it",
        image: Amos,
        description: "Mr J N Kariuki holds a MBA (Moi University), CPA (K), CPS (K). He is an Associate member of both the Certified Public Accountants of Kenya (CPA) and Certified Public Secretaries of Kenya (CPS). Mr J. N. Kariuki has over fifteen (17) years experience in the Financial Services Sector which span through Accounting & Auditing, Investigation, Financial Advisory Services, Forensic Accounting Investigations, Management Consultancy, Public Sector Advisory, Corporate Finance, Project Finance and Management, Portfolio Management, Investment Advisory and Business Development.",
    },
    
    {
        id:4,
        name: "MR H W GICHOHI – CONSULTING PARTNER. ",
        position: "Innovation, Integrity, and Excellence – These are the pillars of our success. Together, we build a future where businesses thrive, and communities prosper.",
        image: Karanja,
        description: "Mr H. W. Gichohi is a Consulting Partner at H. W. Gichohi & Company. He has over 43 years of experience in Accounting, Tax Practice, Auditing, Financial Consulting & Controls, Forensic Accounting, Corporate Financial Advisory, Management Consultancy, Business Modelling & Training, Strategic Planning, Corporate Re-Construction & Insolvency, Human Resources and Financial Advisory Services, Legal & Mediation, and Secretarial Services.",
    }
]

export default function Team() {
  return (
    <>
      <div style={{ height: "85vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity as needed
        }}>
          
          <h1 className="text-white text-center text-5xl tracking-wide font-serif flex flex-col mt-64">MEET THE TEAM </h1> 
          <br></br>
          <p className="text-white text-center font-serif"> "Uncovering Insights, Ensuring Integrity" </p>

        </div>
      </div>

      <hr/>
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
