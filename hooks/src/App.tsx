import useCardNumberInput from "./lib/useCardNumberInput";
import styled from "styled-components";

function App() {
  const { cardNumber, cardType, handleCardNumberChange } = useCardNumberInput();
  return (
    <DefaultStyle>
      <label htmlFor="card-number">카드 번호 입력</label>
      <input
        id="card-number"
        value={cardNumber.value.cardNumber}
        onChange={(e) => handleCardNumberChange(e)}
        name="cardNumber"
      ></input>
      <p data-testid="error">
        에러메세지: {cardNumber.errorMessage.cardNumber}
      </p>
      <p data-testid="value">값: {cardNumber.value.cardNumber}</p>
      <p data-testid="type"> 카드 타입: {cardType}</p>
    </DefaultStyle>
  );
}

const DefaultStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
