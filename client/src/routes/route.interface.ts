import { ReactNode } from "react";
import { RoutePath } from "./route.enum";

export interface IRoute {
  path: RoutePath;
  name: string;
  element: ReactNode;
}
