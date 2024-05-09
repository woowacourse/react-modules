import "./App.css";
import useMultiCardNumbers from "./lib/useMultiCardNumbers";

function App() {
  const { onChange, errorMessage, numbers, formattedNumbers } =
    useMultiCardNumbers();

  return (
    <>
      <input onChange={onChange} value={numbers} />
      <span>{formattedNumbers}</span>
      <span>{errorMessage}</span>
    </>
  );
}

export default App;
