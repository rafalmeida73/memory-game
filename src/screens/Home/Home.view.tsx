import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChallengesList } from "./components/ChallengesList ";
import { DifficultySelectionView } from "./components/DifficultySelection/DiffcultySelecion.view";
import { HomeHeader } from "./components/HomeHeader";
import { useHomeViewModel } from "./useHome.viewModel";

export const HomeView = () => {
  const viewModel = useHomeViewModel();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader />
        <DifficultySelectionView {...viewModel} />
        <ChallengesList
          handleSelectChallenge={viewModel.handleSelectChallenge}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
