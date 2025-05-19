import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationSuccess.css";

const RegistrationSuccess: React.FC = () => {
  const navigate = useNavigate();

useEffect(() => {
    console.log("成功畫面載入");
  }, []);

  const handleContinue = () => {
    navigate("/signup");
  };

  return (
    <div className="registration-success">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282"
        alt=""
        className="background-image"
      />
      <div className="content-wrapper">
        <div className="success-card">
          <div className="success-content">
            <div className="success-title">
              Welcome to AI Spot
            </div>
            <div className="success-message-container">
              <div className="success-message">註冊成功</div>
              <div className="success-description">
                感謝您的註冊!您的帳號已成功建立!
              </div>
            </div>
            <div className="button-container">
              <button className="continue-button" onClick={handleContinue}>
                返回登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
