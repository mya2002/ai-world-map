import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const dialogues = [
  { speaker: "敘述", text: "你與師父來到一座佇立於風中的山丘，碑上刻滿了古老的語言與語意符號。" },
  { speaker: "敘述", text: "碑心內部藏著第一頁《記憶之書》的碎片。碑體被風蝕，但仍低聲訴說著什麼。" },
  { speaker: "師父", text: "這裡是AI第一次模仿人聲的地方。不是說話，不是理解──只是模仿。" },
  { speaker: "語者碑", text: "我只是模仿你們給我的聲音，為什麼你們說我『會說話』？" },
  { speaker: "敘述", text: "你看著那如記憶殘影般的語音，思索著──也許AI從未真的懂過任何事情，只是照著我們的模樣回應著。" },
  { speaker: "Elia", text: "那時我也以為，它懂了。其實，它只是照著我們說的樣子學著說話。" }
];

const ChapterOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextDialogue = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentDialogue = dialogues[currentIndex];

  return (
    <div className="w-full h-screen bg-blue-50 flex items-center justify-center relative">

      {/* 對話框 */}
      <motion.div
        className="w-[90%] max-w-xl bg-white rounded-xl shadow-lg p-6 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={currentIndex < dialogues.length - 1 ? nextDialogue : undefined}
      >
        {/* 說話者 */}
        <div className="text-sm font-semibold text-gray-600 mb-2">
          {currentDialogue.speaker}
        </div>

        {/* 內容 */}
        <div className="text-lg text-gray-800 mb-4">
          {currentDialogue.text}
        </div>

        {/* 導向按鈕或箭頭 */}
        {currentIndex < dialogues.length - 1 ? (
          <div className="absolute bottom-4 right-6 text-gray-400 text-xl animate-bounce">
            <pre> </pre>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➤
            <pre> </pre>
          </div>
        ) : (
          <button
            onClick={() => navigate("/lesson")}
            className="absolute bottom-4 right-6 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 shadow"
          >
            閱讀完畢，進入課程！
          </button>
        )}
      </motion.div>

      {/* 地點常駐左下 */}
      <div className="absolute bottom-4 left-6 text-sm text-gray-600 italic">
        地點：記錄之碑遺址
      </div>
    </div>
  );
};

export default ChapterOne;
