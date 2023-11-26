import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon.png";

const CriminalNotFound = () => {
  return (
    <div className="bg-white p-8 rounded h-screen max w-full text-center">
      <div className="flex-props-c mb-6">
        {/* Your website image */}
        <img src={Icon} alt="Your Website Logo" className="w-12 h-12 mr-2" />
        <span className="text-2xl font-bold">CMS</span>
      </div>

      <p className="text-gray-700 mb-6">Criminal not found.</p>

      {/* Link to go back to the search page */}
      <Link to="/search">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Search
        </button>
      </Link>
    </div>
  );
};

export default CriminalNotFound;
