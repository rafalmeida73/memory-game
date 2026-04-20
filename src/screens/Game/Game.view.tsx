import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardGrid } from "./components/CardGrid";
import { CountdownOverlay } from "./components/CountdownOverlay";
import { GameHeaderView } from "./components/GameHeader/GameHeader.view";
import { useGameViewModel } from "./useGame.viewModel";

export const GameView = () => {
  const { selectedTheme, countdownVisible, handleCountdownComplete } =
    useGameViewModel();
  return (
    <SafeAreaView style={styles.container}>
      <GameHeaderView />
      <View style={styles.gameInfo}>
        <AppText style={styles.title}>{selectedTheme?.title}</AppText>
        <AppText style={styles.subtitle}>
          Encontre todos os pares dentro do tempo!
        </AppText>

        <CardGrid />
      </View>
      <CountdownOverlay
        countdownVisible={countdownVisible}
        onComplete={handleCountdownComplete}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
  title: {
    fontSize: 20,
    color: colors.grayscale.gray100,
    fontFamily: "Baloo2_800ExtraBold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
  gameInfo: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
});
