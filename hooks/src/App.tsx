import './App.css';
import { useCardNumberInput, BRAND_LENGTHS } from './lib';

function App() {
  const { cardNumber, formattedCardNumber, brand, cardNumberError, handleCardNumberChange } = useCardNumberInput();

  return (
    <div>
      <label htmlFor="cardNumber">카드 번호</label>
      <input
        type="text"
        name="cardNumber"
        value={cardNumber}
        onChange={(e) => handleCardNumberChange(e.target.value)}
        placeholder="카드 번호를 입력해주세요."
        maxLength={brand === 'Unknown' ? 16 : BRAND_LENGTHS[brand]}
      />
      <p>{cardNumberError}</p>
      <p>{formattedCardNumber}</p>
      <p>{brand}</p>
    </div>
  );
}

export default App;
