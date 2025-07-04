import { Game } from "../components";
import { RoutePath } from "./route.enum";
import { IRoute } from "./route.interface";

export const routes: IRoute[] = [
  {
    path: RoutePath.HOME,
    name: "Home",
    element: <></>,
  },
  {
    path: RoutePath.GAME,
    name: "Game",
    element: <Game />,
  },
];
