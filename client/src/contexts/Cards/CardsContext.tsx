import { createContext, Dispatch, useContext } from "react";
import { Card } from "../../types/Card";

interface CardsContextInterface {
  cards: Card[];
  shuffleCards: Dispatch<void>;
  flipCard: Dispatch<number>;
  matchCardsAndCloseUnmatched: Dispatch<number>;
}

export const CardsContext = createContext<CardsContextInterface | null>(null);

export const useCards = () => {
  const context = useContext(CardsContext);

  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }

  return context;
};
