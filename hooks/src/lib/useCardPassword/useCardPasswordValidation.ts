import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

const useCardPasswordValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardPassword = (value: string) => {
    const isNumericInputValid = cardInputValidator.validateNumericInput(value);

    if (!isNumericInputValid) {
      setErrorText("숫자를 입력해 주세요.");
      setErrorState(!isNumericInputValid);

      return false;
    }

    const isValidCardPasswordLength = cardInputValidator.validateInputLength(
      value,
      2
    );

    if (!isValidCardPasswordLength) {
      setErrorText("2자 이내로 입력할 수 있습니다.");
      setErrorState(!isValidCardPasswordLength);

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCardPassword,
  };
};

export default useCardPasswordValidation;
