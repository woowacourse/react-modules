import React from "react";
import { useCardNumbers } from "./lib/index";

function App() {
  const {
    cardNumbers,
    cardBrand,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  } = useCardNumbers();

  console.log(cardNumbers);

  return (
    <div style={{ color: "black" }}>
      <input
        onChange={(event) => handleCardNumbersChange(event.target.value)}
      />
      <div>{cardBrand}</div>
      <div>{getCardNumbersErrorMessage()}</div>
    </div>
  );
}

export default App;
