import { useCardNumberInput } from "./lib";

function App() {
  const {
    formattedCardNumber,
    cardBrand,
    isValid,
    errorMessage,
    handleChange,
  } = useCardNumberInput();

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h2>카드 번호 입력</h2>

      <input
        type="text"
        value={formattedCardNumber}
        onChange={handleChange}
        placeholder="카드 번호를 입력하세요"
        style={{
          padding: "12px",
          fontSize: "18px",
          width: "300px",
          border: `2px solid ${isValid ? "#ccc" : "red"}`,
          borderRadius: "4px",
          letterSpacing: "1px",
        }}
      />

      {cardBrand && (
        <p style={{ marginTop: "12px" }}>
          카드사: <strong>{cardBrand}</strong>
        </p>
      )}

      {!isValid && errorMessage && (
        <p style={{ color: "red", marginTop: "4px" }}>{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
