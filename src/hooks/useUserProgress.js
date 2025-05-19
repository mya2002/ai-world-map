import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const useUserProgress = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("目前使用者:", user);
      if (!user) {
        setProgress({ newbie: true });
        setLoading(false);
        return;
      }

      try {
        const progressRef = doc(db, "userProgress", user.uid);
        const progressSnap = await getDoc(progressRef);

        if (progressSnap.exists()) {
          setProgress(progressSnap.data());
        } else {
          const initialProgress = {
            newbie: true,
            deepLearning: false,
            otherTopics: false,
            warehouse: false,
            completedLessons: [],
          };
          await setDoc(progressRef, initialProgress);
          setProgress(initialProgress);
        }
      } catch (err) {
        if (err.message.includes("offline")) {
          setError("請確認網路連線是否正常。");
        } else {
          setError(err.message);
        }
        console.error("Error fetching progress:", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateProgress = async (region, status) => {
    try {
      const user = auth.currentUser;
      if (!user) return false;

      const progressRef = doc(db, "userProgress", user.uid);
      await setDoc(
        progressRef,
        {
          ...progress,
          [region]: status,
        },
        { merge: true }
      );

      setProgress((prev) => ({
        ...prev,
        [region]: status,
      }));

      return true;
    } catch (err) {
      setError(err?.message || "發生未知錯誤");
      return false;
    }
  };

  return { progress, loading, error, updateProgress };
};
