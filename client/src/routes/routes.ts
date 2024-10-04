import { ReactNode } from "react";

interface Route {
  path: string;
  name: string;
  element: ReactNode;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: null,
  },
  {
    path: "/game",
    name: "Game",
    element: null,
  },
];

export default routes;
