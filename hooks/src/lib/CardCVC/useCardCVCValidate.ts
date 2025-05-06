import { useState } from "react";

import validateMaxLength from "../utils/validateMaxLength";
import validateNumber from "../utils/validateNumber";

import { validationMessages } from "../../constants/validationMessages";

const useCardCVCValidate = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardCVC = (cardCVC: string) => {
    if (!validateNumber(cardCVC)) {
      setIsValid(false);
      setErrorMessage(validationMessages.numberOnly);
      return;
    }

    if (!validateMaxLength(cardCVC, 3)) {
      setIsValid(false);
      setErrorMessage(validationMessages.limitedLength(3));
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardCVC };
};

export default useCardCVCValidate;
