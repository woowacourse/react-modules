import './App.css';
import { useCardNumberField } from '@sanghee01/card-field-hooks';

function App() {
  const { cardNumbers, formattedCardNumber, cardBrand, handleCardNumberChange, cardNumberErrors, maxCardLength } =
    useCardNumberField();

  return (
    <div>
      <label htmlFor="cardNumber">카드 번호</label>
      <input
        type="text"
        name="cardNumber"
        value={formattedCardNumber}
        onChange={(e) => handleCardNumberChange(e.target.value)}
        placeholder="카드 번호를 입력해주세요."
        maxLength={maxCardLength}
      />
      <p>{cardNumberErrors}</p>
      {cardBrand && <p>카드 종류: {cardBrand}</p>}
      <p>카드 번호 원본: {cardNumbers}</p>
    </div>
  );
}

export default App;
