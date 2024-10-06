import { FC } from "react";
import { GameCard } from "../GameCard";
import { useCards } from "../../contexts/Cards";

interface GameProps {}

export const Game: FC<GameProps> = () => {
  const { cards } = useCards();

  return (
    <>
      {cards.map((card, index) => (
        <GameCard card={card} key={index} />
      ))}
    </>
  );
};
