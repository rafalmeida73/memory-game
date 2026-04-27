import { colors } from "@/constants/colors";
import { AppText } from "@/shared/components/AppText";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardGrid } from "./components/CardGrid";
import { CountdownOverlay } from "./components/CountdownOverlay";
import { DefeatModalView } from "./components/DefeatModal/DefeatModal.view";
import { ExitConfirmationModalView } from "./components/ExitConfirmationModal/ExitConfirmationModal.view";
import { GameHeaderView } from "./components/GameHeader/GameHeader.view";
import { VictoryModalView } from "./components/VictoryModal/VictoryModal.view";
import { useGameViewModel } from "./useGame.viewModel";

export const GameView = () => {
  const {
    selectedTheme,
    countdownVisible,
    handleCountdownComplete,
    isTimeoutModalVisible,
    handleTryAgain,
    handleGoHome,
    showExitModal,
    handleOpenExitModal,
    handleConfirmExit,
    handleCancelExit,
    showVictoryModal,
  } = useGameViewModel();
  return (
    <SafeAreaView style={styles.container}>
      <GameHeaderView onGoBack={handleOpenExitModal} />
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

      <DefeatModalView
        visible={isTimeoutModalVisible}
        onTryAgain={handleTryAgain}
        onGoHome={handleGoHome}
      />

      <ExitConfirmationModalView
        visible={showExitModal}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />

      <VictoryModalView
        visible={showVictoryModal}
        onPlayAgain={handleTryAgain}
        onGoHistory={handleConfirmExit}
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
    marginBottom: 32,
  },
  gameInfo: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
});
