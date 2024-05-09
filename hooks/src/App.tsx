import "./App.css";
import useMultiCardNumbers from "./lib/useMultiCardNumbers";

function App() {
  const { onChange, errorMessage, formattedNumbers } = useMultiCardNumbers();

  return (
    <>
      <input onChange={onChange} value={formattedNumbers.join("-")} />
      <span>{formattedNumbers.join("-")}</span>
      <span>{errorMessage}</span>
    </>
  );
}

export default App;
