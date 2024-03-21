'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Add `sticky top-0 z-50` to make the navbar sticky and ensure it stays above other content. Adjust the `h-16` (height: 4rem) as needed.
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        {' '}
        {/* Ensure inner content aligns with the navbar's height */}
        <div className="flex items-center space-x-4">
          {/* Logo and site name */}
          <a href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-lg font-bold ml-2">MySite</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          {/* Login Button */}
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          {/* Mobile Login Button */}
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
