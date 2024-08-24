import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative px-4 py-2 flex justify-between items-center bg-gradient-to-r from-purple-50 to-white border-b border-gray-200 shadow-md">
      {/* Logo */}
      <Link
        className="flex items-center text-2xl font-bold text-purple-600"
        to="/"
      >
        <img
          src="/icon.png"
          alt="Logo"
          className="h-10 ml-12 w-auto shadow-sm"
        />
      </Link>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="flex items-center text-purple-600 p-2 hover:text-purple-700 transition duration-200"
          id="navbar_burger"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Hamburger menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      {/* Main Navigation Links */}
      <ul className="hidden lg:flex lg:items-center lg:space-x-8">
        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-700 hover:text-purple-600 transition duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-gray-700 hover:text-purple-600 transition duration-200"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-purple-600 transition duration-200"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right Side Icons */}
      <div className="hidden lg:flex items-center">
        <Link to="/test">
          <button className="py-2 px-4 m-1 text-center bg-purple-700 border rounded-md text-white hover:bg-purple-600 transition duration-200">
            Take Assessment
          </button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <nav className="fixed bg-white top-0 left-0 bottom-0 w-5/6 max-w-sm py-6 px-6 border-r border-gray-200 shadow-lg">
            <div className="flex items-center mb-8">
              <Link className="text-2xl font-bold text-purple-600" to="/">
                Logo
              </Link>
              <button className="ml-auto p-2" onClick={toggleMobileMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-purple-600 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-purple-600 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-gray-700 hover:text-purple-600 transition duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-purple-600 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
