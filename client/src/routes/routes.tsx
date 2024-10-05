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
    element: <></>,
  },
  {
    path: "/game",
    name: "Game",
    element: <></>,
  },
];

export default routes;
