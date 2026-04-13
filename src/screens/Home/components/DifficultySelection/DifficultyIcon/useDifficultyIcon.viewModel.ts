import { Props } from "./DifficultyIcon.view";

export const useDifficultyIconViewModel = ({
  difficulty,
  color,
  isSelected,
  inactiveColor,
}: Props) => {
  const barHeights = [6, 10, 14];
  const barCount = difficulty === "Fácil" ? 1 : difficulty === "Médio" ? 2 : 3;

  const getBarStyle = (index: number) => ({
    height: barHeights[index - 1],
    backgroundColor: index <= barCount && isSelected ? color : inactiveColor,
  });

  return { getBarStyle };
};
