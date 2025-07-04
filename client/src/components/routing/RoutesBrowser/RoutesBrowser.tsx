import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../../navbar";

import { RoutesBrowseProps } from "./routes-browser.props";

export const RoutesBrowser: FC<RoutesBrowseProps> = ({ routes }) => (
  <BrowserRouter>
    <Nav />
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  </BrowserRouter>
);
