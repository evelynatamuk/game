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

  const matchCards = (id: number) => {
    if (isPairMatched(id)) {
      const newCards: Card[] = cards.map((card) =>
        card.id === id ? { ...card, isMatched: true } : card
      );
      setCards(newCards);
    }
  };

  const closeUnmatched = () => {
    const newCards: Card[] = cards.map((card) =>
      !card.isMatched && card.isOpen ? { ...card, isOpen: false } : card
    );
    setCards(newCards);
  };

  return (
    <CardsContext.Provider
      value={{ cards, shuffleCards, flipCard, matchCards, closeUnmatched }}
    >
      {children}
    </CardsContext.Provider>
  );
};
