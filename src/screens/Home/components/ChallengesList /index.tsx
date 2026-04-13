import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { challengeTheme } from "@/shared/utils/challenge";
import { StyleSheet, View } from "react-native";
import { ChallengeCard } from "./components/ChallengeCard";

export const ChallengesList = () => {
  return (
    <View>
      <AppText style={styles.sectionTitle}>Desafios disponíveis</AppText>
      {challengeTheme.map((challenge) => (
        <ChallengeCard {...challenge} key={`challenge-id-${challenge.id}`} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
    marginBottom: 16,
  },
});
