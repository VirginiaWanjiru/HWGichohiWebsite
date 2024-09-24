import React from 'react';
import mission from '@/public/images/1.jpg';
import vision from '@/public/images/2.jpg';
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
      {/* Mission Section */}
      <motion.div
        className="flex flex-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // `once: false` allows it to animate every time it's in view
        variants={slideIn}
      >
        <Image
          className="mt-1 ml-10 mb-10 max-w-xl rounded-lg w-full shadow-xl dark:shadow-gray-800"
          src={mission}
          alt="mission image"
        />
        <div id="missiontext" className="mt-30 text-left mt-20 ml-40">
          <p className="font-sans font-bold text-xxl">Our Mission</p>
          <br />
          <p className="text-lg">
            H. W. GICHOHI & COMPANY CPA (K) is a leading{' '}
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
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="flex flex-items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}  // Re-triggers animation on every scroll into view
        variants={slideIn}
      >
        <div className="text-left mt-5">
          <p className="font-sans font-bold text-xxl">Our Vision</p>
          <br />
          <p className="text-[#C00000] font-bold font-sans">Why Choose Us:</p>
          <br />
          <ul className="list-disc ml-8">
            <li>
              <p className="text-lg">
                Holistic solutions that address the unique requirements of individuals, businesses,
                and organizations.
              </p>
            </li>
            <li>
              <p className="text-lg">
                A one-stop solution for comprehensive support across various disciplines.
              </p>
            </li>
            <li>
              <p className="text-lg">
                Dedication to delivering value-added services that drive success and help navigate
                today's complex business environment
              </p>
            </li>
          </ul>
        </div>
        <Image className="rounded-lg mb-10 max-w-xl ms-auto w-full" src={vision} alt="vision image" />
      </motion.div>

      {/* Final Image Section */}
      <motion.div
        initial={{ opacity:0}}
        whileInView={{ opacity:1}}
        
        
        >
        
        
        <button
          className="text-[#FFFFFF] bg-[#C00000] rounded-2xl uppercase text-2l py-4 px-8 font-extrabold   mb-10 flex justify-center"
          onClick={() => router.push('/about')}
          
            
          
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Mission;
