import React from 'react'
import IndustryCarousel from "@/components/ui/industry-carousel";

const industry = () => {


  return (

    <div className="mt-20 mb-10 flex flex-col gap-0  h-360" id="industry">
          <h2 className="text-center font-sans text-black">Areas of Practice</h2>
          <IndustryCarousel />
          
          
        </div >
  )
}

export default industry