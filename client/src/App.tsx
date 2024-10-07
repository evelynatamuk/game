import { Nav } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { CardsProvider } from "./contexts/Cards";

export const App = () => {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  );
};
