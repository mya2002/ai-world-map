"use client";

import * as React from "react";
import startIcon from "../assets/images/startIcon.png";

interface StartButtonProps {
  onClick?: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
     <button
      onClick={onClick}
      className="relative w-[516px] h-[120px] max-w-full rounded-[30px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${startIcon})`, // 這裡用背景圖的方式填滿整個按鈕
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-blue-700">
        
      </span> */}
    </button>
  );
};
