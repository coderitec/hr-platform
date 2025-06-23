"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavData from "./NavData";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false)


    function handleNavToggle() {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <div className="text-slate-50 bg-orange-600 h-16 flex justify-between items-center px-4 md:hidden">
        <Link href="/" className="text-3xl">HR</Link>
        <GiHamburgerMenu className="text-3xl  cursor-pointer" 
        onClick={handleNavToggle}/>
    </div>

{ isOpen &&

    <ul className="flex space-x-4 flex-col md:hidden justify-around items-center text-slate-50 bg-orange-600 h-screen font-semibold text-lg capitalize"
    onClick={() => setIsOpen(false)}>
        <NavData />
    </ul>
}
    </>
  )
}