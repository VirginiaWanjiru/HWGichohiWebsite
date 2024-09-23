"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {useState} from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import Logo from "@/components/icons/Logo";

export default function Navbar() {
    const pathname = usePathname();
    const [nav, setNav] = useState(false);
    

    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Who we are', path: '/about' },
        { name: 'What we do', path: '/services' },
        { name: 'Areas of practice', path: '/#industry' },
        { name: 'Reach Us', path: '/#contact-us'}
    ];

    return (

        <>
        <nav className=" flex-no-wrap px-10 py-3 fixed top-0 z-10 w-full flex md:gap-[26%] md:justify-stretch justify-right bg-neutral-100 ">
            <Link href={"/"} id="logo" className="flex align-middle">
                <Logo/>
            </Link>
            
            {/*Desktop navigation*/}
            <ul className="pt-2 list-none hidden md:flex gap-20 text-sm font-semibold">
                {navItems.map(item => (
                    <li key={item.name}>
                        <Link
                            href={item.path}
                            className={`relative ${pathname === item.path ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-gradient-to-l from-[#C00000] to-[#161D59]'  : ''}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/*Mobile Navigation*/}
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav ? <CloseIcon /> : <MenuIcon/>}
            </div>
            <ul
                className={
                    nav
                        ? 'z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >

                {/* Mobile Logo */}
                <div className="w-full m-4" onClick={()=>setNav(false)}>
                    <Link href={"/"} id="logo">
                        <Logo/>
                    </Link>
                </div>
                {navItems.map(item => (
                    <li
                        key={item.name}
                        className='p-4 duration-300 hover:text-black cursor-pointer'
                    >
                        <Link
                            onClick={()=>setNav(false)}
                            href={item.path}
                            className={`relative ${pathname === item.path ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[2px] after:bg-gradient-to-l from-[#C00000] to-[#161D59]'  : ''}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            
        </nav>
        

        </>
        
    );
}