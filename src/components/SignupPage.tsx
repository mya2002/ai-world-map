import React from "react";
import { LoginForm } from "./LoginForm";
import backgroundImg from '../assets/images/background.jpg';


const SignupPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white relative">
      <img
        src = {backgroundImg}
        //src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282"
        alt=""
        className="w-full h-full absolute top-0 left-0 object-cover"
      />
      <div className="flex justify-center items-center min-h-screen relative z-10 px-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignupPage;
