import { Dispatch } from "react";

import { Card } from "../../entities";
import { ContextValueType } from "../common";

export interface CardsContextInterface {
  cards: Card[];
  shuffleCards: Dispatch<void>;
  flipCard: Dispatch<number>;
  matchCardsAndCloseUnmatched: Dispatch<number>;
  isVictory: () => boolean;
}

export type CardsContextType = ContextValueType<CardsContextInterface>;
