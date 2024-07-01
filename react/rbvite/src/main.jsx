import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountProvider } from "./hooks/counter-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
);
