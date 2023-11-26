import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../assets/icon.png";

const LoggedOut = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const returnUrl = pathname.substring(1); // remove the /(slash) from the pathname

  return (
    <div className="bg-white rounded h-screen text-center w-full flex-props-c flex-col">
      <div className="flex-props-c mb-6">
        {/* Your website icon */}
        <img src={Icon} alt="Your Website Logo" className="w-12 h-12 mr-2" />
        <span className="text-2xl font-bold">CMS</span>
      </div>

      <p className="text-gray-700 mb-6 w-full text-center">
        You have been logged out.
      </p>

      {/* Button to go back to the login page */}
      <Link to={`/login?returnUrl=${encodeURIComponent(returnUrl)}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login Again
        </button>
      </Link>
    </div>
  );
};

export default LoggedOut;
