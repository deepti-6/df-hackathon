// forgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = ({backToLogin}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle forgot password logic here
  }

  return (
    <div className=" px-6 py-12 mx-auto fixed m-auto top-0 left-0 right-0 bottom-0 flex items-center backdrop-blur-lg bg-opacity-50 bg-gray-500">
      <div className=" max-content m-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
      w-full mx-auto overflow-hidden bg-white rounded-lg border-[1px] border-gray-50 shadow-2xl  lg:max-w-xl shadow-gray-300/50 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-background">
            Did you forget your password?
            </h2>
            <p className="mt-2 text-center text-sm font-medium text-gray-600">
            Enter your email address and we'll send you a link to restore password
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px flex-1 mt-6">
              <div >
              <label htmlFor="email" className="text-left block mb-2 font-medium text-sm text-gray-600 " >Email ID</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative rounded-t-md  sm:text-sm      block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-md     focus:border-purple-400  focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center flex-col">
                <button type="submit" className="w-full px-6 py-3 mt-4 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-buttonBg rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50">
                Request reset link
                          </button>
                <Link onClick={backToLogin} to="/" className="mt-4 text-lg font-medium text-gray-600 underline hover:text-purple-500">
                  Back to login
                </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;