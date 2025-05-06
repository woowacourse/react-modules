import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MobileLayout from "./components/MobileLayout/MobileLayout";
import { Global } from "@emotion/react";
import { resetCss } from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileLayout>
      <Global styles={resetCss} />
      <App />
    </MobileLayout>
  </React.StrictMode>
);
