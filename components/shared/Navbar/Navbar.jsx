'use client'
import { useState } from "react";
import { images } from "@/public/assets";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { item: "Features", path: "/" },
  { item: "Review", path: "/" },
  { item: "Pricing", path: "/" },
  { item: "FAQ", path: "/" },
  { item: "Privacy", path: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-secondary fixe top-0 left-0 right-0 z-[1000]">
      <nav className="max-w-[1380px] w-full mx-auto flex justify-between items-center  py-6 px-4">
        <div className="cursor-pointer">
          <img src={'/assets/images/logo/logo.png'} alt="logo" />
        </div>
        {/* Menu for large screens */}
        <div className="hidden md:flex items-center space-x-[44px]">
          <ul className="flex items-center space-x-[44px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="hover:border-b transition-all duration-200">{item.item}</a>
              </li>
            ))}
            <li>
              <button className="bg-white px-6 py-4 rounded-full text-[#1020AE] font-semibold hover:bg-[#1020AE] hover:text-white hover:scale-x-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                Download
              </button>
            </li>
          </ul>
        </div>
        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {/* Drawer for small screens */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[250px] h-full bg-[#4D5EF6] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleDrawer} className="absolute top-6 right-6">
          <FaTimes size={24} />
        </button>
        <ul className="flex flex-col items-center space-y-6 mt-20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} onClick={toggleDrawer}>
                {item.item}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-white px-6 py-4 rounded-full text-[#1020AE] font-semibold hover:bg-[#1020AE] hover:text-white hover:scale-x-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
