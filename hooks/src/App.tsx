import "./App.css";
import { cardCompanyNumbersInfo } from "@/data/cardCompanyNumbersInfo";
import useMultiCardNumbers from "@/lib/useMultiCardNumbers";

function App() {
  const {
    values: cardNumbers,
    errorMessages,
    onChange: onChangeCardNumbers,
    onBlurValidLength,
  } = useMultiCardNumbers({
    cardCompanyNumbersInfo: cardCompanyNumbersInfo,
    selectedCompany: "[3,4,5,6]",
  });

  const valuesArr = Object.values(cardNumbers);
  const errorMessagesArr = Object.values(errorMessages);

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
                value={valuesArr[i]}
                onBlur={(e) => onBlurValidLength(e, i)}
              />
              <div>{errorMessagesArr[i]}</div>
            </>
          );
        })}
    </>
  );
}

export default App;
