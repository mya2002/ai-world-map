import React, { useState } from "react";
import { useUserProgress } from "../hooks/useUserProgress";
import "../styles/animations.css";

const WorldMap = () => {
  const { progress, loading, error, updateProgress } = useUserProgress();
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = async (region) => {
    if (!progress || progress[region] === false) {
      return; // Region is locked
    }

    setSelectedRegion(region);
    // Add navigation logic here
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Error loading map: {error}
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/398495613748854ba09709ddbde3be3e2aa7a1e2?placeholderIfAbsent=true"
        alt="World Map Background"
        className="w-full h-auto aspect-[1.41] object-contain object-center"
        role="presentation"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Deep Learning Island */}
        <button
          onClick={() => handleRegionClick("deepLearning")}
          className={`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${
            !progress || progress.deepLearning === false ? "region-locked" : ""
          } ${selectedRegion === "deepLearning" ? "region-active" : ""} ${
            progress?.deepLearning === "completed" ? "region-completed" : ""
          }`}
          disabled={!progress || progress.deepLearning === false}
          aria-label="Deep Learning Island"
        >
          深度學習島
        </button>

        {/* Other Topics Island */}
        <button
          onClick={() => handleRegionClick("otherTopics")}
          className={`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${
            !progress || progress.otherTopics === false ? "region-locked" : ""
          } ${selectedRegion === "otherTopics" ? "region-active" : ""} ${
            progress?.otherTopics === "completed" ? "region-completed" : ""
          }`}
          disabled={!progress || progress.otherTopics === false}
          aria-label="Other Topics Island"
        >
          其他主題島
        </button>

        {/* Newbie Village */}
        <button
          onClick={() => handleRegionClick("newbie")}
          className={`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${
            !progress || progress.newbie === false ? "region-locked" : ""
          } ${selectedRegion === "newbie" ? "region-active" : ""} ${
            progress?.newbie === "completed" ? "region-completed" : ""
          }`}
          disabled={!progress || progress.newbie === false}
          aria-label="Newbie Village"
        >
          新手村
        </button>

        {/* Warehouse */}
        <button
          onClick={() => handleRegionClick("warehouse")}
          className={`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button ${
            !progress || progress.warehouse === false ? "region-locked" : ""
          } ${selectedRegion === "warehouse" ? "region-active" : ""} ${
            progress?.warehouse === "completed" ? "region-completed" : ""
          }`}
          disabled={!progress || progress.warehouse === false}
          aria-label="Warehouse"
        >
          倉庫
        </button>
      </div>
    </div>
  );
};

export default WorldMap;
