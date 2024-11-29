"use client"

import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {useRef} from'react';
import emailjs from '@emailjs/browser';

function SubmitButton(){
    return (
        <button type="submit" className="text-[#FFFFFF] bg-[#C00000] uppercase py-4 px1 rounded w-1/2 ml-40 ">
            Submit
        </button>
    )
}



    

const Contact = () => {
    const form = useRef<HTMLFormElement | any >();
    const sendEmail = (e: any) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xs3hh98', 'template_47dejgo', form.current, {
            publicKey: 'HgfOIWKXOEpTF2ab3',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

          e.target.reset()
      };

    return (
        <form  
        
        ref={form}
        onSubmit ={sendEmail}


        className="flex flex-col w-full h-full justify-center gap-12">

          <p className=" text-[#C00000] text-4xl font-bold "> Send us a message </p>
            <input
                type="text"
                placeholder="Name"
                className="text-[#C00000] text-2l py-4 px-1 border"
                name='user_name'
              
                required
                
            />
           <input
                type="email"
                placeholder="Email"
                className="text-[#C00000] text-2l py-4 px-1 border"
                name='email'
                required
                
            />
            <textarea
               
                placeholder="Message"
                className="text-[#C00000] text-2l py-4 px-2 border"
                name='message'
                required
                
            />
            <SubmitButton/>
        </form>

    )
}
export default Contact;
