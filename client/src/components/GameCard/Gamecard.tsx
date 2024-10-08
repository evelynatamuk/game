import { FC, useEffect } from "react";
import { Card } from "../../types";
import { Card as ReactCard } from "react-bootstrap";
import { useCards } from "../../contexts/Cards";
import "./GameCard.css";

interface GameCardProps {
  card: Card;
}

export const GameCard: FC<GameCardProps> = ({ card }) => {
  const { cards, flipCard, matchCardsAndCloseUnmatched } = useCards();

  const handleFlip = () => {
    flipCard(card.cardId);
  };

  useEffect(() => {
    const FLIPPING_MILLISECONDS = 600;

    const waitForFlip = () => {
      return new Promise((resolve) =>
        setTimeout(resolve, FLIPPING_MILLISECONDS)
      );
    };

    if (card.isOpen && !card.isMatched) {
      waitForFlip().then(() => {
        matchCardsAndCloseUnmatched(card.id);
      });
    }
  }, [cards]);

  return (
    <div
      className={`game-card ${!card.isOpen ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <ReactCard className="text-center ancient-card px-3">
        <div className="ratio ratio-1x1 my-1">
          <ReactCard.Img
            variant="top"
            src={card.img}
            alt={card.name}
            className={`ancient-card-img ${!card.isOpen ? "hidden" : ""}`}
          />
        </div>
        <ReactCard.Body
          className={`d-flex align-items-center justify-content-center p-0 ancient-card-body ${
            !card.isOpen ? "hidden" : ""
          }`}
        >
          <ReactCard.Title className="ancient-card-title pt-2">
            {card.name}
          </ReactCard.Title>
        </ReactCard.Body>
      </ReactCard>
    </div>
  );
};
