import "./App.css";
import { useMultiCardNumbers } from "./lib";

function App() {
  const { inputRef, onChange, errorMessage, formattedNumbers, cardBrand } =
    useMultiCardNumbers();
  return (
    <>
      <input ref={inputRef} onChange={onChange} value={formattedNumbers} />
      <div>{errorMessage}</div>
      <div>{formattedNumbers}</div>
      <div>{cardBrand}</div>
    </>
  );
}

export default App;
