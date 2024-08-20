"use client"

import styles from "@/components/home.module.css";
import auditImage from "@/public/images/audit.png";
import AccountingIcon from "@/components/icons/AccountingIcon";
import ConsultingIcon from "@/components/icons/ConsultingIcon";
import AssuranceIcon from "@/components/icons/AssuranceIcon";
import TaxIcon from "@/components/icons/TaxIcon";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import IndustryCarousel from "@/components/ui/industry-carousel";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center my-60">
            <div className={`${styles.landing} flex items-center h-full w-full md:min-h-[70vh] lg:min-h-[90vh]`} id="landing">
              <span className="flex flex-col w-full h-full px-6 md:px-12 my-8 gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF]">
                  <h1 className="text-center md:text-start text-6xl md:text-7xl">Delivering Results in Compliance</h1>
                  <p>Excellence, Integrity, Growth: Partnering for Success</p>
                  <button onClick={()=>router.push('/#contact-us')} className="bg-[#C00000] py-4 font-extrabold uppercase md:w-3/4 max-w-[40rem] rounded-3xl md:text-2xl">
                      Contact Us
                  </button>
              </span>
            </div>
            <div className={styles.content}>
                <div className="m-9 flex flex-col gap-14" id="about-us">
                    <h2 className="text-center">About Us</h2>
                    <div className="flex justify-between gap-8">
                        <div>
                            <p>H. W. Gichohi & Company CPA (K) is a leading accountancy firm in Kenya with:</p>
                            <p><span className="text-[#C00000] font-bold">43+</span> years of experience.</p>
                            <br/>
                            <p className="text-[#C00000] font-bold">Why Choose Us:</p>
                            <ul className="list-disc ml-8">
                                <li>
                                    <p>Holistic solutions that address the unique requirements of individuals, businesses, and organizations.</p>
                                </li>
                                <li>
                                    <p>A one-stop solution for comprehensive support across various disciplines.</p>
                                </li>
                                <li>
                                    <p>Dedication to delivering value-added services that drive success and help navigate today's complex business environment</p>
                                </li>
                            </ul>
                        </div>
                        <Image className="hidden md:block" src={auditImage} alt={"audit"}/>
                    </div>
                    <hr />
                </div>
                <div className="m-9 flex flex-col gap-14" id="our-services">
                    <h2 className="text-center">Our Services</h2>
                    <div className="flex flex-col md:flex-row justify-between mx-11">
                        <div className="flex flex-1 flex-col items-center gap-14">
                            <AccountingIcon/>
                            <p className="text-xl">Accounting</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <ConsultingIcon/>
                            <p className="text-xl">Consulting</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <AssuranceIcon/>
                            <p className="text-xl">Assurance</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <TaxIcon/>
                            <p className="w-2/3 text-center text-xl">Tax Planning and Advisory</p>
                        </div>
                    </div>
                    <button
                        className="text-[#FFFFFF] bg-[#C00000] rounded-3xl uppercase text-xl py-7 px-9 font-extrabold  self-center"
                        onClick={()=>router.push('/services')}
                    >
                        Learn More
                    </button>
                    <hr />
                </div>
                <div className="m-9 flex flex-col gap-7" id="industry">
                    <h2 className="text-center">Industry</h2>
                    <IndustryCarousel/>
                    <hr />
                </div>
                <div className="m-9 flex flex-col gap-7" id="contact-us">
                    <h2 className="text-center">Contact Us</h2>
                    <div className="flex flex-col-reverse h-full w-full items-center gap-6 md:flex-row md:h-[33.875rem] md:pl-8">
                        <div className="w-full md:w-2/5 h-full">
                            <ContactForm/>
                        </div>
                        <div className="w-full md:w-3/5 h-full">
                            <ContactMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}