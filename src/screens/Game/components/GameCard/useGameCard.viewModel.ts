import { useCardEntryAnimation } from "@/animations/hooks/useCardEntryAnimation";
import { useGameStore } from "@/shared/stores/game.store";
import { StoreCard } from "@/shared/utils/challenge";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface Props {
  card: StoreCard;
  index: number;
}

export const useGameCardViewModel = ({ card, index }: Props) => {
  const rotation = useSharedValue(card.isFlipped ? 180 : 0);

  const { selectCard } = useGameStore();

  const entry = useCardEntryAnimation({ cardIndex: index });

  const frontAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${interpolate(rotation.value, [0, 180], [0, 180])}deg` },
    ],
  }));

  const backAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${interpolate(rotation.value, [0, 180], [180, 360])}deg` },
    ],
  }));

  useEffect(() => {
    rotation.value = withSpring(card.isFlipped ? 180 : 0, { duration: 300 });
  }, [card.isFlipped, rotation]);

  return { card, frontAnimatedStyle, backAnimatedStyle, selectCard, entry };
};
