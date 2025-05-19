import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth , provider } from "../firebase";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // 新增
  const [message, setMessage] = useState("");

  const handleRegisterClick = () => {
    navigate("/register"); // 點擊註冊跳轉頁面
  };

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider); // ✅ Google 登入
    const user = result.user;

    // if (!user.emailVerified) {
    //   alert("請先完成信箱驗證再登入");
    //  return;
    // }
    console.log("登入成功", user);
    
    navigate("/world-map"); // 登入成功
  } catch (error) {
    console.error("Google 登入失敗:", error);
    alert("Google 登入失敗：" + (error as any).message);
  }
};

  return (
    <div className="w-[522px] bg-[#F9E5C8] rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center md:w-[450px] sm:w-full">
      <div className="text-[#BD8383] text-center font-metrophobic text-xl py-[18px] px-[10px] mb-4">
        Log in AI Education Platform
      </div>

      <div className="flex w-full max-w-[400px] p-2 px-4 justify-center items-center gap-3 rounded-lg border border-[#E0E0E0] bg-[#FFF6E9] mb-4">
        <div className="text-[#BD8383] text-center font-metrophobic text-xl">
          還不是會員？
        </div>
        <button
        onClick={handleRegisterClick} 
        className="text-[#BD8383] text-center font-metrophobic text-xl py-[6px] px-3 rounded-lg bg-[rgba(219,192,102,0.40)]">
          註冊
        </button>
      </div>

      <div className="w-full max-w-[400px] space-y-4">
        <div className="space-y-1.5">
          <div className="text-[#333] font-metrophobic text-sm">帳號</div>
          <input type="text" className="w-full h-[30px] bg-[#D9D9D9] rounded" />
        </div>
        <div className="space-y-1.5">
          <div className="text-[#333] font-metrophobic text-sm">密碼</div>
          <input
            type="password"
            className="w-full h-[30px] bg-[#D9D9D9] rounded"
          />
        </div>
      </div>

      <div className="w-full max-w-[380px] mt-6">
        <button className="w-full px-8 py-3 rounded-lg bg-[#FFF6E9] text-[#333] font-metrophobic text-xl mb-4 cursor-pointer"
        onClick={handleGoogleLogin}
        >
          Sign up with Google
        </button>
        <button className="w-[159px] mx-auto px-8 py-3 rounded-lg bg-[#D9D9D9] text-[#333] font-metrophobic text-xl cursor-pointer block">
          LOG IN
        </button>
      </div>
    </div>
  );
};
