import React from 'react'
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";

const contactus = () => {

 
  return (
    
    <div id="contact-us" className="mt-20 mb-10 flex flex-col gap-7" >
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
  )
}

export default contactus