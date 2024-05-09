import "./App.css";
import { useCardHolder } from "./lib";
import useMultiCardNumbers from "./lib/useMultiCardNumbers";

function App() {
  const { onChange, errorMessage, formattedNumbers } = useMultiCardNumbers();

  const { onChange: cardHolderChange, value } = useCardHolder("");

  return (
    <>
      <input onChange={onChange} value={formattedNumbers.join("-")} />
      <span>{formattedNumbers.join("-")}</span>
      <span>{errorMessage}</span>

      <input onChange={cardHolderChange} value={value} />
    </>
  );
}

export default App;
