import { FC, useState, useEffect } from "react";
import { GameCard } from "../GameCard";
import { useCards } from "../../contexts/Cards";
import { Container, Row, Col } from "react-bootstrap";

interface GameProps {}

export const Game: FC<GameProps> = () => {
  const { cards } = useCards();

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
