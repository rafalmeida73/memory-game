import { Difficulty } from "@/shared/interfaces/difficulty";
import { useState } from "react";

export const useDifficultyViewModel = () => {
  const difficulties: Difficulty[] = ["Fácil", "Médio", "Difícil"];
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("Fácil");

  return {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
  };
};
