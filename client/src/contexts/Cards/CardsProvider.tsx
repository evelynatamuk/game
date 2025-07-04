import { Dispatch, FC, ReactNode, useState } from "react";

import { characters } from "../../data";
import { Card } from "../../entities";
import { CardsContext } from "./CardsContext";
import { CardsContextInterface } from "./cards-context.types";

interface CardsProviderProps {
  children: ReactNode;
}

export const CardsProvider: FC<CardsProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const shuffleCards: Dispatch<void> = () => {
    if (cards.length > 0) closeAll();

    const wait = new Promise((resolve) => setTimeout(resolve, 500));

    const cardDuos = [...characters, ...characters];

    const shuffledCards = cardDuos
      .sort(() => Math.random() - 0.5)
      .map((character, index) => ({
        cardId: index,
        isOpen: false,
        isMatched: false,
        ...character,
      }));

    wait.then(() => setCards(shuffledCards));
  };

  const closeAll: Dispatch<void> = () => {
    const cardsClosed = cards.map((card) => ({ ...card, isOpen: false }));

    setCards(cardsClosed);
  };

  const flipCard = (cardId: number) => {
    const newCards: Card[] = cards.map((card) =>
      isAllowFlip(card, cardId) ? { ...card, isOpen: !card.isOpen } : card
    );

    setCards(newCards);
  };

  const isAllowFlip = (
    { cardId, isMatched, isOpen }: Card,
    givenCardId: number
  ): boolean => {
    return cardId === givenCardId && !isMatched && !isOpen;
  };

  const isPairMatched = (id: number): boolean => {
    return cards.every((card) => card.id !== id || card.isOpen);
  };

  const matchPair: Dispatch<number> = (id: number) => {
    const cardsToMatch = cards.map((card) =>
      card.id === id ? { ...card, isMatched: true } : card
    );

    if (cards !== cardsToMatch) setCards(cardsToMatch);
  };

  const isShouldCloseUnpairedDuo = (): boolean => {
    return cards.filter((card) => card.isOpen && !card.isMatched).length > 1;
  };

  const closeUnpaired: Dispatch<void> = () => {
    const cardsToClose = cards.map((card) =>
      !card.isMatched && card.isOpen ? { ...card, isOpen: false } : card
    );

    if (cards !== cardsToClose) setCards(cardsToClose);
  };

  const matchCardsAndCloseUnmatched: Dispatch<number> = (id: number) => {
    if (isPairMatched(id)) matchPair(id);
    else if (isShouldCloseUnpairedDuo()) closeUnpaired();
  };

  const isVictory = (): boolean => {
    return cards.every((card) => card.isMatched);
  };

  const value: CardsContextInterface = {
    cards,
    shuffleCards,
    flipCard,
    matchCardsAndCloseUnmatched,
    isVictory,
  };

  return (
    <CardsContext.Provider
      value={value}
      children={children}
    ></CardsContext.Provider>
  );
};
