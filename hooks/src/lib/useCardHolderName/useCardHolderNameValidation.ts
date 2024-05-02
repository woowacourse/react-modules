import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

const useCardHolderNameValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardHolderName = (value: string) => {
    const isAlphabetInputValid =
      cardInputValidator.validateAlphabetInput(value);

    if (!isAlphabetInputValid) {
      setErrorText("알파벳을 입력해 주세요.");
      setErrorState(!isAlphabetInputValid);

      return false;
    }

    const isValidCardHolderNameLength =
      cardInputValidator.validateNumberInRange(value.length, 1, 15);

    if (!isValidCardHolderNameLength) {
      setErrorText("15자 이내로 입력할 수 있습니다.");
      setErrorState(!isValidCardHolderNameLength);

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCardHolderName,
  };
};

export default useCardHolderNameValidation;
