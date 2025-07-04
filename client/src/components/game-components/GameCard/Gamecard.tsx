import { FC, useEffect } from "react";
import { Card as ReactCard } from "react-bootstrap";

import { useCards } from "../../../contexts";

import { GameCardProps } from "./game-card.props";
import "./GameCard.css";

export const GameCard: FC<GameCardProps> = ({
  card: { id, name, img, cardId, isOpen, isMatched },
}) => {
  const { cards, flipCard, matchCardsAndCloseUnmatched } = useCards();

  const handleFlip = () => {
    flipCard(cardId);
  };

  useEffect(() => {
    const FLIPPING_MILLISECONDS = 600;

    const waitForFlip = () =>
      new Promise((resolve) => setTimeout(resolve, FLIPPING_MILLISECONDS));

    if (isOpen && !isMatched) {
      waitForFlip().then(() => {
        matchCardsAndCloseUnmatched(id);
      });
    }
  }, [cards]);

  const classIfClosed = (className: string): string =>
    !isOpen ? `${className}` : "";

  return (
    <div
      className={`game-card ${classIfClosed("flipped")}`}
      onClick={handleFlip}
    >
      <ReactCard className="text-center ancient-card">
        <div className="ratio ratio-1x1 my-1">
          <ReactCard.Img
            variant="top"
            src={img}
            alt={name}
            className={`ancient-card-img ${classIfClosed("hidden")}`}
          />
        </div>
        <ReactCard.Body
          className={`d-flex align-items-center justify-content-center p-0 ancient-card-body ${classIfClosed(
            "hidden"
          )}`}
        >
          <ReactCard.Title className="ancient-card-title pt-2">
            {name}
          </ReactCard.Title>
        </ReactCard.Body>
      </ReactCard>
    </div>
  );
};
