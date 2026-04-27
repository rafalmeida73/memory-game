import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { Difficulty } from "@/shared/interfaces/difficulty";
import { getDifficultyColor } from "@/shared/utils/difficulty";
import { Pressable, StyleSheet, View } from "react-native";
import { DifficultyIconView } from "../DifficultyIcon/DifficultyIcon.view";

interface Props {
  index: number;
  difficulty: Difficulty;
  isSelected: boolean;
  setSelectedDifficulty: (difficulty: Difficulty) => void;
}

export const DifficultyTab = ({
  index,
  difficulty,
  isSelected,
  setSelectedDifficulty,
}: Props) => {
  return (
    <Pressable
      style={styles.difficultyTab}
      key={`difficulty-key-${difficulty}`}
      onPress={() => setSelectedDifficulty(difficulty)}
    >
      <View style={styles.difficultyBadge}>
        <DifficultyIconView
          color={getDifficultyColor(difficulty)}
          difficulty={difficulty}
          inactiveColor={colors.grayscale.gray200}
          isSelected={isSelected}
        />
        <AppText
          style={{
            ...styles.difficultyLabel,
            fontFamily: isSelected
              ? "Baloo2_800ExtraBold"
              : "Baloo2_400Regular",
            color: isSelected
              ? colors.grayscale.white
              : colors.grayscale.gray200,
          }}
        >
          {difficulty}
        </AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  difficultyLabel: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
  difficultyTab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 100,
    gap: 12,
    zIndex: 1,
  },
  difficultyBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 8,
    borderRadius: "50%",
  },
});
