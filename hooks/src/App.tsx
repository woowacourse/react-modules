import { useState } from "react";
import "./App.css";
import useCardNumber from "./lib/useCardNumber";
import React from "react";

function App() {
  const [cardNumbers, setCardNumbers] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const { handleCardNumber, isValid, errorMessage } = useCardNumber();

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setCardNumbers((prev) => ({ ...prev, [name]: value }));
    handleCardNumber({
      ...cardNumbers,
      [name]: value,
    });
  };

  console.log(isValid, errorMessage);
  return (
    <div>
      {/* <input name="month" onBlur={handleBlur}></input> */}
      {errorMessage}
      <input name="input1" onBlur={handleBlur}></input>
      <input name="input2" onBlur={handleBlur}></input>
      <input name="input3" onBlur={handleBlur}></input>
      <input name="input4" onBlur={handleBlur}></input>
    </div>
  );
}

export default App;
