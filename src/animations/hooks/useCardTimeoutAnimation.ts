import { useCallback } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { ANIMATION_TIMINGS } from "../config/animation.config";

export const useCardTimeoutAnimation = () => {
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);

  const fallAnimation = useCallback(
    (delay: number) => {
      const config = ANIMATION_TIMINGS.fall;
      const randomRotation = (Math.random() - 0.5) * 60;

      translateY.value = withDelay(
        delay,
        withTiming(800, {
          duration: config.duration,
          easing: Easing.in(Easing.cubic),
        }),
      );

      rotation.value = withDelay(
        delay,
        withTiming(randomRotation, {
          duration: config.rotation,
          easing: Easing.out(Easing.ease),
        }),
      );

      opacity.value = withDelay(
        delay + config.opacityDelay,
        withTiming(0, { duration: config.opacityDuration }),
      );
    },
    [translateY, rotation, opacity],
  );

  const resetAnimation = useCallback(() => {
    translateY.value = 0;
    rotation.value = 0;
    opacity.value = 1;
  }, [translateY, rotation, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { rotate: `${rotation.value}deg` },
    ],
    opacity: opacity.value,
  }));

  return { animatedStyle, fallAnimation, resetAnimation };
};
