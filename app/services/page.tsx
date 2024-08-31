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
        name: "Tax Planning and Advisory",
        image: Tax,
        description: "H. W. Gichohi & Company is one of the leading Tax Planning & Advisory Services firms in Kenya today. We understand that taxes are about a lot more than writing a check. Tax planning is about planning for growth and investment, protecting wealth for future generations and exploring all options on the path to business success. We offer a full range of TAX PLANNING, PREPARATION and COMPLIANCE SERVICES. Whether you are just starting a business, expanding a successful business, or getting ready to pass your business on to the next generation, H. W. Gichohi & Company’s business tax services team will professionally help you achieve your goals.",
    },
    {
        id:2,
        name: "Assurance",
        image: Assurance,
        description: "Assurance services offer peace of mind by validating the accuracy and reliability of financial information. Through rigorous evaluation, assurance provides stakeholders with the confidence they need to make informed decisions, ensuring that financial statements are trustworthy and compliant with regulations. It’s about instilling trust and enhancing the credibility of your business.",
    },
    {
        id:3,
        name: "Accounting",
        image: Accounting,
        description: " Our services are intended both for individuals who need to file an annual income tax return, and private entrepreneurs who are to keep accounting records and books, file annual accounting reports, and public organizations, as well as large and small businesses that use a range of different services from bookkeeping, payroll administration to business planning. In short, H. W. Gichohi & Company CPA (K) works with everyone and is ready to help anyone!",
       
    },
    {
        id:4,
        name: "Consulting",
        image: Consulting,
        description: "HW Gichohi is a trusted name in consulting within audit services, known for delivering expert guidance and innovative solutions that enhance financial transparency and operational efficiency. With a deep understanding of regulatory requirements and industry best practices, at H W Gichohi we help organizations navigate complex financial landscapes, ensuring compliance while driving sustainable growth. Our commitment to excellence in audit consulting empowers businesses to achieve their strategic objectives with confidence.",
    }
]

export default function Services() {
  return (
    <>
      <div style={{ height: "99vh", position: "relative" }}>
        <Image src={Banner} alt="Services" layout="fill" objectFit="cover" />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
            display: "flex-col ",
            alignItems: "center",
            justifyContent: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity as needed
        }}  >
          <h1 className="text-white text-center text-5xl tracking-wide font-serif flex flex-col mt-72">WE PROVIDE PROPER AUDIT SOLUTIONS</h1> 
          <br></br>
          <p className="text-white text-center font-serif"> "Uncovering Insights, Ensuring Integrity" </p>
            
            
            
        </div>
        
      </div>
      <hr/>
<br></br>
      <h2 className="text-center font-sans"> Our Services</h2>
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
