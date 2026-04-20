import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { challengeTheme } from "@/shared/utils/challenge";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ChallengeCard } from "./components/ChallengeCard";

interface ChallengesListProps {
  handleSelectChallenge: (themeId: string) => void;
}

export const ChallengesList: FC<ChallengesListProps> = ({
  handleSelectChallenge,
}) => {
  return (
    <View>
      <AppText style={styles.sectionTitle}>Desafios disponíveis</AppText>
      {challengeTheme.map((challenge) => (
        <ChallengeCard
          handleSelectChallenge={handleSelectChallenge}
          {...challenge}
          key={`challenge-id-${challenge.id}`}
        />
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
