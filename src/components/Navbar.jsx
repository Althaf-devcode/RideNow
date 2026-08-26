import React, { useState } from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      
      <header className="fixed top-0 w-full z-100 flex justify-between items-center px-5 py-3.5 lg:px-22 bg-white shadow">
        
        {/* logo section */}
        <div>
          <span className="font-extrabold text-2xl text-blue-600 pl-1">
            RideNow
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-8">
          <a href="#hero" className="font-medium hover:text-blue-600 transition-all">Home</a>
          <a href="#Cars" className="font-medium hover:text-blue-600 transition-all">Our Cars</a>
          <a href="#About" className="font-medium hover:text-blue-600 transition-all">About Us</a>
          <a href="#Contact" className="font-medium hover:text-blue-600 transition-all">Contact Us</a>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden lg:block">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white px-5 py-1 rounded cursor-pointer transition-all duration-300 hover:bg-blue-700">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </header>

      {/* Mobile Dropdown (FULL WIDTH, BELOW NAVBAR) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full px-5 py-4 bg-white shadow-md z-90">

          <nav className="flex flex-col gap-4">
            <a href="#hero" className="font-medium hover:text-blue-600">Home</a>
            <a href="#Cars" className="font-medium hover:text-blue-600">Our Cars</a>
            <a href="#About" className="font-medium hover:text-blue-600">About Us</a>
            <a href="#Contact" className="font-medium hover:text-blue-600">Contact Us</a>
          </nav>

          <div className="mt-4">
            <SignedOut>
              <SignInButton>
                <button className="w-full bg-blue-600 text-white py-2 rounded transition-all duration-300 hover:bg-blue-700">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

        </div>
      )}

    </>
  )
}

export default Navbar
