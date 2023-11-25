import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CriminalLoading = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Skeleton width={80} height={24} />
          <Skeleton width={120} height={24} />
        </div>

        <div className="flex items-center mb-4">
          <Skeleton circle width={64} height={64} />
          <div>
            <Skeleton width={120} height={24} />
            <Skeleton width={80} height={16} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
            <Skeleton width={80} height={16} />
            <Skeleton width={80} height={16} />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Criminal Records</h4>
            <Skeleton width={80} height={16} />
            <Skeleton width={80} height={16} />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Additional Details</h4>
          <Skeleton count={3} height={16} />
        </div>

        <div className="mt-8 flex justify-end">
          <Skeleton width={120} height={36} />
        </div>

        <div className="mt-4 text-red-500 flex items-center">
          <Skeleton width={24} height={24} />
          <Skeleton count={3} width={120} height={16} />
        </div>
      </div>
    </div>
  );
};

export default CriminalLoading;
