import { useNumberAnimation } from "@/animations/hooks/useNumberAnimation";
import { Difficulty } from "@/shared/interfaces/difficulty";
import { difficultyConfigs } from "@/shared/utils/challenge";
import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { DifficultySelectionProps } from "./DiffcultySelection.view";

const difficulties: Difficulty[] = ["Fácil", "Médio", "Difícil"];

export const useDifficultyViewModel = ({
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultySelectionProps) => {
  const difficultyConfig = difficultyConfigs[selectedDifficulty];

  const { animatedStyle: timeAnimatedStyle } = useNumberAnimation(
    difficultyConfig.estimatedTime,
  );

  const selectedIndex = difficulties.indexOf(selectedDifficulty);
  const translateX = useSharedValue(selectedIndex * 100);

  useEffect(() => {
    const newIndex = difficulties.indexOf(selectedDifficulty);
    translateX.value = withSpring(newIndex * 100, {
      damping: 50,
      stiffness: 220,
    });
  }, [selectedDifficulty, translateX]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }));

  return {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
    animatedIndicatorStyle,
    timeAnimatedStyle,
    difficultyConfig,
  };
};
