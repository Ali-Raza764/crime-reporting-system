import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "../assets/icon.png";
import { AuthUser } from "../utils/AuthUser"; // our custom hook for getting user auth property in realtime
import {
  FaHome,
  FaSearch,
  FaUser,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = AuthUser();

  return (
    <div className="border-b-2 sticky top-0 bg-white">
      <div className="flex items-center justify-between p-3 sm:p-4 ">
        <Link to="/" className="text-3xl font-bold flex-props-c">
          <img src={Icon} className="h-8 w-8 mr-3" />
          CMS
        </Link>

        {/* This is the Destop Navbar it will usually remain hidden but after smaller devices it becomes flex */}
        <div className="dekstop-navbar hidden sm:flex items-center space-x-5">
          <NavLink
            to="/"
            className="hover:text-red-600 text-xl font-semibold text-gray-700 flex-props-c gap-x-2"
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            to={user ? "/admin" : "/login"}
            className="hover:text-red-600 text-xl font-semibold text-gray-700 flex-props-c gap-x-2"
          >
            <FaUser /> {user ? "User" : "Login"}
          </NavLink>
          <NavLink
            to="/search"
            className="hover:text-red-600 text-xl font-semibold text-gray-700 flex-props-c gap-x-2"
          >
            <FaSearch /> Search
          </NavLink>
          <NavLink
            to="/createcriminal"
            className="hover:text-red-600 text-xl font-semibold text-gray-700 flex-props-c gap-x-2"
          >
            <FaPlus /> Create
          </NavLink>
        </div>

        {/* This is the hamburger with cross animation it is flex usually but hidden after smaller devices. The open state is used to conditionally render a hamburger or a close button  */}
        <div className="mobile-hamburger sm:hidden ">
          <button
            className="flex items-center space-x-2 focus:outline-none font-bold cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex items-center justify-center relative cursor-pointer">
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

      {/* This is the mobile navbar that is hidden by default you can toggle the hidden class By clicking on the above hamburger */}
      <div
        className={`mobile-nav-wrapper mt-3 bg-indigo-500 text-white transition-transform transform origin-top ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="mobile-menu flex flex-col items-center gap-y-3 p-4 text-2xl font-semibold">
          <NavLink
            to="/"
            className="flex-props-b text-gray-200 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaHome /> Home <FaArrowRight />
          </NavLink>
          <NavLink
            to={user ? "/admin" : "/login"} 
            className=" flex-props-b text-gray-200 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaUser /> {user ? "User" : "Login"} <FaArrowRight />
          </NavLink>
          <NavLink
            to="/search"
            className="flex-props-b text-gray-200 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaSearch /> <h2>Search</h2> <FaArrowRight />
          </NavLink>
          <NavLink
            to="/createcriminal"
            className="flex-props-b text-gray-200 w-full"
            onClick={() => setIsOpen(false)}
          >
            <FaPlus /> <h2>Create</h2> <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
