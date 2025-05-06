import { useState } from "react";
import validateNumber from "../utils/validateNumber";
import validateMaxLength from "../utils/validateMaxLength";
import { validationMessages } from "../../constants/validationMessages";

const useCardPasswordValidate = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardPassword = (cardPassword: string) => {
    if (!validateNumber(cardPassword)) {
      setIsValid(false);
      setErrorMessage(validationMessages.numberOnly);
      return;
    }

    if (!validateMaxLength(cardPassword, 2)) {
      setIsValid(false);
      setErrorMessage(validationMessages.limitedLength(2));
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardPassword };
};

export default useCardPasswordValidate;
