import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const chapters = [
  { id: 1, name: "新手村", unlocked: true, position: "left-1/4 top-1/4" },
  { id: 2, name: "AI森林", unlocked: false, position: "left-1/2 top-1/3" },
  { id: 3, name: "資料之海", unlocked: false, position: "left-3/4 top-1/2" },
];

const WorldMap = ({ currentChapter = 1 }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-200 to-green-100 overflow-hidden flex items-start justify-center">
      {/* 外層容器，使用 flex 讓內容左右置中 */}
      
      <div className="absolute flex flex-col items-center w-full"> {/* 內部內容左右居中 */}
        {/* 標題 */}
        <h1 className="text-3xl font-bold mb-6">Elia 的 AI 旅程</h1>

        {chapters.map((chapter) => {
          const isCurrent = chapter.id === currentChapter;
          const isUnlocked = chapter.unlocked || isCurrent;

          return (
            <motion.div
              key={chapter.id}
              className={`absolute ${chapter.position} flex flex-col items-center`}
              whileHover={{ scale: isUnlocked ? 1.1 : 1 }}
              onClick={() => {
                if (isUnlocked) navigate(`/chapter/${chapter.id}`);
              }}
            >
              {/* 小圓圈節點 */}
              <div
                className={`w-16 h-16 rounded-full border-4 ${
                  isUnlocked ? "bg-yellow-300 border-yellow-500" : "bg-gray-300 border-gray-500"
                } flex items-center justify-center cursor-pointer shadow-md`}
              >
                <span className="text-sm font-bold">{chapter.id}</span>
              </div>

              {/* 關卡名稱 */}
              <p className={`mt-2 text-center ${isUnlocked ? "text-black" : "text-gray-400"}`}>
                {chapter.name}
              </p>

              {/* 角色位置標示 */}
              {isCurrent && (
                <motion.div
                  className="mt-2 text-red-500 text-lg font-bold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  🧍‍♂️
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldMap;
