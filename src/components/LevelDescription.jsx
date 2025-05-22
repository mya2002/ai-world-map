import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/levelDescription.css";

const Star = ({ id, position }) => (
  <div id={id} className={`star-box ${position}`}>
    <div>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="star-icon"
      >
        <path
          d="M9.99984 2.16663L12.5748 7.38329L18.3332 8.22496L14.1665 12.2833L15.1498 18.0166L9.99984 15.3083L4.84984 18.0166L5.83317 12.2833L1.6665 8.22496L7.42484 7.38329L9.99984 2.16663Z"
          stroke="#1E1C1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const NavigationIcon = ({ icon }) => (
  <div className="nav-icon-wrapper">{icon}</div>
);

const LevelDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="level-description-container">
      <div className="level-background">
        <div className="stars-container">
          <Star id="star1" position="right-[15%] top-[35%]" />
          <Star id="star2" position="left-[12%] top-[55%]" />
          <Star id="star3" position="left-[18%] top-[42%]" />
          <Star id="star4" position="left-[60%] bottom-[8%]" />
          <Star id="star5" position="left-[65%] top-[65%]" />
          <Star id="star6" position="right-[25%] top-[52%]" />
          <Star id="star7" position="left-[68%] top-[42%]" />
          <Star id="star8" position="right-[18%] top-[25%]" />
          <Star id="star9" position="left-[75%] bottom-[18%]" />
          <Star id="star10" position="left-[5%] bottom-[25%]" />
        </div>

        <div className="level-card-container">
          <div className="level-card">
            <div className="level-image" />
            <div className="level-content">
              <div className="level-text">
                <span>關卡: 1-?</span>
                <br />
                <br />
                <span>
                  關卡描述:
                  這裡會放上每個關卡的簡短說明，讓玩家可以更輕鬆的瞭解這關的重點知識和故事內容
                </span>
              </div>
              <div className="arrow-container">
                <svg
                  width="89"
                  height="92"
                  viewBox="0 0 89 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-icon"
                >
                  <path
                    d="M44.4998 61.3333L59.3332 46M59.3332 46L44.4998 30.6666M59.3332 46H29.6665M81.5832 46C81.5832 67.1709 64.9804 84.3333 44.4998 84.3333C24.0193 84.3333 7.4165 67.1709 7.4165 46C7.4165 24.829 24.0193 7.66663 44.4998 7.66663C64.9804 7.66663 81.5832 24.829 81.5832 46Z"
                    stroke="#1E1E1E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bottom-navigation">
        <NavigationIcon
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 36L2 44V12L16 4M16 36L32 44M16 36V4M32 44L46 36V4L32 12M32 44V12M32 12L16 4"
                stroke="#F3F3F3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavigationIcon
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.14 9.86011C41.8894 13.6107 43.9957 18.6968 43.9957 24.0001C43.9957 29.3034 41.8894 34.3896 38.14 38.1401M31.08 16.9201C32.9547 18.7954 34.0079 21.3385 34.0079 23.9901C34.0079 26.6417 32.9547 29.1848 31.08 31.0601M22 10.0001L12 18.0001H4V30.0001H12L22 38.0001V10.0001Z"
                stroke="#F3F3F3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavigationIcon
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H10L15.36 28.78C15.5429 29.7008 16.0438 30.5279 16.7751 31.1166C17.5064 31.7053 18.4214 32.018 19.36 32H38.8C39.7386 32.018 40.6536 31.7053 41.3849 31.1166C42.1162 30.5279 42.6171 29.7008 42.8 28.78L46 12H12M20 42C20 43.1046 19.1046 44 18 44C16.8954 44 16 43.1046 16 42C16 40.8954 16.8954 40 18 40C19.1046 40 20 40.8954 20 42ZM42 42C42 43.1046 41.1046 44 40 44C38.8954 44 38 43.1046 38 42C38 40.8954 38.8954 40 40 40C41.1046 40 42 40.8954 42 42Z"
                stroke="#F3F3F3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavigationIcon
          icon={
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.54 13.92L24 24.0201L41.46 13.92M24 44.16V24M42 32V16C41.9993 15.2986 41.8141 14.6097 41.4631 14.0024C41.112 13.3951 40.6075 12.8908 40 12.54L26 4.54005C25.3919 4.18898 24.7021 4.00415 24 4.00415C23.2979 4.00415 22.6081 4.18898 22 4.54005L8 12.54C7.39253 12.8908 6.88796 13.3951 6.53692 14.0024C6.18589 14.6097 6.00072 15.2986 6 16V32C6.00072 32.7015 6.18589 33.3904 6.53692 33.9977C6.88796 34.605 7.39253 35.1093 8 35.46L22 43.46C22.6081 43.8111 23.2979 43.9959 24 43.9959C24.7021 43.9959 25.3919 43.8111 26 43.46L40 35.46C40.6075 35.1093 41.112 34.605 41.4631 33.9977C41.8141 33.3904 41.9993 32.7015 42 32Z"
                stroke="#F3F3F3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </nav>
    </div>
  );
};

export default LevelDescription;
