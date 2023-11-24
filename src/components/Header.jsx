import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from '../assets/icon.png'

const user = true;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 p-3 sm:p-4 sticky top-0 bg-white">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold flex-props-c">
          <img src={Icon} className="h-8 w-8 mr-3"/>
          CMS
        </Link>

        <div className="dekstop-navbar hidden sm:flex items-center space-x-5">
          <NavLink
            to="/"
            className="hover:text-red-600 text-xl font-semibold text-gray-700"
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-red-600 text-xl font-semibold text-gray-700"
          >
            🔑 {user ? "User" : "Login"}
          </NavLink>
          <NavLink
            to="/search"
            className="hover:text-red-600 text-xl font-semibold text-gray-700"
          >
            🔍 Search
          </NavLink>
        </div>

        <div className="mobile-hamburger sm:hidden">
          <button
            className="flex items-center space-x-2 focus:outline-none font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={`transform transition w-full h-1 bg-current absolute ${
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-1 bg-current absolute ${
                  isOpen ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-1 bg-current absolute ${
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-wrapper mt-3 bg-indigo-500 text-white transition-transform transform origin-top ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="mobile-menu flex flex-col items-center gap-y-3 p-4">
          <NavLink
            to="/"
            className="text-2xl font-semibold flex items-center gap-x-2 active:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="mr-2">🏠</span> Home
          </NavLink>
          <NavLink
            to="/login"
            className="text-2xl font-semibold flex items-center gap-x-2 text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <span className="mr-2">🔑</span> Login
          </NavLink>
          <NavLink
            to="/search"
            className="text-2xl font-semibold flex items-center gap-x-2 text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <span className="mr-2">🔍</span> Search
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
