import React from "react";
import "./App.css";
import useCardNumberInput from "./lib/useCardNumberInput";
import styled from "styled-components";

function App() {
  const { cardNumber, cardType, handleCardNumberChange } = useCardNumberInput();
  return (
    <DefaultStyle>
      <input
        value={cardNumber.value.cardNumber}
        onChange={(e) => handleCardNumberChange(e)}
        name="cardNumber"
      ></input>
      <p>에러메세지: {cardNumber.errorMessage.cardNumber}</p>
      <p>값: {cardNumber.value.cardNumber}</p>
      <p>카드 타입: {cardType}</p>
    </DefaultStyle>
  );
}

const DefaultStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
