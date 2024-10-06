import { ReactNode } from "react";
import { Game } from "../components";

interface Route {
  path: string;
  name: string;
  element: ReactNode;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: <></>,
  },
  {
    path: "/game",
    name: "Game",
    element: <Game />,
  },
];

export default routes;
