"use client"

import humanitarianAid from "@/public/images/humanitarian_aid.jpg";
import financialServices from "@/public/images/financial_services.jpg";
import manufacturingSector from "@/public/images/manufacturing_sector.jpg";
import cafeteria from "@/public/images/cafeteria.png";
import agriculture from "@/public/images/agriculture.png";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";
import {useState} from "react";

const industryItems = [
    {
        id:1,
        title: "International development and humanitarian aid",
        image: humanitarianAid,
        description: "Our The audit client in the International Development and Humanitarian Aid sector are  typically a non-profit organizations and  governmental agency involved in providing aid and development assistance in the East Africa  region.",
    },
    {
        id:2,
        title: "Financial Services with focus to Credit Unions",
        image: financialServices,
        description: "In the Financial Services sector, we offer audit and advisory service to Credit Unions commonly called SACCOs or cooperative financial institution offering financial services to its members."
    },
    {
        id:3,
        title: " Manufacturing Sector",
        image: manufacturingSector,
        description: "In the Manufacturing sector, we offer audit, strategy transformation and advisory services to client typically a companies engaged in the establishment or production of goods through various manufacturing processes."
    },
    {
        id:4,
        title: "Small and Medium-sized Enterprises",
        image: cafeteria,
        description: "For SMEs (Small and Medium-sized Enterprises), our clients are typically a small or medium-sized businesses operating in various industries, including retail, services, or manufacturing."
    },
    {
        id:5,
        title: "Agriculture Sector",
        image: agriculture,
        description: "In Agriculture sector, our audit client are often a farm or agricultural enterprise involved in the cultivation, production, value additions or distribution of crops, livestock, or related products."
    }
]

export default function IndustryCarousel(){
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(3);

    const handleLeft = ()=>{
        if (left===0) return;
        setLeft(prevState => prevState-1);
        setRight(prevState => prevState-1);
    }
    const handleRight = ()=>{
        const newRight = right+1;
        if (newRight>industryItems.length) return;
        setRight(newRight);
        setLeft(prevState => prevState+1)
    }
    return (
        <div className="flex flex-col md:flex-row items-center gap-16">
            <ArrowLeft onClick={handleLeft}/>
            {industryItems.slice(left,right).map(item=>(
                <Card key={item.id} className="flex-1 w-full min-h-[32rem] p-0 bg-white rounded-lg shadow-lg relative hover:scale-95">
                    <CardHeader className="flex flex-col items-center">
                        <Image src={item.image} alt={item.title} width={250} height={250} className="rounded-md mb-3" />
                        <CardTitle className="text-2xl font-extrabold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-justify mt-1 mb-1">
                        <p className="text-base">
                            {item.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
            <ArrowRight onClick={handleRight}/>
        </div>
    )
}