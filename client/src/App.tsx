import { FC } from "react";

import { CardsProvider } from "./contexts/Cards";
import { RoutesBrowser } from "./components/routing/RoutesBrowser/RoutesBrowser";
import { routes } from "./routes";

import "./App.css";

export const App: FC = () => {
  return (
    <div className="app">
      <CardsProvider>
        <RoutesBrowser routes={routes} />
      </CardsProvider>
    </div>
  );
};
