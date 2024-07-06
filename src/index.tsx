import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./tests/reportWebVitals";
import { config } from "./constants/config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (config.isDevelopment) {
  reportWebVitals(console.log);
}
