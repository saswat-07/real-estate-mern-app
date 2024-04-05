import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto flex flex-wrap justify-between p-10 ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Royal Estate</h3>
          <p className="text-base text-balance leading-loose">
            In addition to providing real estate services, 
            Royal Estate also offers a range of other services, 
            including property management, marketing.
          </p>
          <div className="mt-4">
            <Link to="/" className="text-white hover:text-gray-400 hover:underline">
              Contact Us
            </Link>
            <Link to="/" className="text-white hover:text-gray-400 ml-4 hover:underline">
              Careers
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-gray-400 hover:underline ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400 hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <ul className="flex items-center justify-between w-32">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                <BiLogoFacebookCircle className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                <BsTwitterX className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                <BsInstagram className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-sm px-auto">Made with ❤️ by Saswat Kumar Upadhyaya | &copy; {new Date().getFullYear()} Royal Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
