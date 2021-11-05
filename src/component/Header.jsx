import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="relative bg-main-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 text-gray-50">
            <Link to={`/`}>
              <img src="./logo.svg" alt="logo" className="h-12 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
