import { useCardNumbers } from "./lib";

function App() {
  const { cardNumbers, cardBrand, handleCardNumbers, isError, errorMessage } =
    useCardNumbers();
  return (
    <div>
      <input type="text" value={cardNumbers} onChange={handleCardNumbers} />
      <div>{cardBrand}</div>
      <div>{isError && errorMessage}</div>
    </div>
  );
}

export default App;
