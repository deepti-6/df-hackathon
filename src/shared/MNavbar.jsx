import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/white_logo.png'
import { LuUserCircle2 } from "react-icons/lu";

const MNavbar = () => {
  return (
    <>
    <nav className="sticky inset-0 z-10 block h-max mx-auto max-w-screen rounded-none bg-background bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-16 lg:py-4">
        <div className="mx-auto max-w-[85rem] flex items-center justify-between text-gray-900">
            <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5  text-base font-medium leading-relaxed text-inherit antialiased"
            >
            <img src={logo} alt="Logo" style={{ width: 'auto', height: '35px' }} />

                </a>
            <a href='/'><button
            className="middle none center text-gray-200  text-xs transition-all hover:shadow-lg active:opacity-[0.85]  lg:inline-block"
            type="button"
            data-ripple-light="true"
            >
                <LuUserCircle2 style={{ width: 'auto', height: '40px' }}/>
            </button></a>
          
        </div>
    </nav>
    </>
  )
}

export default MNavbar