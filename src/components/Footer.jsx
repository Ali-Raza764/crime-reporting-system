import React from "react";
import Icon from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-11">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between flex-col md:flex-row">
        <a className="flex items-center text-gray-900">
          <img
            src={Icon}
            alt="Logo"
            className="w-10 h-10 bg-green-800 rounded-full"
          />
          <span className="ml-2 text-lg">CMS</span>
        </a>
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © 2023 CMS —
          <a
            href="https://instagram.com"
            className="text-gray-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @instagram.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
