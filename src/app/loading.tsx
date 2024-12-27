// components/Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-t-[#FF4F5A] border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
