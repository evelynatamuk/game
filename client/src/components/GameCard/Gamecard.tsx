import { FC } from "react";
import { Card } from "../../types";

interface GameCardProps {
  card: Card;
}

export const GameCard: FC<GameCardProps> = ({ card }) => {
  return <>{(card.cardId + 1) % 4 === 0 && <br />}</>;
};
