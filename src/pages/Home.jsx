import React from "react";
import { FaMapMarkedAlt, FaChartLine, FaVideo, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto mt-2 px-4">
      <h2 className="text-4xl font-bold mb-4">Crime Monitoring System</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Map Section */}
        <div className="bg-blue-500 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <FaMapMarkedAlt className="text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Crime Map</h3>
          <p>Explore crime incidents on an interactive map.</p>
        </div>

        {/* Analytics Section */}
        <div className="bg-green-500 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <FaChartLine className="text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Analytics</h3>
          <p>View statistical analysis and trends of crime data.</p>
        </div>

        {/* Surveillance Section */}
        <div className="bg-yellow-500 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <FaVideo className="text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Surveillance</h3>
          <p>Access live video feeds from surveillance cameras.</p>
        </div>

        {/* Community Section */}
        <div className="bg-indigo-500 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <FaUsers className="text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p>Connect with others, report incidents, and discuss safety.</p>
        </div>
      </div>

      {/* Recent Crimes Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Crimes</h2>
        <ul className="list-disc pl-6">
          <li>Theft in downtown - 2023-11-25</li>
          <li>Assault near city park - 2023-11-24</li>
          <li>Burglary on Elm Street - 2023-11-23</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
