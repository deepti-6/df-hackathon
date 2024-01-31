import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg.png';
import logo from '../assets/logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignUp = () => {
  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Check if passwords match
      if (userDetails.password !== userDetails.confirmPassword) {
        throw new Error("Passwords don't match");
      }
  
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Signup failed. Please try again.');
      }
  
      // Assuming your backend returns a token upon successful signup
      const data = await response.json();
      // You might want to store the token or perform other actions on successful signup
  
      // Clear the form after successful signup
      setUserDetails({
        email: '',
        password: '',
        confirmPassword: '',
      });
  
      // Redirect to the login page after successful signup
      navigate('/login');
      // Show success alert
      window.alert('Account created successfully!');
    } catch (error) {
      // Handle errors (display error message, etc.)
      console.error('Error during signup:', error.message);
    }
  };
  

  return (
    <section style={backgroundImageStyle} className="bg-white text-left">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div
              className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg border-[1px] border-gray-50 shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50"
              style={{ boxShadow: '0px 4px 15px 0px #000000BF' }}
            >
              <div className="mx-auto flex flex-col items-center my-4">
                <img src={logo} style={{ width: '300px', height: 'auto' }} alt="Logo" />
                <h1 className="text-xl font-medium text-center text-gray-700">Welcome to Digitalflake Admin
. <br/>Create an Account</h1>
              </div>

              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex-1 mt-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="flex-1 mt-4 relative">
                  <label htmlFor="password" className="block mb-2 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                  <div className="absolute transition-all top-1/2 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiOutlineEyeInvisible size={24} className="text-gray-500" /> : <AiOutlineEye size={24} className="text-gray-500" />}
                  </div>
                </div>

                <div className="flex-1 mt-4 relative">
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={userDetails.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Your Password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                  <div className="absolute transition-all top-1/2 right-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <AiOutlineEyeInvisible size={24} className="text-gray-500" /> : <AiOutlineEye size={24} className="text-gray-500" />}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-buttonBg rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
                <a href="/login" className="mt-4 float-right text-center font-semibold text-base text-gray-700 hover:text-purple-800">
                  Already have an account? Log In here.
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
