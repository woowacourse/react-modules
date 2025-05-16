import { useCardNumber } from './lib';

function App() {
  const { cardNumbers, cardType, handleCardNumberChange, errorMessage } = useCardNumber();

  return (
    <>
      <input
        type="text"
        value={cardNumbers}
        onChange={handleCardNumberChange}
        placeholder="카드 번호 입력"
        inputMode="numeric"
      />
      <div>카드 종류: {cardType}</div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
}

export default App;
