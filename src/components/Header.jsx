// src/components/Header.js
import  { useState } from "react";
import { Link } from "react-router-dom";
import {  FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white z-50  shadow-md py-6 px-[7rem] flex justify-between items-center fixed w-full ">
      <h1 className="font-bold text-[2rem]"> AVUWA.</h1>
      {/* Adjust the path as needed */}
      <nav className="flex-1 flex justify-center items-center space-x-8 *:font-bold *:text-[20px]">
        <Link to="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="text-gray-800 hover:text-gray-600 flex items-center"
          >
            Shop
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-white shadow-lg right-0 w-48 mt-1 pt-4 rounded-b-lg">
              <Link
                to="/sports"
                className="anchor border-black border-b-2"
              >
                Sports
              </Link>
              <Link
                to="/clothes"
                className="anchor border-black border-b-2"
              >
                Clothes
              </Link>
              <Link
                to="/gadgets"
                className="anchor border-black border-b-2"
              >
                Gadgets
              </Link>
              <Link
                to="/furniture"
                className="anchor"
              >
                Furniture
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="text-gray-800 hover:text-gray-600">
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4 ">
        <IoSearch 
          size="28"
          className="text-gray-800 hover:text-gray-600 cursor-pointer" 
        />
        <FaRegUserCircle
          size="28"
          className="text-gray-800 hover:text-gray-600 cursor-pointer"
        />
        <BsCart3 
          size="28"
          className="text-gray-800 hover:text-gray-600 cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
