import { useGameStore } from "@/shared/stores/game.store";

export const useGameHeaderViewModel = () => {
  const { timeRemaining } = useGameStore();

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const isCriticalTime = timeRemaining <= 10;

  return {
    timeString,
    isCriticalTime,
  };
};
