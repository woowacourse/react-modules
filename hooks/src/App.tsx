import "./App.css";
import { useMultiCardNumbers } from "./lib";

function App() {
  const { onChange, errorMessage, formattedNumbers, cardBrand, inputRef } =
    useMultiCardNumbers();

  return (
    <>
      <input
        onChange={onChange}
        value={formattedNumbers.join(" ")}
        name="month"
        ref={inputRef}
      />
      <span>{cardBrand}</span>
      <span>{errorMessage}</span>
    </>
  );
}

export default App;
