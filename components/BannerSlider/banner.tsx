import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from'@/app/home/home.module.css'
import { useRouter } from "next/navigation"

const banner = () => {

    const router= useRouter();
  return (
    <>
    <div
        className={`${styles.landing} flex items-center h-full w-full md:min-h-[85vh] lg:min-h-[99vh]`}
        id="landing"
      >
        <ProgressBar/>
        

        <span className="flex flex-col w-full h-full  px-8  md:px-8  gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF]">
          <h1 className=" md:text-start mt-24 md:text-6xl font-serif ">
            Delivering Results in Assurance, Advisory and Compliance
          </h1>
          <p className="font-serif">
            H. W Gichohi CPA(K)
          </p>
          
          <p className="font-serif">
            Excellence, Integrity, Growth: Partnering for Success
          </p>
          
          <button
            onClick={() => router.push("/#contact-us")}
            className="bg-[#C00000] py-4 font-extrabold uppercase md:w-1/3 max-w-[20rem] rounded-2xl md:text-2l hover:bg-sky-700"
          >
            Contact Us
          </button>
        </span>
      </div>
     <hr/>

    </>
  )
}

export default banner