import Link from "next/link";
import React from "react";
import { FaHome, FaExclamationTriangle } from "react-icons/fa"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full border border-gray-100">
        
        {/* Icon Animation */}
        <div className="flex justify-center mb-6">
          <div className="bg-rose-50 p-6 rounded-full animate-pulse">
            <FaExclamationTriangle className="text-6xl text-rose-500" />
          </div>
        </div>

        {/* 404 Heading */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Home Button */}
        <Link href="/">
          <button className="btn bg-rose-600 hover:bg-rose-700 text-white border-none px-8 py-3 rounded-lg flex items-center gap-2 mx-auto font-bold shadow-md transition-transform hover:scale-105">
            <FaHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;