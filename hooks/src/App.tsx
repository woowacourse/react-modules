import React from "react";
import "./App.css";

import { useCardNumbers } from "./lib";

function App() {
  const {
    inputInfo: {
      first: { attribute: firstNumberAttrs, error: firstErrType, isValid: firstValid },
      second: { attribute: secondNumberAttrs, error: secondErrType, isValid: secondValid },
      third: { attribute: thirdNumberAttrs, error: thirdErrType, isValid: thirdValid },
      fourth: { attribute: fourthNumberAttrs, error: fourthErrType, isValid: fourthValid },
    },
    inputCount,
    cardBrand,
  } = useCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>cardBrand : {cardBrand}</div>
      <input {...firstNumberAttrs}></input>
      <div>{firstErrType}</div>
      <input {...secondNumberAttrs}></input>
      <div>{secondErrType}</div>
      <input {...thirdNumberAttrs}></input>
      <div>{thirdErrType}</div>
      {inputCount < 4 ? null : (
        <>
          <input {...fourthNumberAttrs}></input>
          <div>{fourthErrType}</div>
        </>
      )}
      <div> {firstValid && secondValid && thirdValid && fourthValid ? "OK" : "FAIL"}</div>
    </>
  );
}

export default App;
