import React from 'react'
import whiteLogo from '../assets/white_logo.png';
import homeIcon from '../assets/home icon.png';
import categoryIcon from '../assets/category icon.png';
import productIcon from '../assets/products icon.png';
import { LuUserCircle2 } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import logo from '../assets/logo.png';


const Dashboard = () => {
  return (
    <>


<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
  <div className="bg-background px-3 py-4 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   ">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="/" className="flex ms-2 md:me-24">
        <img src={whiteLogo} alt="DigitalFlake Logo" className="h-8 me-4"  />
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <LuUserCircle2 className="w-8 h-8 rounded-full" />

              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  " id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 " role="none">
                  User Name
                </p>
                <p className="text-sm font-medium text-gray-900 truncate " role="none">
                  user@gmail.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   " role="menuitem">Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-200 border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-200">
      <ul className="space-y-4 font-medium">
         <li>
            <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={homeIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Home</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </a>
         </li>
         <li>
            <a href="/category" className="flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={categoryIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Category</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </a>
         </li>
         <li>
            <a href="/products" className="flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={productIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Product</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </a>
         </li>
      </ul>
   </div>
</aside>

{/* <div className="p-4 sm:ml-64 min-h-screen">
   <div className="  min-h-screen p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
     
      <div className="m-auto max-h-screen flex flex-col items-center justify-center ">
                    <img src={logo} style={{ width: '300px', height: 'auto' }}/>
                <h1 className="text-xl font-medium text-gray-700">Welcome to Digitalflake Admin</h1>

                </div>
   </div>
</div> */}
<div className="p-4 sm:ml-64 min-h-screen">
   {/* <div className="min-h-screen p-4 border-2  border-gray-200 border-dashed rounded-lg mt-14 flex items-center justify-center"> */}
   <div className="min-h-screen p-4 border-2 shadow-md  rounded-lg mt-14 flex items-center justify-center">
      <div className="text-center">
         <img src={logo} style={{ width: '300px', height: 'auto' }} />
         <h1 className="text-xl font-medium text-gray-700">Welcome to Digitalflake Admin</h1>
      </div>
   </div>
</div>


    </>
  )
}

export default Dashboard