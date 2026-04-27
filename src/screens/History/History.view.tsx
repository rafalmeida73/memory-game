import { colors } from "@/constants/colors";
import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedHistoryCardView } from "./components/AnimatedHistoryCard/AnimatedHistoryCard.view";
import { ListHeaderView } from "./components/ListHeader/ListHeader.view";
import { useHistoryViewModel } from "./useHistory.viewModel";

export const HistoryView: FC<ReturnType<typeof useHistoryViewModel>> = ({
  matches,
  averageTime,
  totalGames,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={matches}
          renderItem={({ item, index }) => (
            <AnimatedHistoryCardView match={item} index={index} />
          )}
          keyExtractor={({ id }) => `score-${id}`}
          style={{ width: "100%" }}
          ListHeaderComponent={() => (
            <ListHeaderView totalGames={totalGames} averageTime={averageTime} />
          )}
          contentContainerStyle={{ paddingHorizontal: 24 }}
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
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
