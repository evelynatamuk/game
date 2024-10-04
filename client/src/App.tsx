import { useState, useEffect } from "react";
import characters from "./data/characters.json";
import Card from "./types/Card";
import { Nav } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

export const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const cards: Card[] = [...characters, ...characters]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => {
        return { id: index, ...card };
      });
    setCards(cards);
  };

  return (
    <>
      <Nav shuffleCards={shuffleCards} />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};
