import { FC } from "react";
import { GameCard } from "../GameCard";
import { useCards } from "../../contexts/Cards";
import { Container, Row, Col } from "react-bootstrap";

interface GameProps {}

export const Game: FC<GameProps> = () => {
  const { cards } = useCards();

  return (
    <Container fluid className="col-6">
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
