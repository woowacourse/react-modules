import "./App.css";
import useCardNumbers2 from "./lib/useCardNumbers2";

function App() {
  const { onChange, errorMessage, numbers, formattedNumbers } =
    useCardNumbers2();

  return (
    <>
      <input onChange={onChange} value={numbers} />
      <span>{formattedNumbers}</span>
      <span>{errorMessage}</span>
    </>
  );
}

export default App;
3;
