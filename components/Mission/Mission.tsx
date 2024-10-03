import React from 'react';
import mission from '@/public/images/fraud.jpg';
import vision from '@/public/images/tax2.jpg';
import Image from 'next/image';

import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import bg from '@/public/images/bg.jpg';

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Mission = () => {
  const router = useRouter();

  return (
    <div>

<motion.div
        className="flex flex-items-center  text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >

        
        
        <div id="missiontext" className=" container text-left mt-30 mb-40 text-balance   ">
        
          <p className="text-lg mt-20 font-large leading-relaxed  ">
           <span className="font-bold"> H. W. GICHOHI & COMPANY CPA (K) </span>
           is a leading{' '}
            <span className="text-[#C00000] font-bold">advisory, accountancy, audit</span>{' '}
            &{' '}
            <span className="text-[#C00000] font-bold">consulting firm</span>{' '}
            registered in Kenya for the last{' '}
            <span className="text-[#C00000] font-bold">43+</span> years with expertise in Accounting,
            Tax Matters, Audit & Business Advisory Services, Forensic Services, Human Resources &
            Personnel Services, Management Consultancy Services, Corporate Re-Construction &
            Insolvency Services, Financial Advisory Services, Company Secretarial Services, and
            Dispute Mediation Services.
          </p>

     
        </div>


        <br/>
        <br/>
        <Image src={mission} alt="image" className="align-right w-1/2 h-96 hidden md:block"></Image>
      </motion.div>
      <br/>
      <br/>
      
      

      <hr />

      {/* Mission Section */}
      <motion.div
        className="flex flex-items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        
        <div id="missiontext" className="text-center mt-2 ">
          <p className="font-serif font-bold text-6xl">Our Mission</p>
          <br />
          <p className="text-lg text-balance text-center">
            Our mission is to provide professional services to our clients to enable them to excel 
            in their business. We offer professional services in assurance testing, Tax Planning and 
            Tax Management, Forensic Investigation, Financial consulting, dispute resolution Consultancy services
            etc in Kenya, East Africa and beyond in an economical and value added manner. We do this with integrity 
            to impact positively to the economy and world at large.
            
          </p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="flex flex-items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // Re-triggers animation on every scroll into view
        variants={slideIn}
      >
        
        <div className="text-center mt-5 text-balance ">
          <p className="font-serif font-bold text-6xl">Our Vision</p>
          <br/>
          <p className="text-lg text-center">
            Our Vision is to become the most respected practising firm for its honesty,
            integrity and high quality professional service in East and Central Africa, a reference point for 
            Consultancy, Assurance Testing Services and Tax Consultancy.
          </p>
         
          
        </div>
        
      </motion.div>

      {/* Final Image Section */}
      
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className="flex justify-center items-end  mt-0"
>
  <button
    className="text-white bg-[#C00000] border border-2 border-red-700 rounded-2xl uppercase text-2l py-4 px-8 font-extrabold mb-0 mt-10 mb-20"
    onClick={() => router.push('/about')}
  >
    Learn More
  </button>
</motion.div>




      

<hr/>
    </div>
  );
};

export default Mission;
