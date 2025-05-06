import { useState } from "react";
import { CARD_INPUT } from "../constants/cardValidationInfo";
import { validateNumericInput } from "../utils/inputValidation";

type CardNumberState = {
  value: string;
  isValid: boolean;
};

interface Props {
  cardNumberState: CardNumberState[];
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const useCardNumberInput = (): Props => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState[]>(
    Array.from({ length: CARD_INPUT.NUMBER_INPUTS }, () => ({
      value: "",
      isValid: true,
    }))
  );

  const [errorMessage, setErrorMessage] = useState("");

  const validateCardNumber = (value: string) => {
    return validateNumericInput(value, CARD_INPUT.MAX_LENGTH.CARD);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    const { isValid, errorMessage } = validateCardNumber(inputValue);

    const updatedState = cardNumberState.map((item, i) =>
      i === index ? { value: inputValue, isValid } : item
    );

    setCardNumberState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
  };
};

export default useCardNumberInput;
