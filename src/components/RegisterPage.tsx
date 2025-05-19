import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth"; // ✅ 引入 Firebase 方法
import { auth } from "../firebase"; // ✅ 匯入 auth 實體（注意路徑）

import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState(""); // 目前沒使用，可未來串 firestore
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setMessage("請輸入有效的 Email 格式");
    return;
  }

  if (password.length < 6) {
    setMessage("密碼至少需要 6 個字元");
    return;
  }

    try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // 發送驗證信
  await sendEmailVerification(user);

  setMessage("註冊成功，請至信箱收信驗證後再登入！");
  navigate("/registration-success");
} catch (error: any) {
  setMessage(error.message || "註冊失敗");
}
};


  return (
    <div className="register-page">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282"
        alt=""
        className="background-image"
      />
      <div className="content-wrapper">
        <div className="register-card">
          <h2 className="register-title">註冊帳號</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">使用者名稱</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-[#D9D9D9]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded bg-[#D9D9D9]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">密碼</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded bg-[#D9D9D9]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#BD8383] text-white py-2 rounded-lg font-semibold"
            >
              註冊
            </button>
            {message && <p className="text-sm text-red-600 mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
