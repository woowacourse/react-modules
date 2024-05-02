import "./App.css";
import { useCardNumbers } from "./lib";

function App() {
  const {
    values: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessages,
    onBlurValidateLength,
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
        onBlur={onBlurValidateLength}
      />{" "}
      <div>{errorMessages["cardNumber1"]}</div>
      {/*cardNumber 2*/}
      <input
        onChange={onChangeCardNumbers}
        name="cardNumber2"
        value={cardNumbers["cardNumber2"]}
        onBlur={onBlurValidateLength}
      />
      <div>{errorMessages["cardNumber2"]}</div>
      {/*cardNumber 3*/}
      <input
        value={cardNumbers["cardNumber3"]}
        onChange={onChangeCardNumbers}
        name="cardNumber3"
        onBlur={onBlurValidateLength}
      />
      <div>{errorMessages["cardNumber3"]}</div>
      {/*cardNumber 4*/}
      <input
        value={cardNumbers["cardNumber4"]}
        onChange={onChangeCardNumbers}
        name="cardNumber4"
        onBlur={onBlurValidateLength}
      />
      <div>{errorMessages["cardNumber4"]}</div>
    </>
  );
}

export default App;
