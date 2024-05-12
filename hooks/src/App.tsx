import React from "react";
import "./App.css";
import { useCardNumber } from "hook-simo";

function App() {
  const {
    cardNumberFormat,
    cardBrand,
    cardNumber,
    errorText,
    handleCardNumberChange,
  } = useCardNumber();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
      <p>{errorText}</p>
      <p>{cardBrand}</p>
      <span>{cardNumberFormat.first} </span>
      <span>{cardNumberFormat.second} </span>
      <span>{cardNumberFormat.third} </span>
      <span>{cardNumberFormat.fourth}</span>
    </>
  );
}

export default App;
