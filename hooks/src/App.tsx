import { useCardNumber } from './lib';

function App() {
  const { cardNumber, errorMessage, isValid, cardType, handleCardNumberChange } = useCardNumber();

  return (
    <>
      <input
        type="text"
        value={cardNumber.formatted}
        onChange={handleCardNumberChange}
        placeholder="카드 번호를 입력하세요"
      />
      {errorMessage && (
        <p style={{ border: `1px solid ${errorMessage === '' ? 'black' : 'red'}` }}>
          {errorMessage}
        </p>
      )}
      <p>카드 타입: {cardType}</p>
      <p>포맷팅 카드 번호: {cardNumber.formatted}</p>
      <p>원본 카드 번호: {cardNumber.raw}</p>
      <h1>Hooks Modules</h1>
      <button style={{ cursor: `${isValid ? 'pointer' : 'not-allowed'}` }}>카드 추가하기</button>
    </>
  );
}

export default App;
