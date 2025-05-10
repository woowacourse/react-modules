import "./App.css";

import useCardNumbersValidate from "./lib/CardNumber/hooks/useCardNumbersValidate/useCardNumbersValidate";
import useCardNumbersState from "./lib/CardNumber/hooks/useCardNumbersState/useCardNumbersState";

function App() {
  const { validationState, errorMessage, validateCardNumbers } =
    useCardNumbersValidate();
  const { cardNumbers, handleCardNumber } = useCardNumbersState({
    validateCardNumbers,
  });

  return (
    <>
      <ul>
        {Object.keys(validationState).map((key) => (
          <li key={key}>{`${key}는 통과?: ${validationState[key]}`}</li>
        ))}
      </ul>
      <p>{errorMessage}</p>
      <p>카드 네트워크: {cardNumbers.network}</p>
      <input
        value={cardNumbers.numbers.first}
        onBlur={(event) => handleCardNumber({ event, key: "first" })}
        onChange={(event) => handleCardNumber({ event, key: "first" })}
      ></input>
      <input
        value={cardNumbers.numbers.second}
        onBlur={(event) => handleCardNumber({ event, key: "second" })}
        onChange={(event) => handleCardNumber({ event, key: "second" })}
      ></input>
      <input
        value={cardNumbers.numbers.third}
        onBlur={(event) => handleCardNumber({ event, key: "third" })}
        onChange={(event) => handleCardNumber({ event, key: "third" })}
      ></input>
      <input
        value={cardNumbers.numbers.fourth}
        onBlur={(event) => handleCardNumber({ event, key: "fourth" })}
        onChange={(event) => handleCardNumber({ event, key: "fourth" })}
      ></input>
    </>
  );
}

export default App;
