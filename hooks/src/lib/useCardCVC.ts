import { useState } from "react";
import cardCvcValidation from "./cardCvcValidation";

function useCardCVC() {
  const [cvcNumber, setCvcNumber] = useState("");

  function handleCvcNumber(value: string) {
    setCvcNumber(value);
  }

  const { isCvcError, errorText } = cardCvcValidation(cvcNumber);

  return { cvcNumber, handleCvcNumber, isCvcError, errorText };
}

export default useCardCVC;
