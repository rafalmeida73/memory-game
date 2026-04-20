import { StoreCard } from "@/shared/utils/challenge";
import { FC } from "react";
import { GameCardView } from "./GameCard.view";
import { useGameCardViewModel } from "./useGameCard.viewModel";

interface Params {
  card: StoreCard;
  index: number;
}

export const GameCard: FC<Params> = ({ card, index }) => {
  const viewModel = useGameCardViewModel({ card, index });
  return <GameCardView {...viewModel} />;
};
