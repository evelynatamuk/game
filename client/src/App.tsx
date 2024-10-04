import { useState, useEffect } from "react";
import characters from "./data/characters.json";
import Character from "./types/Character";
import { Nav } from "./components";

export const App = () => {
  const [cards, setCards] = useState<Character[]>([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const cards: Character[] = [...characters, ...characters].sort(
      () => Math.random() - 0.5
    );
    setCards(cards);
  };

  return (
    <>
      <Nav shuffleCards={shuffleCards} />
      {cards.map((card) => (
        <>
          <br />
          {card.name}
        </>
      ))}
    </>
  );
};
