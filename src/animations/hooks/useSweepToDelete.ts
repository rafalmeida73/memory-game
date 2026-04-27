import { Dimensions } from "react-native";
import {
  runOnJS,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";

interface UseSweepToDeleteProps {
  onDelete: () => void;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const DELETE_THRESHOLD = -100;
const VELOCITY_THRESHOLD = -500;

export const useSweepToDelete = ({ onDelete }: UseSweepToDeleteProps) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(60);
  const isDeleting = useSharedValue(false);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    height: isDeleting.value ? itemHeight.value : "auto",
    overflow: isDeleting.value ? "hidden" : "visible",
    marginBottom: itemHeight.value === 0 ? 0 : 16,
    opacity: interpolate(itemHeight.value, [0, 30], [0, 1]),
  }));

  const deleteIconAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [-80, -40, 0], [1, 0.5, 0]),
  }));

  const cardAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate((event) => {
      translateX.value = Math.min(0, event.translationX);
    })
    .onEnd((event) => {
      const shouldDelete =
        translateX.value <= DELETE_THRESHOLD ||
        event.velocityX <= VELOCITY_THRESHOLD;

      if (shouldDelete) {
        translateX.value = withTiming(-SCREEN_WIDTH, { duration: 180 }, () => {
          runOnJS(onDelete)();
        });
        return;
      }

      translateX.value = withTiming(0, { duration: 180 });
    });

  return {
    panGesture,
    containerAnimatedStyle,
    deleteIconAnimatedStyle,
    cardAnimatedStyle,
  };
};
