import React from "react";
import { FaMapMarkedAlt, FaChartLine, FaVideo, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const managingCrimes = [
    {
      title: "Crime Map",
      description: "Explore crime incidents on an interactive map.",
      icon: <FaMapMarkedAlt className="text-4xl mb-4" />,
      to: "/crimemap",
    },
    {
      title: "Analytics",
      description: "View statistical analysis and trends of crime data.",
      icon: <FaChartLine className="text-4xl mb-4" />,
      to: "/analytics",
    },
    {
      title: "Surveillance",
      description: "Access live video feeds from surveillance cameras.",
      icon: <FaVideo className="text-4xl mb-4" />,
      to: "/surveilance",
    },
    {
      title: "Community",
      description: "Connect with others, report incidents.",
      icon: <FaUsers className="text-4xl mb-4" />,
      to: "/community",
    },
  ];

  const recentCrimes = [
    { title: "Theft in downtown", date: "2023-11-25" },
    { title: "Assault near city park", date: "2023-11-24" },
    { title: "Burglary on Elm Street", date: "2023-11-23" },
  ];

  return (
    <div className="container mx-auto mt-2 px-4">
      <h2 className="text-4xl font-bold mb-4">Crime Monitoring System</h2>

      {/* Managing Crimes Section */}
      <div className="w-full flex-props-c flex-wrap gap-6">
        {managingCrimes.map((crime, index) => (
          <Link to={crime.to}>
            <motion.div
              className="flex rounded-md w-[22rem] h-[10rem] p-4 mb-4 shadow-xl border border-gray-400"
              transition={{ duration: 0.8, delay: index * 0.35 }}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="w-full text-left">
                {crime.icon}
                <h3 className="text-xl font-bold mb-2">{crime.title}</h3>
                <p className="w-[92%]">{crime.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Recent Crimes Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Crimes</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 place-items-center">
          {recentCrimes.map((crime, index) => (
            <motion.div
              className="flex rounded-md w-full sm:w-[20rem] p-4 mb-4 shadow-xl"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: index * 0.19 }}
            >
              <div className="flex-shrink-0 text-left">
                <h3 className="text-2xl font-bold mb-2 w-full text-ellipsis">
                  {crime.title}
                </h3>
                <p>Dated: {crime.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
