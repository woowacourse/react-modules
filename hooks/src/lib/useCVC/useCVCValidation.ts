import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";
import { VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useCVCValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCVC = (value: string) => {
    const isNumericInputValid = cardInputValidator.validateNumericInput(value);

    if (!isNumericInputValid) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(!isNumericInputValid);

      return false;
    }

    const isValidCVCLength = cardInputValidator.validateInputLength(value, 3);

    if (!isValidCVCLength) {
      setErrorText(VALIDATION_MESSAGES.invalidCVC);
      setErrorState(!isValidCVCLength);

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCVC,
  };
};

export default useCVCValidation;
