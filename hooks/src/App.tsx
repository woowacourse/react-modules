import "./App.css";
import useCardNumbers2 from "./lib/useCardNumbers2";

function App() {
  const { value, cardBrand, onChange, errorMessage } = useCardNumbers2();

  console.log(value);
  console.log("cardBrand22", cardBrand);
  console.log(errorMessage);
  return <input onChange={onChange} />;
}

export default App;
