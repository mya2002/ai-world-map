import React from "react";

export const LoginForm: React.FC = () => {
  return (
    <div className="w-[522px] bg-[#F9E5C8] rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center md:w-[450px] sm:w-full">
      <div className="text-[#BD8383] text-center font-metrophobic text-xl py-[18px] px-[10px] mb-4">
        Log in AI Education Platform
      </div>

      <div className="flex w-full max-w-[400px] p-2 px-4 justify-center items-center gap-3 rounded-lg border border-[#E0E0E0] bg-[#FFF6E9] mb-4">
        <div className="text-[#BD8383] text-center font-metrophobic text-xl">
          還不是會員？
        </div>
        <button className="text-[#BD8383] text-center font-metrophobic text-xl py-[6px] px-3 rounded-lg bg-[rgba(219,192,102,0.40)]">
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
        <button className="w-full px-8 py-3 rounded-lg bg-[#FFF6E9] text-[#333] font-metrophobic text-xl mb-4 cursor-pointer">
          Sign up with Google
        </button>
        <button className="w-[159px] mx-auto px-8 py-3 rounded-lg bg-[#D9D9D9] text-[#333] font-metrophobic text-xl cursor-pointer block">
          LOG IN
        </button>
      </div>
    </div>
  );
};
