import React from "react";

const Loader = () => {
  return (
    <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-2 mt-6">
      <div className="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
      <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
      <div className="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
    </div>
  );
};

export default Loader;