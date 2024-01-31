// df-frontend/src/components/LogIn.js

import React, { useState, useContext } from 'react';
import backgroundImage from '../assets/bg.png';
import logo from '../assets/logo.png';
import ForgotPassword from '../components/ForgotPassword';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleForgotPasswordClick = () => {
    console.log('Opening forgot password modal');
    setShowForgotPasswordModal(true);
  };

  const handleCloseForgotPassword = (e) => {
    e.preventDefault();
    console.log('Closing forgot password modal');
    setShowForgotPasswordModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      // Assuming your backend returns a token upon successful login
      const userData = await response.json();
      // You might want to store the token or perform other actions on successful login

      // Clear the form after successful login
      setDetails({
        email: '',
        password: '',
      });

      // Call the login method from the AuthContext
      login(userData);

      // Handle successful login (e.g., redirect to another page)
      // After a successful login
      navigate('/dashboard');
      console.log('Login successful:', userData);
    } catch (error) {
      // Handle errors (display error message, etc.)
      console.error('Error during login:', error.message);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <section style={backgroundImageStyle} className="bg-white text-left">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div
              className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg border-[1px] border-gray-50 shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50"
              style={{ boxShadow: '0px 4px 15px 0px #000000BF' }}
            >
              <div className="mx-auto flex flex-col items-center my-4">
                <img src={logo} style={{ width: '300px', height: 'auto' }} alt="Logo" />
                <h1 className="text-xl font-medium text-gray-700">Welcome to Digitalflake Admin</h1>
              </div>

              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex-1 mt-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={details.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="mt-4 relative">
                  <label htmlFor="password" className="block mb-2 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={details.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                  <div className="absolute transition-all top-1/2 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiOutlineEyeInvisible size={24} className="text-gray-500" /> : <AiOutlineEye size={24} className="text-gray-500" />}
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-4 float-right align-baseline font-semibold text-base text-gray-700 hover:text-purple-800"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </a>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-10 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-buttonBg rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                >
                  Log In
                </button>
                <a href="/signup" className="mt-4 float-right font-semibold text-base text-gray-700 hover:text-purple-800">
                  New User? Sign Up here.
                </a>
              </form>

              {/* Forgot Password Modal */}
              {showForgotPasswordModal && <ForgotPassword backToLogin={handleCloseForgotPassword} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
