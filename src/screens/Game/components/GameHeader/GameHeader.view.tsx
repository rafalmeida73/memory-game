import { usePressAnimation } from "@/animations/hooks/usePressAnimation";
import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useGameHeaderViewModel } from "./useGameHeader.viewModel";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface GameHeaderViewProps {
  onGoBack: () => void;
}

export const GameHeaderView: FC<GameHeaderViewProps> = ({ onGoBack }) => {
  const {
    timeString,
    isCriticalTime,
    animatedStyle: animatedTimerStyle,
  } = useGameHeaderViewModel();

  const { animatedStyle, onPressIn, onPressOut } = usePressAnimation({
    scaleActive: 0.8,
    width: 48,
  });
  return (
    <View style={styles.container}>
      <AnimatedPressable
        style={[styles.backButton, animatedStyle]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onGoBack}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={32}
          color={colors.grayscale.gray100}
        />
      </AnimatedPressable>

      <Animated.View style={[styles.timerContainer, animatedTimerStyle]}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={20}
          color={isCriticalTime ? colors.feedback.danger : colors.feedback.info}
        />
        <AppText
          style={[styles.timerText, isCriticalTime && styles.timerTextCritical]}
        >
          {timeString}
        </AppText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayscale.gray500,
    borderWidth: 1,
    borderColor: colors.grayscale.gray400,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grayscale.gray500,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.grayscale.gray400,
  },
  timerText: {
    fontSize: 16,
    fontFamily: "Baloo2_700Bold",
    color: colors.feedback.info,
  },
  timerTextCritical: {
    color: colors.feedback.danger,
  },
});
