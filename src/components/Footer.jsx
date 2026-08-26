import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo */}
          <div>
            <h3
              className="text-2xl font-bold text-blue-600 mb-3"
              data-aos="fade-up"
            >
              RideNow
            </h3>

            <p
              className="text-sm text-gray-400 max-w-xs"
              data-aos="fade-up"
            >
              We make your rides smoother, faster, and more affordable.
              Your trusted car rental partner.
            </p>

            <div
              className="flex justify-start space-x-4 mt-5"
              data-aos="fade-up"
            >
              <a href="/" aria-label="Facebook">
                <FaFacebookF className="text-blue-600 hover:text-blue-900 transition" />
              </a>

              <a href="/" aria-label="Instagram">
                <FaInstagram className="text-blue-600 hover:text-blue-900 transition" />
              </a>

              <a href="/" aria-label="Twitter">
                <FaTwitter className="text-blue-600 hover:text-blue-900 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-3 text-blue-600"
              data-aos="fade-up"
            >
              Quick Links
            </h4>

            <ul
              className="space-y-2 text-sm text-gray-400"
              data-aos="fade-up"
            >
              <li>
                <a href="/" className="hover:text-blue-600">
                  Home
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-blue-600">
                  About Us
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-blue-600">
                  Cars
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-3 text-blue-600"
              data-aos="fade-up"
            >
              Get In Touch
            </h4>

            <p className="text-sm text-gray-400 mb-2" data-aos="fade-up">
              Colombo, Sri Lanka.
            </p>

            <p className="text-sm text-gray-400 mb-2" data-aos="fade-up">
              Email: support@RideNow.com
            </p>

            <p className="text-sm text-gray-400 mb-4" data-aos="fade-up">
              Phone: +94 77 153 3595
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-sm text-gray-400 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} RideNow | Developed by DevCode
          Programmers. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer