import "./App.css";
import useCardNumbers2, { cardCompanyNumbersInfo } from "./lib/useCardNumbers2";
import { CardNumberKeys } from "./types/cardNumbers";

function App() {
  // const {
  //   values: cardNumbers,
  //   onChange: onChangeCardNumbers,
  //   errorMessages,
  //   onBlurValidLength,
  // } = useCardNumbers({
  //   cardNumber1: "",
  //   cardNumber2: "",
  //   cardNumber3: "",
  //   cardNumber4: "",
  // });

  const {
    values: cardNumbers,
    errorMessages,
    onChange: onChangeCardNumbers,
    onBlurValidLength,
  } = useCardNumbers2({
    cardCompanyNumbersInfo: cardCompanyNumbersInfo,
    selectedCompany: "[3,4,5,6]",
  });

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>카드 번호</div>
      {Array.from({ length: 4 })
        .fill(0)
        .map((e, i) => {
          return (
            <>
              <input
                onChange={(e) => onChangeCardNumbers(e, i)}
                value={cardNumbers[`cardNumber${i + 1}` as CardNumberKeys]}
                onBlur={(e) => onBlurValidLength(e, i)}
              />
              <div>{errorMessages[`cardNumber${i + 1}` as CardNumberKeys]}</div>
            </>
          );
        })}
    </>
  );
}

export default App;
