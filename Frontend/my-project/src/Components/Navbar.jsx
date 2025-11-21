import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router";
import { FaHome, FaInfoCircle, FaTools, FaProjectDiagram, FaUsers } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Menu items with paths & icons
  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome className="inline-block mr-2" /> },
    { path: "/about", label: "About Us", icon: <FaInfoCircle className="inline-block mr-2" /> },
    { path: "/projects", label: "Projects", icon: <FaProjectDiagram className="inline-block mr-2" /> },
    { path: "/services", label: "Services", icon: <FaTools className="inline-block mr-2" /> },
    { path: "/ourteam", label: "Our Team", icon: <FaUsers className="inline-block mr-2" /> },
  ];

  return (
    <nav className="bg-black text-white px-6 py-2 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img src="logo.png" className="w-17 h-14" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium text-lg">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <li
              className={`cursor-pointer flex items-center ${
                location.pathname === item.path
                  ? "text-yellow-500 font-semibold"
                  : "hover:text-yellow-500"
              }`}
            >
              {item.icon} {item.label}
            </li>
          </Link>
        ))}
      </ul>

      {/* Contact Us (Desktop) */}
      <Link
        to={"/contact"}
        className={`hidden md:block ml-6 px-4 py-2 rounded-md font-semibold transition items-center bg-yellow-500 text-white hover:bg-yellow-600
        `}
      >
        Contact Us
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <HiX size={38} /> : <HiMenu size={38} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg z-10 bg-black/70 backdrop-blur-lg">
          <ul className="flex flex-col space-y-6 text-lg font-medium">
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index} onClick={() => setIsOpen(false)}>
                <li
                  className={`cursor-pointer flex items-center ${
                    location.pathname === item.path
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-yellow-500"
                  }`}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            ))}
          </ul>
          <Link
            to={"/contact"}
        
            className={`px-6 py-3 rounded-md font-semibold transition flex items-center
           "bg-yellow-500 text-white hover:bg-yellow-600"
            `}
          >
             Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
