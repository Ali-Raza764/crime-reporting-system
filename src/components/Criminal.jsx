import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Criminal = ({
  criminalData: {
    criminalId,
    imageUrl,
    name,
    gender,
    age,
    criminal_records,
    description,
  },
}) => {
  return (
    <div className="container mx-auto bg-white px-6 py-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={imageUrl}
            alt="Criminal"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600">ID: {criminalId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
            <p className="text-gray-600">
              <span className="font-semibold">Age:</span> {age}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Gender:</span> {gender}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Criminal Records</h4>
            <p className="text-gray-600">
              <span className="font-semibold">Offenses:</span>{" "}
              {criminal_records.offences}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Status:</span>{" "}
              {criminal_records.status}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Additional Details</h4>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Report Criminal
          </button>
        </div>

        <div className="mt-4 text-red-500 flex items-center">
          <FaExclamationCircle className="mr-2" />
          <p>This criminal is considered dangerous. Exercise caution.</p>
        </div>
      
    </div>
  );
};

export default Criminal;
