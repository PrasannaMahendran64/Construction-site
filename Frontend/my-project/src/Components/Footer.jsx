import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';




const Footer = () => {
  return (
   
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-10">
        {/* Brand Info */}
        <div>
           <Link to={"/"}><img src="logo.png" className="w-22 h-18 " alt="Logo" /></Link>
          <p className="mt-4 text-sm leading-relaxed">
            We Are More Than Just Builders; We Are Creators Of Architectural Marvels. With A Passion For Excellence And An Unwavering Commitment To Quality.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
           <li> <Link to={"/ourteam"}>Our Team</Link></li>
            
            
          </ul>
        </div>

 <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Support</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookie</li>
            <li>Policies</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 ADVENTOUR. All rights reserved.
      </div>
    </footer>
  );

  
}

export default Footer
