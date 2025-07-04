import { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useCards } from "../../../contexts";
import { GameCard } from "../GameCard";

export const Game: FC = () => {
  const { cards, shuffleCards, isVictory } = useCards();
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const OPACITY = 1;
    const DELAY_MILIS = 1000;

    const timer = setTimeout(() => {
      setOpacity(OPACITY);
    }, DELAY_MILIS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVictory()) shuffleCards();
  }, [cards]);

  return (
    <Container
      fluid
      className="col-6"
      style={{ opacity, transition: "opacity 0.5s ease-in-out" }}
    >
      <Row className="justify-content-center">
        {cards.map((card) => (
          <Col key={card.cardId} className="col-3 mt-1">
            <GameCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
