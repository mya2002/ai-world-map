import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const chapters = [
  { name: "第一章   靜語山丘", unlocked: true, className: "left-1/5 top-[10%]" },
  { name: "第二章   靜湖之鏡", unlocked: false, className: "left-1/5 top-[25%]" },
  { name: "第三章   破碎的教室", unlocked: false, className: "left-1/5 top-[40%]" },
  { name: "第四章   草原上的比賽", unlocked: false, className: "left-1/5 top-[55%]" },
  { name: "第五章   黑盒之門", unlocked: false, className: "left-1/5 top-[70%]" },
  { name: "第六章   鏡城遺跡", unlocked: false, className: "left-4/5 top-[10%]" },
  { name: "第七章   生成谷", unlocked: false, className: "left-4/5 top-[25%]" },
  { name: "第八章   迷宮的記憶", unlocked: false, className: "left-4/5 top-[40%]" },
  { name: "第九章   斷章的書庫", unlocked: false, className: "left-4/5 top-[55%]" },
  { name: "第十章   最後一頁", unlocked: false, className: "left-4/5 top-[70%]" },
];

const WorldMap = ({ currentChapter = 1 }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-200 to-green-100 overflow-hidden flex items-start justify-center">
      {/* 外層容器，使用 flex 讓內容左右置中 */}

      <div className="absolute flex flex-col items-center w-full"> {/* 內部內容左右居中 */}
        {/* 標題 */}
        <h1 className="text-3xl font-bold mb-6">歡迎來到新手村</h1>

        {chapters.map((chapter, index) => {
          const isCurrent = index + 1 === currentChapter;
          const isUnlocked = chapter.unlocked || isCurrent;

          return (
            <motion.div
              key={index}
              className={`absolute ${chapter.className} flex flex-col items-center`}
              whileHover={{ scale: isUnlocked ? 1.1 : 1 }}
              onClick={() => {
                if (isUnlocked) navigate(`/chapter/${index + 1}`);
              }}
            >
              {/* 小圓圈節點  不顯示數字 */}
              <div
                className={`w-16 h-16 rounded-full border-4 ${isUnlocked ? "bg-yellow-300 border-yellow-500" : "bg-gray-300 border-gray-500"
                  } flex items-center justify-center cursor-pointer shadow-md`}
              >
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
