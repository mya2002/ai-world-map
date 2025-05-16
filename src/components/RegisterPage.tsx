import React,{ useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
     const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
       // 註冊成功後跳轉到註冊成功頁面
      navigate("/register-success");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "註冊失敗");
    }
  };

  return (
    <div className="register-page">
      {/* 背景圖層 */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282"
        alt=""
        className="background-image"
      />

      {/* 表單內容區塊 */}
      <div className="content-wrapper">
        <div className="register-card">
          <h2 className="register-title">註冊帳號</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                使用者名稱
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded bg-[#D9D9D9]"
              value={username}
  onChange={(e) => setUsername(e.target.value)}

              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded bg-[#D9D9D9]"
             value={email}
  onChange={(e) => setEmail(e.target.value)}

             />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                密碼
              </label>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
