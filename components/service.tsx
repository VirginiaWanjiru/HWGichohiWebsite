import React from "react";
import Image from "next/image";
import Service1 from "@/public/images/nairobi.jpg";

const Service = () => {
  return (
    <div className="mt-40 md:m-10 flex flex-col gap-10" id="about-us">
      <p className="text-2xl md:text-3xl ml-4 md:ml-10 font-bold">Services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 mt-10">
        <Image
          src={Service1}
          alt="partner1"
          height={1200}
          className="  mb-3 transition-transform ease-in-out duration-300 hover:scale-95"
        />
        <Image
          src={Service1}
          alt="partner1"
          height={800}
          className=" mb-3 transition-transform ease-in-out duration-300 hover:scale-95"
        />
        <Image
          src={Service1}
          alt="partner1"
          height={800}
          className=" mb-3 transition-transform ease-in-out duration-300 hover:scale-95"
        />
      </div>
    </div>
  );
};

export default Service;
