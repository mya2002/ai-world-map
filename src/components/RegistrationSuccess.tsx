import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationSuccess.css";

const RegistrationSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
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
              Welcome to AI Education Platform
            </div>
            <div className="success-message-container">
              <div className="success-message">Registration Successful!</div>
              <div className="success-description">
                Thank you for joining our platform. Your account has been
                created successfully.
              </div>
            </div>
            <div className="button-container">
              <button className="continue-button" onClick={handleContinue}>
                Continue to Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
