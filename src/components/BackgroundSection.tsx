"use client";

import * as React from "react";

interface BackgroundSectionProps {
  children: React.ReactNode;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  children,
}) => {
  return (
    <section className="flex relative flex-col items-center px-20 pb-40 w-full min-h-[1024px] pt-[732px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd9478b62be22ea089423fe6dc8fb0dc4c84a468?placeholderIfAbsent=true&apiKey=cd998992b18f4e729a861e5e2f5f957c"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      {children}
    </section>
  );
};
