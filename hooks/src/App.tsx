import React from "react";
import { useCardNumbers } from "./lib/index";

function App() {
  const {
    cardNumbers,
    formattedCardNumbers,
    cardNumberMaxLength,
    cardBrand,
    cardNumberError,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  } = useCardNumbers();

  const errorMessage = getCardNumbersErrorMessage();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input onChange={(e) => handleCardNumbersChange(e.target.value)} />
      <div>Card Numbers : {cardNumbers}</div>
      <div>Formatted : {formattedCardNumbers}</div>
      <div>Card Brand : {cardBrand}</div>
      <div>Error : {cardNumberError.toString()}</div>
      <div>Error Message : {errorMessage}</div>
      <div>Max Length : {cardNumberMaxLength}</div>
    </>
  );
}

export default App;
