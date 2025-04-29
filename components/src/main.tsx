import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import MobileLayout from "./components/MobileLayout/MobileLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileLayout>
      <App />
    </MobileLayout>
  </React.StrictMode>
);
