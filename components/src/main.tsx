import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MobileLayout from "./components/MobileLayout/MobileLayout.tsx";
import { Global } from "@emotion/react";
import { resetCss } from "./styles/reset.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileLayout>
      <Global styles={resetCss} />
      <App />
    </MobileLayout>
  </React.StrictMode>
);
