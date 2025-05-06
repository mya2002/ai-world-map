import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // 引入 React Router
import WorldMap from "./WorldMap";  // 引入 WorldMap 元件
import './index.css';  // 確保引入 CSS

function Home() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}>
      {/* 背景圖片可以替換成你需要的圖片，記得更新圖片 URL */}

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
        {/* 半透明黑色背景，讓內容更突出 */}

        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">歡迎來到AI科普教育平台</h1>
          <button
            onClick={() => window.location.href = "/map"}  // 點擊按鈕跳轉至世界地圖
            className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg hover:bg-yellow-400"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/ai-world-map"> {/* 設置 basename，確保路由正確處理 */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* 設定首頁路由 */}
        <Route path="/map" element={<WorldMap currentChapter={1} />} /> {/* 設定世界地圖頁面路由 */}
      </Routes>
    </Router>
  );
}

export default App;

