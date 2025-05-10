import { useState } from "react";
import "./App.css";
import useCardNumber from "./lib/useCardNumber";
import useCardBrand from "./lib/useCardBrand";
import React from "react";

function App() {
  const [cardNumbers, setCardNumbers] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const { handleCardNumber, isValid, errorMessage } = useCardNumber();
  useCardBrand();

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setCardNumbers((prev) => ({ ...prev, [name]: value }));
    handleCardNumber({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <div>
      {errorMessage}
      <input name="input1" onBlur={handleBlur}></input>
      <input name="input2" onBlur={handleBlur}></input>
      <input name="input3" onBlur={handleBlur}></input>
      <input name="input4" onBlur={handleBlur}></input>
    </div>
  );
}

export default App;
