import React from 'react'
import logo from '../assets/logo.png';

const HomeContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">
         <img src={logo} style={{ width: '300px', height: 'auto' }} />
         <h1 className="text-xl font-medium text-gray-700">Welcome to Digitalflake Admin</h1>
      </div>
      </div>
  )
}

export default HomeContent