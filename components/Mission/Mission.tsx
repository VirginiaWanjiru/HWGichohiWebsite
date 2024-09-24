import React from 'react'
import mission from '@/public/images/1.jpg'
import vision from '@/public/images/2.jpg'
import Image from 'next/image'
import auditImage from "@/public/images/audit.png";
import { useRouter } from "next/navigation";

const Mission = () => {
const router = useRouter();

  return (
    <div >
      
        <div className="flex flex-items-center" >
        <Image className=" mt-1 ml-10 mb-10 max-w-md rounded-lg w-full" src={mission} alt="mission image" ></Image>
            
            <div id="missiontext" className="mt-30 text-left mt-20 ml-20 ">
            <p className="font-sans font-bold text-xxl ">Our Mission </p>
            <br></br>
            <p className="text-lg">
                {" "}
                H. W. GICHOHI & COMPANY CPA (K) is a leading {" "}
                <span className="text-[#C00000] font-bold ">
                  {" "}
                  advisory, accountancy, audit{" "}
                </span>{" "}
                <span> & </span>{" "}
                <span className="text-[#C00000] font-bold  ">
                  {" "}
                  consulting firm{" "}
                </span>{" "}
                <span> (AAAC) registered in Kenya for the last </span>
                <span className="text-[#C00000] font-bold"> 43+</span>, years
                with expertise in Accounting, Tax Matters, Audit & Business
                Advisory Services, Forensic Services, Human Resources &
                Personnel Services, Management Consultancy Services, Corporate
                Re-Construction & Insolvency Services, Financial Advisory
                Services, Company Secretarial Services, and Dispute Mediation
                Services.
               
                <br />
                <br />
              </p>
            </div>     
            
        </div>


        <div className="flex flex-items-center mt-10">
            <div className="text-left mt-5">
            <p className="font-sans font-bold text-xxl ">Our Vision</p>
            <br></br>

            <p className="text-[#C00000] font-bold font-sans ">
                Why Choose Us:
              </p>
              <br/>

            <ul className="list-disc ml-8 ">
                <li>
                  <p className="text-lg">
                    Holistic solutions that address the unique requirements of
                    individuals, businesses, and organizations.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    A one-stop solution for comprehensive support across various
                    disciplines.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Dedication to delivering value-added services that drive
                    success and help navigate today's complex business
                    environment
                  </p>
                </li>
              </ul>
            </div>
            <Image className=" rounded-lg mb-10 max-w-xl ms-auto w-full" src={vision} alt="mission image"></Image>
             </div>

             <div id="final-image" className="flex flex-items-center mt-10">
             <Image className="rounded-lg mb-10 ml-10 h-auto max-w-md w-full" src={auditImage} alt={"audit"} />

             <button
            onClick={() => router.push("/about")}
            className="text-[#FFFFFF] bg-[#C00000] rounded-xl uppercase text-2l py-4 px-8 font-extrabold self-center ml-6  mt-60 "
          >
            Learn More
          </button>
             </div>

            
    </div>
  )
}

export default Mission