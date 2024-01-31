import React, { useState } from 'react';
import whiteLogo from '../assets/white_logo.png';
import { LuUserCircle2 } from 'react-icons/lu';
import { useAuth } from '../context/AuthContext'; // Import your authentication context
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    // Redirect or perform other actions after logout, if needed
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="bg-background px-3 py-4 lg:px-5 lg:pl-3 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="/" className="flex ms-2 md:me-24">
              <img src={whiteLogo} alt="DigitalFlake Logo" className="h-8 me-4" />
            </a>
          </div>
          <div className="flex items-center relative">
            <div>
              <button
                type="button"
                className="flex text-sm rounded-full hover:text-gray-400"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <LuUserCircle2 className="w-8 h-8 rounded-full" />
              </button>
            </div>
            {isDropdownOpen && (
                <button
                  onClick={handleLogout}
                  className="absolute z-50 mt-36 right-2 bg-white rounded shadow-md block px-10 py-2 text-base font-semiboldrounded border border-red-800 text-red-700 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  Logout
                </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
