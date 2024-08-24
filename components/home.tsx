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

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center my-2">
      <div
        className={`${styles.landing} flex items-center h-full w-full md:min-h-[80vh] lg:min-h-[90vh]`}
        id="landing"
      >
        <span className="flex flex-col w-full h-full px-6 md:px-12 my-8 gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF]">
          <h1 className="text-center md:text-start text-5xl md:text-7xl font-serif ">
            Delivering Results in Compliance
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
      <hr />
      <div className={styles.content}>
        <div className="m-9 flex flex-col gap-14" id="about-us">
          <h2 className="text-center font-sans">About Us</h2>
          <div className="flex justify-between gap-8 font-roboto">
            <div>
              <p>
                {" "}
                H. W. GICHOHI & COMPANY CPA (K) is an{" "}
                <span className="text-[#C00000] font-bold text-2xl">
                  {" "}
                  accountancy, audit{" "}
                </span>{" "}
                <span> & </span>{" "}
                <span className="text-[#C00000] font-bold">
                  {" "}
                  consulting firm{" "}
                </span>{" "}
                <span> registered in Kenya for the last </span>
                <span className="text-[#C00000] font-bold"> 43+</span>, years
                with expertise in Accounting, Tax Matters, Audit & Business
                Advisory Services, Forensic Services, Human Resources &
                Personnel Services, Management Consultancy Services, Corporate
                Re-Construction & Insolvency Services, Financial Advisory
                Services, Company Secretarial Services, and Dispute Mediation
                Services.
                <br />
              </p>
              <p className="text-[#C00000] font-bold underline">
                Why Choose Us:
              </p>
              <br></br>
              <ul className="list-disc ml-8">
                <li>
                  <p>
                    Holistic solutions that address the unique requirements of
                    individuals, businesses, and organizations.
                  </p>
                </li>
                <li>
                  <p>
                    A one-stop solution for comprehensive support across various
                    disciplines.
                  </p>
                </li>
                <li>
                  <p>
                    Dedication to delivering value-added services that drive
                    success and help navigate today's complex business
                    environment
                  </p>
                </li>
              </ul>
            </div>
            <Image className="hidden md:block" src={auditImage} alt={"audit"} />
          </div>
          <hr />
        </div>
        <div className="m-9 flex flex-col gap-14" id="our-services">
          <h2 className="text-center font-sans">Our Services</h2>
          <div className="flex flex-col md:flex-row justify-between mx-11">
            <div className="flex flex-1 flex-col items-center gap-14">
              <AccountingIcon />
              <p className="text-xl font-roboto">Accounting</p>
            </div>
            <div className="flex flex-col flex-1 items-center gap-14">
              <ConsultingIcon />
              <p className="text-xl font-roboto">Consulting</p>
            </div>
            <div className="flex flex-col flex-1 items-center gap-14">
              <AssuranceIcon />
              <p className="text-xl font-roboto">Assurance</p>
            </div>
            <div className="flex flex-col flex-1 items-center gap-14">
              <TaxIcon />
              <p className="w-2/3 text-center text-xl">
                Tax Planning and Advisory
              </p>
            </div>
          </div>
          <button
            className="text-[#FFFFFF] bg-[#C00000] rounded-2xl uppercase text-2l py-4 px-8 font-extrabold  self-center"
            onClick={() => router.push("/services")}
          >
            Learn More
          </button>
          <hr />
        </div>
        <div className="m-9 flex flex-col gap-7" id="industry">
          <h2 className="text-center font-sans">Industry</h2>
          <IndustryCarousel />
          <hr />
        </div>
        <div className="m-9 flex flex-col gap-7" id="contact-us">
          <h2 className="text-center font-sans">Contact Us</h2>
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
