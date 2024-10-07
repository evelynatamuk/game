import { FC } from "react";
import { Card } from "../../types";
import { Card as ReactCard } from "react-bootstrap";
import "./GameCard.css";

interface GameCardProps {
  card: Card;
}

export const GameCard: FC<GameCardProps> = ({ card }) => {
  return (
    <>
      <ReactCard className="text-center ancient-card px-3">
        <div className="ratio ratio-1x1 my-1">
          <ReactCard.Img
            variant="top"
            src={card.img}
            alt={card.name}
            className="ancient-card-img"
          />
        </div>
        <ReactCard.Body className="d-flex align-items-center justify-content-center p-0 ancient-card-body">
          <ReactCard.Title className="ancient-card-title pt-2">
            {card.name}
          </ReactCard.Title>
        </ReactCard.Body>
      </ReactCard>
    </>
  );
};
