"use client"
import { LuHome } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { LuShoppingBag } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";

interface Props{}
const Footer = (props:Props) => {
  return (
    <div className="absolute bottom-0 w-full e">
      
    <footer className="flex justify-between py-5  px-5 z-50 text-[#7FFAA2] border-t-2 border-[#7FFAA2]">
      <LuHome className="footer"/>
      <FaRegHeart className="footer"/>
      <GrNotes className="footer" />
      <LuShoppingBag className="footer"/>
      <IoPersonOutline className="footer"/>
    </footer>
    </div>
  );
};

export default Footer;
