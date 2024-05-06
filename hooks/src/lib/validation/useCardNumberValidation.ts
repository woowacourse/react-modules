import { useState } from "react";
import { hasBlank, isNumber, isRightLength } from "./validate";
import ERROR_MESSAGES from "../constants/error";
import { CARD_NUMBER } from "../constants/cardInputInformation";

type CardNumberName =
  | "cardNumber1"
  | "cardNumber2"
  | "cardNumber3"
  | "cardNumber4";

const useCardNumberValidation = () => {
  const [cardNumberValidation, setCardNumberValidation] = useState({
    errorMessage: {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    },
    isError: {
      cardNumber1: false,
      cardNumber2: false,
      cardNumber3: false,
      cardNumber4: false,
    },
  });

  const updateErrorState = (name: CardNumberName, errorMessage: string) => {
    return setCardNumberValidation((prev) => ({
      errorMessage: { ...prev.errorMessage, [name]: errorMessage },
      isError: { ...prev.isError, [name]: true },
    }));
  };

  const isCardNumberValid = (value: string, name: CardNumberName) => {
    if (hasBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_TRIM_BLANK);
      return false;
    }
    if (!isNumber(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_ONLY_NUMBER);
      return false;
    }
    if (!isRightLength(value, CARD_NUMBER.FIELD_LENGTH)) {
      updateErrorState(
        name,
        `${CARD_NUMBER.FIELD_LENGTH}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`
      );
      return false;
    }
    return true;
  };

  return { cardNumberValidation, isCardNumberValid };
};
export default useCardNumberValidation;
