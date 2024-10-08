import { useState, ReactNode, FC, Dispatch } from "react";
import { CardsContext } from "./CardsContext";
import { Card } from "../../types/Card";
import characters from "../../data/characters";

interface CardsProviderProps {
  children: ReactNode;
}

export const CardsProvider: FC<CardsProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const shuffleCards: Dispatch<void> = () => {
    const cards: Card[] = [...characters, ...characters]
      .sort(() => Math.random() - 0.5)
      .map((character, index) => {
        return { cardId: index, isOpen: false, isMatched: false, ...character };
      });
    setCards(cards);
  };

  const flipCard = (cardId: number) => {
    const newCards: Card[] = cards.map((card) =>
      card.cardId === cardId ? { ...card, isOpen: !card.isOpen } : card
    );
    setCards(newCards);
  };

  const isPairMatched = (id: number): boolean => {
    return cards.every((card) => card.id !== id || card.isOpen);
  };

  const isMoreThanOneFlipped = (): boolean => {
    return cards.filter((card) => card.isOpen && !card.isMatched).length > 1;
  };

  const matchCardsAndCloseUnmatched = (id: number) => {
    let newCards: Card[] = cards;

    if (isPairMatched(id)) {
      newCards = newCards.map((card) =>
        card.id === id ? { ...card, isMatched: true } : card
      );
    }

    if (isMoreThanOneFlipped()) {
      newCards = newCards.map((card) =>
        !card.isMatched && card.isOpen ? { ...card, isOpen: false } : card
      );
    }

    if (newCards != cards) {
      setCards(newCards);
    }
  };

  return (
    <CardsContext.Provider
      value={{ cards, shuffleCards, flipCard, matchCardsAndCloseUnmatched }}
    >
      {children}
    </CardsContext.Provider>
  );
};
