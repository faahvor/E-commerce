import Image from "next/image";
import Link from "next/link";
import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility

  return (
    <header className="bg-white p-5 flex justify-between items-center">
      <div className="logo">
        <h1>Avuwa🌕</h1>
        {/* <Image src="/path-to-your-logo.png" alt="Logo" width={50} height={50} /> */}
      </div>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            Shop
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white shadow-xl">
              <Link
                href="/gadgets"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Gadgets
              </Link>
              <Link
                href="/clothes"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Clothes
              </Link>
              <Link
                href="/furniture"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Furniture
              </Link>
              <Link
                href="/sports-tools"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sports Tools
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="social-icons flex space-x-3 text-black">
        <a href="#" className="hover:text-gray-700">
          <RiTiktokLine width={24} height={24} />
        </a>
        <a href="#" className="hover:text-gray-700">
          <FaXTwitter width={24} height={24} />
        </a>
        <a href="#" className="hover:text-gray-700">
          <FaInstagram width={24} height={24} />
        </a>
      </div>
    </header>
  );
};
export default Header;
