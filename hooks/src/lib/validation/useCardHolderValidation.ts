import { useState } from "react";
import { hasBlank, isDoubleBlank, isUpperCase } from "./validate";
import ERROR_MESSAGES from "../constants/error";

type CardHolderName = "cardHolder";

const useCardHolderValidation = () => {
  const [cardHolderValidation, setCardHolderValidation] = useState({
    errorMessage: {
      cardHolder: "",
    },
    isError: {
      cardHolder: false,
    },
  });

  const updateErrorState = (name: CardHolderName, errorMessage: string) => {
    return setCardHolderValidation((prev) => ({
      errorMessage: { ...prev.errorMessage, [name]: errorMessage },
      isError: { ...prev.isError, [name]: true },
    }));
  };

  const isCardHolderValid = (value: string, name: CardHolderName) => {
    if (hasBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_TRIM_BLANK);
      return false;
    }
    if (isDoubleBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
      return false;
    }
    if (!isUpperCase(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
      return false;
    }
    return true;
  };

  return { cardHolderValidation, isCardHolderValid };
};
export default useCardHolderValidation;
