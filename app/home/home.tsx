"use client";

import styles from "@/app/home/home.module.css";

import AccountingIcon from "@/components/icons/AccountingIcon";
import ConsultingIcon from "@/components/icons/ConsultingIcon";
import AssuranceIcon from "@/components/icons/AssuranceIcon";
import TaxIcon from "@/components/icons/TaxIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {motion} from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Mission from "@/components/Mission/Mission"
import Banner from "@/components/BannerSlider/banner";

export default function Home() {
 
  const router = useRouter();

  
  
  return (
    <>
     
  
    <div className="flex flex-col items-center ">
    
      
      <Banner/>
     

      <div className={styles.content}>
        <motion.div 
        initial={{ opacity:0}}
        whileInView={{ opacity:1}}

        
        className="m-9 flex flex-col gap-14 " id="about-us">
          <h2 className="text-center font-sans">Who we are </h2>
          <div className="flex justify-between gap-8 ">
            <div>

            <Mission/>
              
              
            </div>
            
          </div>

        </motion.div>

        

        <div className="m-0 mt-0  flex flex-col gap-14" id="our-services">
          <h2 className="text-center font-sans">What we do</h2>

          <div className="flex flex-col md:flex-row justify-between mx-11">

          <div className="flex flex-col flex-1 items-center gap-14">
              <AssuranceIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
       Audit, Assurance & Business Advisory
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Projects Audit

            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Corporate Financial Advice 
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Forensic Audits
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Environmental Review 
            </a>
          </MenuItem>


          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Acquisitions Review and Corporate Financial Advice
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Budgeting/Forecasting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              BookKeeping Services 
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Payroll Administration
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Internal Control Services & Internal Audit
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Outsourced Internal Audit Services
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              </div>


            <div className="flex flex-1 flex-col items-center gap-14">
              <TaxIcon />

              <Menu as="div" className="relative inline-block text-left">

      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Tax 
          <ChevronDownIcon aria-hidden="true" className="-ml-1 h-5 w-5 text-gray-400 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              
            </div>
           
            <div className="flex flex-col flex-1 items-center gap-14">
              <ConsultingIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Consultancy 
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              
            </div>

            <div className="flex flex-col flex-1 items-center gap-14">
              <AccountingIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Accounting 
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              
            </div>

            <div className="flex flex-col flex-1 items-center gap-14">
              <ConsultingIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Other
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 "
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              
            </div>

          </div>
          <button
            className="text-[#FFFFFF] bg-[#C00000] rounded-2xl uppercase text-2l py-4 px-8 font-extrabold  self-center mb-10"
            onClick={() => router.push("/services")}
          >
            Learn More
          </button>

          
         
        </div>

      </div>
      
      </div>
      
      
 </>
   
   
    
  );
 
}

