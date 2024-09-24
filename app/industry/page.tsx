import React from 'react'
import IndustryCarousel from "@/components/ui/industry-carousel";
import {motion} from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";


const industry = () => {


  return (

    <>
    <ProgressBar/>
    <div className="mt-20 mb-10 flex flex-col gap-0  h-360" id="industry">
          <h2 className="text-center font-sans text-black">Industries</h2>
          <IndustryCarousel />
          
          
        </div >
        </>
  )
}

export default industry