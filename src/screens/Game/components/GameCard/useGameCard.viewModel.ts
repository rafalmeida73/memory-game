import { useCardEntryAnimation } from "@/animations/hooks/useCardEntryAnimation";
import { useCardShakeAnimation } from "@/animations/hooks/useCardShakeAnimation";
import { useCardSuccessAnimation } from "@/animations/hooks/useCardSuccessAnimation";
import { useCardTimeoutAnimation } from "@/animations/hooks/useCardTimeoutAnimation";
import { useGameStore } from "@/shared/stores/game.store";
import { StoreCard } from "@/shared/utils/challenge";
import { useEffect, useRef } from "react";
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

  const { selectCard, status } = useGameStore();

  const entry = useCardEntryAnimation({ cardIndex: index });

  const { animatedStyle: shakeAnimatedStyle, onShake } =
    useCardShakeAnimation();

  const {
    animatedStyle: successAnimatedStyle,
    playSuccessAnimation,
    fadeOutSuccessAnimation,
  } = useCardSuccessAnimation();

  const { animatedStyle: timeoutAnimatedStyle, fallAnimation } =
    useCardTimeoutAnimation();

  const previousFlippedRef = useRef(card.isFlipped);

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

  useEffect(() => {
    if (card.isFlipped === false && previousFlippedRef.current === true) {
      onShake();
    }
    previousFlippedRef.current = card.isFlipped;
  }, [card.isFlipped, onShake, previousFlippedRef]);

  useEffect(() => {
    if (card.isMatched) {
      playSuccessAnimation();

      setTimeout(() => {
        fadeOutSuccessAnimation();
      }, 600);
    }
  }, [card.isMatched, playSuccessAnimation, fadeOutSuccessAnimation]);

  useEffect(() => {
    if (status === "timeout" && !card.isMatched) {
      const randomDelay = Math.random() * 200;
      fallAnimation(randomDelay);
    }
  }, [status, card.isMatched, fallAnimation]);

  return {
    card,
    frontAnimatedStyle,
    backAnimatedStyle,
    selectCard,
    entry,
    shakeAnimatedStyle,
    successAnimatedStyle,
    timeoutAnimatedStyle,
  };
};
