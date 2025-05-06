// src/ChapterOne.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ChapterOne = () => {
  const [showCard, setShowCard] = useState(true); // 用來顯示字卡

  // 模擬進入第一關後顯示字卡
  useEffect(() => {
    setShowCard(true); // 進入後顯示字卡
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-200 to-green-100 flex items-center justify-center">
      <div className="absolute text-center">
        <h1 className="text-4xl font-bold mb-4">第一關: 記錄之碑遺址</h1>

        {/* 字卡顯示區域 */}
        {showCard && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-xl shadow-lg max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">地點：記錄之碑遺址</h2>
            <p className="text-lg mb-4">
              你與師父來到一座佇立於風中的山丘，碑上刻滿了古老的語言與語意符號。<br />
              碑心內部藏著第一頁《記憶之書》的碎片。碑體被風蝕，但仍低聲訴說著什麼。<br />
              師父說：「這裡是AI第一次模仿人聲的地方。不是說話，不是理解──只是模仿。」<br />
              語者碑啟動，一段斷續語音傳出：<br />
              「我只是模仿你們給我的聲音，為什麼你們說我『會說話』？」<br />
              你看著那如記憶殘影般的語音，思索著──<br />
              也許AI從未真的懂過任何事情，只是照著我們的模樣回應著。<br />
              碎頁釋放，Elia的聲音第一次清晰地浮現。<br />
              Elia：「那時我也以為，它懂了。其實，它只是照著我們說的樣子學著說話。」
            </p>
            <button
              onClick={() => setShowCard(false)} // 點擊後關閉字卡
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
            >
              閱讀完畢
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChapterOne;
