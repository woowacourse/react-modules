import React, { ChangeEvent } from "react";
import "./App.css";

import { useCardNumbers, useRegister } from "./lib";

const DEFAULT_INPUT_LENGTH = 4;

function App() {
  const {
    numbers: { firstState, secondState, thirdState, fourthState },
    errorList: [firstErrorType, secondErrorType, thirdErrorType, fourthErrorType],
    cardBrand,
    inputMaxLengthList,
  } = useCardNumbers();

  const { errorType: firstErrType, ...firstNumberAttrs } = useRegister("firstNumber", {
    value: firstState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => firstState[1](e.target.value),
    customType: "number",
    required: true,
    maxLength: DEFAULT_INPUT_LENGTH,
  });

  const { errorType: secondErrType, ...secondNumberAttrs } = useRegister("secondNumber", {
    value: secondState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => secondState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[1] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: thirdErrType, ...thirdNumberAttrs } = useRegister("secondNumber", {
    value: thirdState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => thirdState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[2] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: fourthErrType, ...fourthNumberAttrs } = useRegister("secondNumber", {
    value: fourthState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => fourthState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[3] : DEFAULT_INPUT_LENGTH,
  });

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>cardBrand : {cardBrand}</div>
      <input {...firstNumberAttrs}></input>
      <div>{firstErrType ?? firstErrorType}</div>
      <input {...secondNumberAttrs}></input>
      <div>{secondErrorType ?? secondErrType}</div>
      <input {...thirdNumberAttrs}></input>
      <div>{thirdErrType ?? thirdErrorType}</div>
      <input {...fourthNumberAttrs} disabled={!(inputMaxLengthList && inputMaxLengthList[3])}></input>
      <div>{fourthErrType ?? fourthErrorType}</div>
    </>
  );
}

export default App;
