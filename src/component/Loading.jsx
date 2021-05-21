import React from "react";
import loadingIcon from "../images/loading.svg";

export const Loading = () => {
  return (
    <div className="z-10 h-screen w-screen bg-gray-500 inset-0 absolute bg-opacity-75 flex justify-center items-center">
      <img src={loadingIcon} alt="loading icon" className="animate-spin h-28" />
    </div>
  );
};
