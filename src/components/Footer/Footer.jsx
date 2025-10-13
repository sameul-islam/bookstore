import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope
} from "react-icons/fa";
import { GrSend } from "react-icons/gr";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Terms & Conditions", link: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 - Company Info */}
        <div>
          <h1 className="flex items-center gap-3 mb-4">
            <img src="/logos.png" alt="Logo" className="max-w-[70px]" />
            <span className="text-2xl font-bold">BookStore</span>
          </h1>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Discover, read, and enjoy the best books worldwide. Quality & variety guaranteed.
            Discover, read, and enjoy the best books worldwide. Quality & variety guaranteed.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {FooterLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.link}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       

        {/* Column 4 - Contact / Customer Care */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact / Support</h2>
          <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <FaLocationArrow />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt />
              <span>+880 132060-2343</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>bookstore121@gmail.com</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Our support team is available 24/7 to assist you.
            </p>
          </div>
        </div>

      

       {/* Column 3 - Subscribe */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            Get latest book releases and offers directly to your inbox.
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 transition-colors">
              <GrSend size={24}/>
            </button>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="hover:scale-110 transition duration-300">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-300 dark:border-gray-600 text-center text-sm py-4">
        © 2025 BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
