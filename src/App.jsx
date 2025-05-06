import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";  // 使用 HashRouter
import WorldMap from "./WorldMap";  // 引入 WorldMap 元件
import ChapterOne from "./ChapterOne";  // 引入 ChapterOne 元件
import './index.css';  // 確保引入 CSS

function Home() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">歡迎來到AI科普教育平台</h1>
          <button
            onClick={() => window.location.href = "#/map"}  // 使用 # 來跳轉路由
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
    <Router>  {/* 刪除 basename */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<WorldMap />} />
        <Route path="/chapter/1" element={<ChapterOne />} />
      </Routes>
    </Router>
  );
}

export default App;
