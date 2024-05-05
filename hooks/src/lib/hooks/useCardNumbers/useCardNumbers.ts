import { useState } from "react";

import { INPUT_REGEX } from "../../constants/regex";
import { ERROR_MESSAGES, MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

function useCardNumbers(maxLength: number, inputCount = 1) {
  const [cardNumbers, setCardNumbers] = useState(Array(inputCount).fill(""));
  const [cardNumberErrors, setCardNumberErrors] = useState(
    Array(inputCount).fill(false)
  );

  const handleCardNumbersChange = (value: string, inputIndex: number) => {
    const isValidNumber = INPUT_REGEX.cardNumber(maxLength).test(value);

    const updatedErrors = [...cardNumberErrors];
    updatedErrors[inputIndex] = !isValidNumber;
    setCardNumberErrors(updatedErrors);

    const updatedNumbers = [...cardNumbers];
    updatedNumbers[inputIndex] = value;
    setCardNumbers(updatedNumbers);
  };

  const getCardNumbersErrorMessage = () => {
    return cardNumberErrors.some((isError) => isError)
      ? MAX_LENGTH_ERROR_MESSAGE(maxLength)
      : undefined;
  };

  return {
    cardNumbers,
    cardNumberErrors,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
