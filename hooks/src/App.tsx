import "./App.css";
import { useCardNumbers } from "./lib";

function App() {
  const {
    values: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessages,
  } = useCardNumbers({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
  });

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>카드 번호</div>
      {/*cardNumber 1*/}
      <input
        onChange={onChangeCardNumbers}
        name="cardNumber1"
        value={cardNumbers["cardNumber1"]}
      />
      {/*cardNumber 2*/}
      <div>{errorMessages["cardNumber1"]}</div>
      <input
        onChange={onChangeCardNumbers}
        name="cardNumber2"
        value={cardNumbers["cardNumber2"]}
      />
      {/*cardNumber 3*/}
      <div>{errorMessages["cardNumber2"]}</div>
      <input
        value={cardNumbers["cardNumber3"]}
        onChange={onChangeCardNumbers}
        name="cardNumber3"
      />
      <div>{errorMessages["cardNumber3"]}</div>
      {/*cardNumber 4*/}
      <input
        value={cardNumbers["cardNumber4"]}
        onChange={onChangeCardNumbers}
        name="cardNumber4"
      />
      <div>{errorMessages["cardNumber4"]}</div>
    </>
  );
}

export default App;
