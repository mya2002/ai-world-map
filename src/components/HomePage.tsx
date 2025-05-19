"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { StartButton } from "./StartButton";


const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = React.useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <main className="overflow-hidden text-7xl text-center text-white whitespace-nowrap bg-white max-md:text-4xl">
      <section className="flex relative flex-col items-center px-20 pb-40 w-full min-h-[1024px] pt-[732px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9478b62be22ea089423fe6dc8fb0dc4c84a468?placeholderIfAbsent=true&apiKey=cd998992b18f4e729a861e5e2f5f957c"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <StartButton onClick={handleStart} />
      </section>
    </main>
  );
};

export default HomePage;
