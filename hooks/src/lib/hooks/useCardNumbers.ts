import { useState } from "react";
import { INPUT_REGEX } from "../constants/regex";

const useCardNumbers = (maxLength: number, inputCount = 1) => {
  const initialNumbersState: string[] = Array(inputCount).fill("");
  const [cardNumbers, setCardNumbers] = useState(initialNumbersState);
  const [cardNumberErrorState, setCardNumberErrorState] = useState({
    isError: Array(inputCount).fill(false),
    errorMessage: "",
  });

  const updateErrorState = (isValid: boolean, inputIndex: number) => {
    setCardNumberErrorState((prevState) => {
      const updatedIsError = [...prevState.isError];
      updatedIsError[inputIndex] = !isValid;

      const isAllValid = updatedIsError.every((item) => item === false);

      return {
        ...prevState,
        isError: updatedIsError,
        errorMessage: isAllValid
          ? ""
          : `${maxLength}자리 숫자로 입력해 주세요.`,
      };
    });
  };

  const handleCardNumbersChange = (value: string, inputIndex: number) => {
    const isValidNumber = INPUT_REGEX.cardNumber(maxLength).test(value);

    updateErrorState(isValidNumber, inputIndex);

    const updatedNumbers = [...cardNumbers];
    updatedNumbers[inputIndex] = value;
    setCardNumbers(updatedNumbers);
  };

  return { cardNumbers, cardNumberErrorState, handleCardNumbersChange };
};

export default useCardNumbers;
