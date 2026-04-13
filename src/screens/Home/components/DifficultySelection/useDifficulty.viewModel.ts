import { Difficulty } from "@/shared/interfaces/difficulty";
import { useEffect, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const useDifficultyViewModel = () => {
  const difficulties: Difficulty[] = ["Fácil", "Médio", "Difícil"];
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("Fácil");

  const selectIndex = difficulties.indexOf(selectedDifficulty);
  const translateX = useSharedValue(selectIndex * 100);

  useEffect(() => {
    const newIndex = difficulties.indexOf(selectedDifficulty);
    translateX.value = withSpring(newIndex * 100, {
      stiffness: 120,
      damping: 30,
    });
  }, [selectedDifficulty, difficulties, translateX]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }));

  return {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
    animatedIndicatorStyle,
  };
};
