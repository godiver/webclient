import React from "react";

export const Header = () => {
  return (
    <div className="relative bg-main-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 text-gray-50">BookTube</div>
        </div>
      </div>
    </div>
  );
};
