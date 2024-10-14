import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [hamBtn, setHambtn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const location = useLocation();

  // Function to scroll smoothly to different sections
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setHambtn(false); // Close the mobile menu after scrolling
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Brand and Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold cursor-pointer text-gray-900">
          Sports<span className="text-indigo-500">Zone</span>⚽
        </Link>
      </div>

      {/* Centered Navigation Links for Desktop */}
      <div className="hidden md:flex flex-grow justify-center">
        <div className="flex gap-10">
          <Link to="/events" className="text-gray-900 hover:text-indigo-500 font-semibold transition">
            Events
          </Link>
          <Link to="/scores" className="text-gray-900 hover:text-indigo-500 font-semibold transition">
            Scores
          </Link>
          <Link to="/teams" className="text-gray-900 hover:text-indigo-500 font-semibold transition">
            Teams
          </Link>
        </div>
      </div>

      {/* Profile Icon - Desktop Only */}
      <div className="hidden md:flex items-center relative">
        {/* Profile icon for desktop */}
        <div className="w-10 h-10 rounded-full bg-indigo-500 items-center justify-center cursor-pointer hover:bg-blue-600 transition" onClick={toggleDropdown}>
          <span className="text-white">N</span> {/* Placeholder for profile */}
        </div>

        {/* Profile Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg z-20">
            <div className="flex flex-col p-2">
              <Link to="/profile" className="text-gray-900 hover:bg-indigo-100 font-semibold py-2 px-4 rounded">
                My Profile
              </Link>
              <button className="text-gray-900 hover:bg-indigo-100 font-semibold py-2 px-4 rounded" onClick={() => console.log('Logout clicked')}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center gap-4">
        <button
          className="text-gray-900 focus:outline-none"
          onClick={() => setHambtn(!hamBtn)}
        >
          {/* Icon to toggle */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {hamBtn ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {hamBtn && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 shadow-md">
          <div className="flex flex-col items-center p-4 text-gray-900">
            <Link
              to="/events"
              onClick={() => setHambtn(false)}
              className="cursor-pointer hover:text-blue-500 font-semibold py-2 transition"
            >
              Events
            </Link>
            <Link
              to="/scores"
              onClick={() => setHambtn(false)}
              className="cursor-pointer hover:text-blue-500 font-semibold py-2 transition"
            >
              Scores
            </Link>
            <Link
              to="/teams"
              onClick={() => setHambtn(false)}
              className="cursor-pointer hover:text-blue-500 font-semibold py-2 transition"
            >
              Teams
            </Link>

            {/* Profile icon for mobile inside hamburger menu */}
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition" onClick={toggleDropdown}>
            <span className="text-white">N</span> {/* Placeholder for profile */}
            </div>

            {/* Profile Dropdown for Mobile */}
            {dropdownOpen && (
              <div className="mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                <div className="flex flex-col p-2">
                  <Link to="/profile" className="text-gray-900 hover:bg-indigo-100 font-semibold py-2 px-4 rounded">
                    My Profile
                  </Link>
                  <button className="text-gray-900 hover:bg-indigo-100 font-semibold py-2 px-4 rounded" onClick={() => console.log('Logout clicked')}>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;