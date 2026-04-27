import { useListEntryAnimation } from "@/animations/hooks/useListEntryAnimation";
import { useSweepToDelete } from "@/animations/hooks/useSweepToDelete";
import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { FormattedMatch } from "../../useHistory.viewModel";
import { MatchHistoryCardView } from "../MatchHistoryCard/MatchHistoryCard.view";

interface Params {
  match: FormattedMatch;
  index: number;
  onDelete: () => void;
}

export const AnimatedHistoryCardView: FC<Params> = ({
  match,
  index,
  onDelete,
}) => {
  const { animatedStyle } = useListEntryAnimation({ index });
  const {
    panGesture,
    containerAnimatedStyle,
    deleteIconAnimatedStyle,
    cardAnimatedStyle,
  } = useSweepToDelete({ onDelete });
  return (
    <Animated.View style={[animatedStyle, containerAnimatedStyle]}>
      <Animated.View style={[deleteIconAnimatedStyle, styles.deleteBackground]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color={colors.semantic.error}
        />
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={cardAnimatedStyle}>
          <MatchHistoryCardView match={match} />
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  deleteBackground: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 24,
  },
});
