import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";

function main() {
  const rootElement: HTMLElement = document.getElementById("root")!;
  const reactRoot: ReactDOM.Root = ReactDOM.createRoot(rootElement);
  const appComponent: JSX.Element = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reactRoot.render(appComponent);
}

main();
