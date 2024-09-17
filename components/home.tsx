"use client";

import styles from "@/components/home.module.css";
import auditImage from "@/public/images/audit.png";
import AccountingIcon from "@/components/icons/AccountingIcon";
import ConsultingIcon from "@/components/icons/ConsultingIcon";
import AssuranceIcon from "@/components/icons/AssuranceIcon";
import TaxIcon from "@/components/icons/TaxIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import IndustryCarousel from "@/components/ui/industry-carousel";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';




export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center ">
      <div
        className={`${styles.landing} flex items-center h-full w-full md:min-h-[85vh] lg:min-h-[99vh]`}
        id="landing"
      >
        <span className="flex flex-col w-full h-full  px-8  md:px-8  gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF]">
          <h1 className=" md:text-start mt-24 md:text-6xl font-serif ">
            Delivering Results in Assurance, Advisory and Compliance
          </h1>
          <p className="font-serif">
            Excellence, Integrity, Growth: Partnering for Success
          </p>
          <button
            onClick={() => router.push("/#contact-us")}
            className="bg-[#C00000] py-4 font-extrabold uppercase md:w-1/4 max-w-[40rem] rounded-2xl md:text-2l hover:bg-sky-700"
          >
            Contact Us
          </button>
        </span>
      </div>
     
      <div className={styles.content}>
        <div className="m-9 flex flex-col gap-14 " id="about-us">
          <h2 className="text-center font-sans">Who we are </h2>
          <div className="flex justify-between gap-8 ">
            <div>
              <p className="text-lg">
                {" "}
                H. W. GICHOHI & COMPANY CPA (K) is a leading {" "}
                <span className="text-[#C00000] font-bold ">
                  {" "}
                  advisory, accountancy, audit{" "}
                </span>{" "}
                <span> & </span>{" "}
                <span className="text-[#C00000] font-bold  ">
                  {" "}
                  consulting firm{" "}
                </span>{" "}
                <span> (AAAC) registered in Kenya for the last </span>
                <span className="text-[#C00000] font-bold"> 43+</span>, years
                with expertise in Accounting, Tax Matters, Audit & Business
                Advisory Services, Forensic Services, Human Resources &
                Personnel Services, Management Consultancy Services, Corporate
                Re-Construction & Insolvency Services, Financial Advisory
                Services, Company Secretarial Services, and Dispute Mediation
                Services.
               
                <br />
                <br />
              </p>
              <p className="text-[#C00000] font-bold font-sans underline">
                Why Choose Us:
              </p>
              <br/>
              <ul className="list-disc ml-8 ">
                <li>
                  <p className="text-lg">
                    Holistic solutions that address the unique requirements of
                    individuals, businesses, and organizations.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    A one-stop solution for comprehensive support across various
                    disciplines.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    Dedication to delivering value-added services that drive
                    success and help navigate today's complex business
                    environment
                  </p>
                </li>
              </ul>
            </div>
            <Image className="hidden md:block h-full" src={auditImage} alt={"audit"} />
          </div>

          <button
            onClick={() => router.push("/about")}
            className="text-[#FFFFFF] bg-[#C00000] rounded-2xl uppercase text-2l py-4 px-8 font-extrabold  self-center"
          >
            Learn More
          </button>

          
        </div>

        <hr />

        <div className="m-0 mt-5  flex flex-col gap-14 " id="our-services">
          <h2 className="text-center font-sans">What we do</h2>

          <div className="flex flex-col md:flex-row justify-between mx-11">

          <div className="flex flex-col flex-1 items-center gap-14">
              <TaxIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Advisory
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              </div>

            <div className="flex flex-1 flex-col items-center gap-14">
              <AccountingIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Advisory
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Consultancy
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

              
            </div>
           
            <div className="flex flex-col flex-1 items-center gap-14">
              <AssuranceIcon />

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
          Advisory
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
          Advisory
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
          Advisory
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
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Assurance
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Accounting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
        <hr  />
        <div className="mt-7 flex flex-col gap-0  h-360" id="industry">
          <h2 className="text-center font-sans text-black">Areas of Practice</h2>
          <IndustryCarousel />
          
          
        </div >
        <div id="contact-us" className="m-9 flex flex-col gap-7" >
          <h2 className="text-center font-sans" > Contact Us</h2>
          <div className="flex flex-col-reverse h-full w-full items-center gap-6 md:flex-row md:h-[33.875rem] md:pl-8">
            <div className="w-full md:w-2/5 h-full">

              <ContactForm />

            </div>
            <div className="w-full md:w-3/5 h-full">
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
 
}

