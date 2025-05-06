import useCardNumber from "./lib/hooks/CardNumber";
function App() {
  const { cardNumberState, handleCardNumberChange, errorState } =
    useCardNumber();

  return (
    <>
      <div onClick={undefined}>123</div>
      <input
        placeholder="1"
        type="text"
        value={cardNumberState.first.value}
        onChange={(e) => {
          handleCardNumberChange("first", e.target.value);
        }}
      />
      <input
        placeholder="1"
        type="text"
        value={cardNumberState.second.value}
        onChange={(e) => {
          handleCardNumberChange("second", e.target.value);
        }}
      />
      <input
        placeholder="1"
        type="text"
        value={cardNumberState.third.value}
        onChange={(e) => {
          handleCardNumberChange("third", e.target.value);
        }}
      />
      <input
        placeholder="1"
        type="text"
        value={cardNumberState.fourth.value}
        onChange={(e) => {
          handleCardNumberChange("fourth", e.target.value);
        }}
      />
      <button disabled={!errorState.isValid}>123</button>
    </>
  );
}

export default App;
