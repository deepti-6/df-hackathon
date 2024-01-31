import React from 'react'
import homeIcon from '../assets/home icon.png';
import categoryIcon from '../assets/category icon.png';
import productIcon from '../assets/products icon.png';
import { IoMdArrowDropright } from "react-icons/io";

const Sidebar = ({ onSelectItem }) => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-200 border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-200">
      <ul className="space-y-4 font-medium">
         <li>
            <button onClick={() => onSelectItem('home')}  className="w-full flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={homeIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Home</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </button>
         </li>
         <li>
            <button onClick={() => onSelectItem('category')}  className="w-full flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={categoryIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Category</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </button>
         </li>
         <li>
            <button onClick={() => onSelectItem('products')} className="w-full flex items-center p-2 text-gray-900 rounded-lg active:bg-yellow-200 hover:bg-gray-100  group">
               <img src={productIcon} alt="Icon" className="h-6 me-3"  />
               <span className="ms-2 flex-start whitespace-nowrap">Product</span>
               <IoMdArrowDropright  RightSFill className='ml-auto text-gray-800' />
            </button>
         </li>
      </ul>
   </div>
</aside>
  )
}

export default Sidebar