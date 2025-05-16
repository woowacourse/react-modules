import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App
      modalPosition={"center"}
      closeType={"top"}
      titleText={"카드 정보 입력"}
    >
      123
    </App>
  </React.StrictMode>
);
