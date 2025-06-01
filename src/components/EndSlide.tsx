'use client';

import { useState } from 'react';
import { FaStar } from "react-icons/fa";

export default function EndSlide() {
  const [showMoon, setShowMoon] = useState(false);

  const handleThankYou = () => {
    setShowMoon(true);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden relative">
      {/* Dark overlay that fades in */}
      <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-3000 ${
        showMoon ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="text-center max-w-4xl px-6 relative z-10">
        <h1 className={`text-5xl font-bold mb-8 transition-colors duration-3000 ${
          showMoon ? 'text-white' : 'text-gray-900'
        }`}
            style={{ 
              fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif'
            }}>
          Project Proposal Is Complete
        </h1>
        
        <div className="mb-12">
          <button
            onClick={handleThankYou}
            className={`border-2 border-black hover:bg-black hover:text-white text-black font-bold py-4 px-8 rounded-lg text-xl flex items-center gap-2 mx-auto cursor-pointer transition-opacity duration-300 ${
              showMoon ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <FaStar />
            Thank You For Your Attention
          </button>
        </div>

        {/* Moon */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-3000 ease-out ${
          showMoon ? '-translate-y-46' : 'translate-y-150'
        }`}>
          <div className="w-32 h-32 bg-yellow-200 rounded-full shadow-2xl">
          </div>
        </div>
      </div>
    </section>
  );
} 