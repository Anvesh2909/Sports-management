import React from 'react';
import { copyrightSign } from "../assets/icons";
import { facebook, twitter, instagram } from '../assets/icons';
const About = () => {
  return (
    <footer className="w-full p-8 bg-gray-900 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex justify-between items-start gap-20 flex-wrap lg:flex-row flex-col">
        {/* Left Section: Brand and Description */}
        <div className="flex flex-col items-start mb-10 lg:mb-0">
          <h1
            className="text-4xl font-bold mb-4 cursor-pointer text-purple-500"
          >
            Sports<span className="text-white">Zone</span>⚽
          </h1>
          <p className="text-base leading-7 text-gray-400 max-w-md mb-8">
            Stay connected with the latest sports events, scores, and teams. Explore a world of excitement and action.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="https://twitter.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://instagram.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-base leading-7 text-gray-400">
          <h2 className="text-xl font-bold mb-2 text-purple-500">Get in Touch</h2>
          <p>
            Email: <a href="mailto:anveshyadavmokam@gmail.com" className="text-white hover:underline">anveshyadavmokam@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+6305625811" className="text-white hover:underline">6305625811</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center text-gray-400 mt-16">
        <div className="flex items-center gap-2">
          <img src={copyrightSign} alt="Copyright sign" width={20} height={20} />
          <p>&copy; 2024 SportsZone. All rights reserved.</p>
        </div>
        <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default About;