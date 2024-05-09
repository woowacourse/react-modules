import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { cardNumberFormatter } from "../utils/format";

interface CardNumbersState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

interface Props {
  CardNumbersState: CardNumbersState;
  handleCardNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const INDIVIDUAL_CARD_LENGTH = 16;

const useCardNumbersInput = (): Props => {
  const [cardNumbersState, setCardNumbersState] = useState<CardNumbersState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });
  const matchedLength = 16;

  const handleCardNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid = true;
    let errorMessage = "";

    if (!validator.isValidEmptyValue(value)) {
      isValid = true;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(value)) {
      isValid = true;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: value, matchedLength: INDIVIDUAL_CARD_LENGTH })) {
      isValid = true;
      errorMessage = ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(matchedLength);
    }

    setCardNumbersState({
      value: cardNumberFormatter.default(value),
      isValid,
      errorMessage,
    });
  };

  return { CardNumbersState: cardNumbersState, handleCardNumbersChange };
};

export default useCardNumbersInput;
