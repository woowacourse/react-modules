import useCardNumber from "./lib/hooks/CardNumber";

function App() {
  const { cardNumber, handleCardNumberChange, cardType, isValid } =
    useCardNumber();

  return (
    <div style={{ padding: "20px" }}>
      <h2>CardNumber 훅 테스트</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => handleCardNumberChange(e.target.value)}
          placeholder="카드 번호를 입력하세요"
          style={{ width: "200px" }}
        />
        <div style={{ marginTop: "10px" }}>
          <p>카드 타입: {cardType}</p>
          <p>
            유효성: {isValid ? "유효한 카드 번호" : "유효하지 않은 카드 번호"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
