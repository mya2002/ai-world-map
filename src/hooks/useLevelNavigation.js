import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useLevelNavigation = () => {
  const navigate = useNavigate();

  const navigateToLevel = useCallback(
    (levelId) => {
      // Navigate to the specific level route
      navigate(`/level/${levelId}`);
    },
    [navigate],
  );

  return {
    navigateToLevel,
  };
};
