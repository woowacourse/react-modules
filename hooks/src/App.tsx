import "./App.css";
import { useCardNumbers } from "pongju-payments-hooks";
import { useCardBrand } from "./lib";
function App() {
  const cardNumbersHook = useCardBrand({ optionValues: ["신한은행", "BC"] });
  console.log(cardNumbersHook);
  return (
    <>
      <h1>Hooks Modules</h1>
    </>
  );
}

export default App;
