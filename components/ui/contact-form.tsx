"use client"

import TextField from "@mui/material/TextField";
import React, {useState} from "react";

function SubmitButton(){
    return (
        <button type="submit" className="text-[#FFFFFF] bg-[#C00000] uppercase py-4 px-1 rounded-2xl">
            Submit
        </button>
    )
}
export default function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleOnChange = (values:any, handleOnChange:any, SubmitButton:any)=>{
       
    return (
        <form className="flex flex-col w-full h-full justify-center gap-12">
            <TextField
                variant="outlined"
                fullWidth
                label="Name"
                onChange={(e)=>handleOnChange('name', e.target.value )}
                value={values.name}
                size="small"
            />
            <TextField
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                onChange={(e)=>handleOnChange('email', e)}
                value={values.email}
                size="small"
            />
            <TextField
                variant="outlined"
                fullWidth
                label="Message"
                onChange={(e)=>handleOnChange('message', e.target.value)}
                value={values.message}
                multiline
                rows={4}
            />
            <SubmitButton/>
        </form>

    )}
}