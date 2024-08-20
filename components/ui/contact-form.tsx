"use client"

import TextField from "@mui/material/TextField";
import React, {useState} from "react";

function SubmitButton(){
    return (
        <button type="submit" className="text-[#FFFFFF] bg-[#C00000] uppercase py-4 rounded-3xl">
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

    const handleOnChange = (value: string, e: React.ChangeEvent<HTMLFormElement>)=>{
        setValues(prevState => ({
            ...prevState,
            [value]: e.target.value
        }))
    }
    return (
        <form className="flex flex-col w-full h-full justify-center gap-12">
            <TextField
                variant="outlined"
                fullWidth
                label="Name"
                onChange={(e)=>handleOnChange('name', e)}
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
                onChange={(e)=>handleOnChange('message', e)}
                value={values.message}
                multiline
                rows={4}
            />
            <SubmitButton/>
        </form>

    )
}