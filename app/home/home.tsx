"use client";

import styles from "@/app/home/home.module.css";

import AccountingIcon from "@/components/icons/AccountingIcon";
import ConsultingIcon from "@/components/icons/ConsultingIcon";
import AssuranceIcon from "@/components/icons/AssuranceIcon";
import TaxIcon from "@/components/icons/TaxIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Mission from "@/components/Mission/Mission";
import Banner from "@/components/BannerSlider/banner";
import secretary from "@/public/images/desk.png";

import assurance from "@/public/images/assurance.png";
import consulting from "@/public/images/consultant.png";
import accounting from "@/public/images/accounting.png";
import tax from "@/public/images/tax.png";
import forensics from"@/public/images/forensic.png";



export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center ">
        <Banner />

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="m-9 flex flex-col gap-14 "
            id="about-us"
          >
            <p className="text-center font-serif font-bold text-6xl ">Who We Are </p>
            <div className="flex justify-between gap-8  ">
              <div>
                <Mission />
              </div>
            </div>
          </motion.div>

          <div className="m-0 mt-0  flex flex-col gap-14" id="our-services">
            <p className="text-center font-serif font-bold text-6xl">What We Do</p>
         

            <div className="flex flex-col md:flex-row justify-between mx-11">
              <div className="flex flex-col flex-1 items-center gap-14">
              <Image src={assurance} alt="assurance"/> 
              
                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our firm’s Audit and assurance services comply with the
                    Companies Act, International ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Audit & Assurance services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400 "
                      />
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
                          Statutory Audits
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
                          Project Audits
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Special Audits and investigations
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Environmental impact audits
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Acquisition review and corporate financial advice
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-col flex-1 items-center gap-14">
              <Image src={forensics} alt="forensic"/> 

                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our firm’s expertise in fraud and forensic investigation is
                    extensive, backed by a team of ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Fraud and Forensic Investi... services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400 "
                      />
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
                          Statutory Audits
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
                          Project Audits
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Special Audits and investigations
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Environmental impact audits
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Acquisition review and corporate financial advice
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-1 flex-col items-center gap-14">
              <Image src={tax} alt="tax"/> 

                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our firm’s attentive and expert tax services cover all
                    aspects of corporate and personal taxation ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Tax services {"  "}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-ml-1 h-5 w-5 text-gray-400 "
                      />
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
                          Preparation and submission of annual income tax
                          returns
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Tax Planning to minimize our clients tax expenses
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Value Added Tax Consultancy services
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Represent our clients in the Tax Tribunal and other
                          forums as necessary.
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          We keep abreast of tax changes though providing them
                          with tax update reports which are produced annually
                          after the budget.
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-col flex-1 items-center gap-14">
              <Image src={accounting} alt="accounting"/> 

                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our firm offers expert handling of financial data and a wide
                    range of accounting services ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Accounting services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400 "
                      />
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
                          Keeping and maintaining accounting books
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Payroll administration
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Accounting Training packages for non-accountants
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Management controls for non-profits
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Expert guidance on analysis for financial statements
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-col flex-1 items-center gap-14  ">
              <Image src={consulting} alt="consulting"/> 

                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our firm offers comprehensive consultancy, legal and
                    business advisory services for management ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-64 text-clip overflow-hidden justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Consultancy &amp; Business Advisory services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-7 w-7 text-gray-400 "
                      />
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
                          Company restructuring
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Specialty in company recievership and liquidation
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Litigation support
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Mediation, arbitration and business disengagement
                          support services
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Systems design and review
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Project Management
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Personnel recruitment and training
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Job pricing
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Salary Research
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Management training for supervisors and middle
                          management
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Strategic management
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-col flex-1 items-center gap-14 ml-5">
            <Image src={secretary} alt="secretary"/> 

                <Menu as="div" className="relative inline-block text-left">
                  <p className="text-sm text-red-900 ">
                    Our clients benefit from our firm’s comprehensive range of
                    secretarial services ...
                  </p>{" "}
                  <br></br>
                  <div>
                    <MenuButton className="inline-flex w-56 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg text-black font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400">
                      Secretarial services
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400 "
                      />
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
                          Filling annual returns{" "}
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Company /business registration
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Organizing business meetings
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Maintaining company members registration{" "}
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Processing members dividends
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Issue company shares/ share certificate
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 "
                        >
                          Governance audit
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
