"use client";

import * as React from "react";

interface StartButtonProps {
  onClick?: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#E9D7BD] relative px-16 pt-2 pb-16 mb-0 max-w-full rounded-[999px] w-[516px] max-md:px-5 max-md:mb-2.5 max-md:text-4xl"
    >
      START
    </button>
  );
};
