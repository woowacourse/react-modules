import "./App.css";
import { useMultiCardNumbers } from "./lib";

function App() {
  const { onChange, errorMessage, formattedNumbers, cardBrand } =
    useMultiCardNumbers();

  return (
    <>
      <input
        onChange={onChange}
        value={formattedNumbers.join(" ")}
        name="month"
      />
      <span>{errorMessage}</span>
      <span>{cardBrand}</span>
    </>
  );
}

export default App;
