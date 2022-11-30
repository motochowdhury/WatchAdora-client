import React from "react";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="antialiased max-w-6xl mx-auto my-20 px-8">
      <h1 className="text-3xl font-poppins text-center">What We Provide</h1>
      <div className="relative block md:flex items-center">
        <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
          <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
            Deal With Confident
          </div>
          <div className="flex justify-center mt-3">
            <ul>
              <li className="flex items-center">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      className="primary"
                      d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                    />
                    <path
                      className="secondary"
                      d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">Sell Product</span>
              </li>
              <li className="flex items-center mt-3">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      className="primary"
                      d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                    />
                    <path
                      className="secondary"
                      d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">Pay Securely</span>
              </li>
              <li className="flex items-center mt-3">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      className="primary"
                      d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                    />
                    <path
                      className="secondary"
                      d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">
                  Real-time reporting
                </span>
              </li>
            </ul>
          </div>
          <Link
            to="/register"
            className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
            href="#">
            <span>Create account</span>
            <span className="font-medium text-gray-700 ml-2">➔</span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
          <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
              Enterprise
            </div>
            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
              Stripe offers everything needed to run an online business at
              scale. Get in touch for details.
            </div>
            <div className="my-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
                Product Management
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">
                Payment With Stripe
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">
                Buy Product
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4">
                Dedicated support
              </div>
            </div>
            <div
              className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
              href="#">
              <span>Thank You</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
