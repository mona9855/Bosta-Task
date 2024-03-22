import React from "react";
import { ImHeart } from "react-icons/im";

const Love = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-1 bg-[#9CAFAA]  text-[#1F1717] sm:text-sm">
      <p>© 2024 Bosta. All rights reserved.</p>
      <p>
        Made with <ImHeart className="inline text-[#EF5422]"/> by <span className="text-[#EF5422] font-bold font-mona">Mona.</span>
      </p>
    </div>
  );
};

export default Love;
