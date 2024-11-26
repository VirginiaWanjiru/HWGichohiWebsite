"use client";

import humanitarianAid from "@/public/images/humanitarian_aid.jpg";
import financialServices from "@/public/images/financial_services.jpg";
import soleProprietorship from "@/public/images/sole.jpg";
import manufacturingSector from "@/public/images/manufacturing_sector.jpg";
import sme from "@/public/images/sme.jpg";
import edu from "@/public/images/education.png";
import construction from "@/public/images/construction.png";
import agriculture from "@/public/images/agriculture.png";
import fraud from "@/public/images/fraud.jpg";
import tourism from "@/public/images/tourism.png";
import energy from "@/public/images/energy.png";
import trading from "@/public/images/trading.png";
import other from "@/public/images/other.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";
import { useState, useEffect } from "react";

const industryItems = [
  {
    id: 1,
    title: "Sole Proprietorship & Individuals",
    image: soleProprietorship,
    description:
      "Our clients in this category enjoy the advantage of tailor-made services designed to meet both their personal and business needs. We offer a comprehensive range of services that include audit and assurance, maintaining and managing business accounting records, and providing strategic tax planning and VAT consultancy.",
    options: [],
  },
  {
    id: 2,
    title: "Financial Services Industry",
    image: financialServices,

    options: [],
    description:
      "In the Financial Services sector, we offer audit and advisory services to a range of institutions, including Credit Unions (SACCOs), cooperative financial organizations providing financial services to their members, as well as banks, insurance companies, BOSA and FOSA SACCOs, and pension schemes.",
  },
  {
    id: 3,
    title: "Manufacturing Sector",
    image: manufacturingSector,
    options: [],
    description:
      "In the Manufacturing sector, we provide audit, strategy transformation, and advisory services to companies involved in the establishment or production of goods through various manufacturing processes, including metal and steel manufacturing companies, consumer goods manufacturing companies, and construction materials manufacturing.",
  },
  {
    id: 4,
    title: "Small and Medium-sized Enterprises",
    image: sme,
    options: [],
    description:
      "For SMEs (Small and Medium-sized Enterprises), our clients are typically a small or medium-sized businesses operating in various industries, including retail, services, or manufacturing.",
  },
  {
    id: 5,
    title: "Agriculture & Agribusiness Industry",
    image: agriculture,
    options: [],
    description:
      "In Agriculture sector, our audit client are often a farm or agricultural enterprise involved in the cultivation, production, value additions or distribution of crops, livestock, or related products.",
  },
  {
    id: 6,
    title: "Not for Profit Organizations",
    image: humanitarianAid,
    options: [],
    description:
      "In the International Development and Humanitarian Aid sector, our audit clients are typically non-profit organizations and government agencies involved in providing aid and development assistance in the East Africa region, including not-for-profit companies, non-governmental organizations, and humanitarian organizations.",
  },

  {
    id: 7,
    title: "Construction & Real Estate",
    image: construction,
    options: [],
    description:
      "In the Real Estate and Construction sector, we offer audit and advisory services to construction companies, real estate development companies, and real estate investment and management companies.",
  },
  {
    id: 8,
    title: "Education Sector",
    image: edu,
    options: [],
    description:
      "We provide audit and advisory services to educational institutions, including primary schools, secondary/high schools, and tertiary institutions such as colleges and universities.",
  },
  {
    id: 9,
    title: "Government and Public Sector ",
    image: fraud,
    options: [],
    description:
      "We offer audit and advisory services to global donors, parastatals, and grants and project donors, supporting their initiatives and ensuring transparency in their operations.",
  },
  {
    id: 10,
    title: "Natural Resources and Energy",
    image: energy,
    options: [],
    description:
      "We provide audit and advisory services to companies in the energy and resources sector, including mining companies, oil and gas companies, and renewable energy companies.",
  },
  {
    id: 11,
    title: "Tourism & Hospitality Center",
    image: tourism,
    options: [,],
    description:
      "We offer audit and advisory services to businesses in the tourism and hospitality sector, including tourism agencies, hotels, resorts, and restaurants, as well as events and entertainment companies.",
  },

  {
    id: 12,
    title: "Trading Industry",
    image: trading,
    options: [,],
    description:
      "We provide audit and advisory services to companies in the consumer goods sector, including fast-moving consumer goods (FMCG) companies, wholesalers, and retailers.",
  },

  {
    id: 13,
    title: "Other sectors",
    image: other,
    options: [,],
    description:
      "We offer audit and advisory services across a diverse range of sectors, including humanitarian institutions, media and entertainment, mining and natural resources, proprietorships and partnerships, the services sector, telecommunications, transport and logistics, the health sector (pharmaceutical companies and healthcare providers), as well as waste management and environmental services. ",
  },
];

export default function IndustryCarousel() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(3);

  const handleLeft = () => {
    if (left === 0) return;
    setLeft((prevState) => prevState - 1);
    setRight((prevState) => prevState - 1);
  };

  const handleRight = () => {
    const newRight = right + 1;
    if (newRight > industryItems.length) {
      setLeft(0); // Reset to the start
      setRight(3);
      return;
    }
    setRight(newRight);
    setLeft((prevState) => prevState + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000); // Move carousel every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [right]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-16">
      <ArrowLeft onClick={handleLeft} />
      {industryItems.slice(left, right).map((item) => (
        <Card
          key={item.id}
          className="flex-1 w-full min-h-[32rem] p-0 bg-white rounded-lg shadow-lg relative hover:scale-95"
        >
          <CardHeader className="flex flex-col items-center">
            <Image
              src={item.image}
              alt={item.title}
              width={250}
              height={150}
              className="rounded-md mb-3"
            />
            <CardTitle className="text-2xl font-extrabold">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-justify mt-1 mb-1">
            <p className="text-base">
              {item.description}
              <span className="list-disc ml-4 text-lg">
                {item.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
      <ArrowRight onClick={handleRight} />
    </div>
  );
}
