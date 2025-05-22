import React from "react";
import { useNavigate } from "react-router-dom";
import { useLevelNavigation } from "../hooks/useLevelNavigation";
import "../styles/levelMap.css";

const LevelSelectionMap = () => {
  const navigate = useNavigate(); // 只要一次
  const { navigateToLevel } = useLevelNavigation(); // 假設你會用這個來導向關卡頁面

  const handleLevelSelect = (level) => {
    if (level === "1-1") {
      navigate("/level-description"); // 或做更多自訂邏輯
    } else {
      navigateToLevel(level); // 使用 hook 中的導頁邏輯
    }
  };

  const levelButtons = [
    {
      id: 1,
      url: "https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/24f88520d14ede3bf3e47508d631d82394f5e06c?placeholderIfAbsent=true",
      level: "1-1",
    },
    {
      id: 2,
      url: "https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/0d5cc214f226d1b54c41d67f001e46eadb141dda?placeholderIfAbsent=true",
      level: "1-2",
    },
    {
      id: 3,
      url: "https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/35508932bf43ea727c504c914172c9389cfb5f33?placeholderIfAbsent=true",
      level: "1-3",
    },
    {
      id: 4,
      url: "https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/545733580ac5bf6a5d25f7f9f71ecc05e581bcc6?placeholderIfAbsent=true",
      level: "1-4",
    },
  ];

  return (
    <div className="level-selection-page">
      <div className="level-selection-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/bb1477f3e2933a3421f45f07ed55187309e3c422?placeholderIfAbsent=true"
          alt="Background"
          className="background-image"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cd998992b18f4e729a861e5e2f5f957c/e44626649360c3b2cd7e73be1beef0387bb3d3eb?placeholderIfAbsent=true"
          alt="Map Header"
          className="map-header-image"
        />
        <div className="level-buttons-container">
          {levelButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleLevelSelect(button.level)}
              className="level-button"
              aria-label={`Select Level ${button.level}`}
            >
              <img
                src={button.url}
                alt={`Level ${button.level}`}
                className="level-button-image"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelSelectionMap;
