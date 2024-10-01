import Banner from "@/public/images/landing.png";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Amos from "@/public/images/Amos.jpg";

import Karanja from "@/public/images/Amos.jpg";
import Gichohi from "@/public/images/Amos.jpg";
const teamMembers = [
    { 
        id:1,
        name: "CPA ISAAC M. KIRAGU - MANAGING PARTNER",
        position: "'You must be the change you want to see'",
        image: Gichohi,
        description: "Isaac M. Kiragu holds Bachelor of Commerce (BCOM Hons) and MBA (University of Nairobi), CPA (K), MKIM, AFCE, EIA (Lead Expert). He has spent over 30 years of his professional life in Banking, Accountancy, and Taxation, Audit and Assurance and, Human Resource Management fields. His specialties include: Auditing, Accounting, Taxation, Forensic Accounting, Corporate Financial Advisory, Management Consultancy, Training, Strategic Planning, Corporate Re-Construction & Insolvency, Human Resources and Financial Advisory Services, Legal & Mediation, Bookkeeping and Accounting Services, and Secretarial Services.",
    },
    {
        id:2,
        name: "MR J. N. KARIUKI – ASSOCIATE PARTNER",
        position: "'The best way to predict a future is to create it'",
        image: Amos,
        description: "Mr J N Kariuki holds a MBA (Moi University), CPA (K), CPS (K). He is an Associate member of both the Certified Public Accountants of Kenya (CPA) and Certified Public Secretaries of Kenya (CPS). Mr J. N. Kariuki has over fifteen (17) years experience in the Financial Services Sector which span through Accounting & Auditing, Investigation, Financial Advisory Services, Forensic Accounting Investigations, Management Consultancy, Public Sector Advisory, Corporate Finance, Project Finance and Management, Portfolio Management, Investment Advisory and Business Development.",
    },
    
    {
        id:4,
        name: "MR H W GICHOHI – CONSULTING PARTNER. ",
        position: "'Innovation, Integrity, and Excellence – These are the pillars of our success. Together, we build a future where businesses thrive, and communities prosper.'",
        image: Karanja,
        description: "Mr H. W. Gichohi is a Consulting Partner at H. W. Gichohi & Company. He has over 43 years of experience in Accounting, Tax Practice, Auditing, Financial Consulting & Controls, Forensic Accounting, Corporate Financial Advisory, Management Consultancy, Business Modelling & Training, Strategic Planning, Corporate Re-Construction & Insolvency, Human Resources and Financial Advisory Services, Legal & Mediation, and Secretarial Services.",
    }
]

export default function Team() {
  return (
    <>
    <ProgressBar/>
      <div style={{ height: "56vh", position: "relative" }}>
        <Image src={Banner} alt="Teamwork" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(128, 128, 128, 0.7)' // Adjust the color and opacity as needed
        }}>
          
          <p className=" text-center text-6xl font-serif font-bold flex flex-col mt-52 text-red-950">About us</p> 
          <br></br>
          <p className=" text-center text-xl font-sans font-bold flex flex-col ">H W. GICHOHI CPA (K)</p> 
          

        </div>
      </div>
     
      
 
<div  className="m-10 flex flex-col gap-14  " id="about-us">
          

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

          <div className="flex justify-between gap-5 ">
            <div>
              <p className="text-md">
              Our competencies are anchored on the combination of our EXPERTISE, TECHNICAL KNOW-HOW, continual TRAINING and PROFESSIONALISM
              in delivering all services expected of a Certified Public Accounting firm and cater for the needs of clients; including individuals,
                businesses and all types of organizations; by providing integrated and holistic solutions through personalized services.
                <br />
                <br/>
              </p>


              <p className="text-[#C00000] font-bold  text-md">
              OUR SERVICES
              </p>
              <br></br>
              <ul className="list-disc ml-8">

                <li>
                  <p>
                  Audit & Business Advisory Services
                  </p>
                </li>

                <li>
                  <p>
                  Accountancy
                  
                  </p>
                </li>

                <li>
                  <p>
                  Tax Services
                  
                  </p>
                </li>

                <li>
                  <p>
                  Secretarial Services
                  </p>
                </li>

                <li>
                  <p>
                  Legal & Mediation Support
                  </p>
                </li>

                <li>
                  <p>
                    
                  Forensic Investigation
                 
                  </p>
                </li>

                <li>
                  <p>
                  Management Consultancy Services
                  </p>
                </li>

                
                <li>
                  <p>
                  Human Resource & Personnel Services
                  
                  </p>
                </li>

                <li>
                  <p>
                  Dispute Mediation Consultancy Services
                  
                  </p>
                </li>

                <li>
                  <p>
                  Corporate Re-Construction & Insolvency Advisory Services
                
                  </p>
                </li>

              </ul>
            </div>
           
          </div>
          
        </div>

   
     
    </>
  );
}
