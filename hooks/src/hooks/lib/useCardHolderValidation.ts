import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cardHolder: string;
};

const useCardHolderValidation = ({ cardHolder }: Props) => {
  const [validationResult, setValidationResult] = useState({ isValid: false, errorMessage: "" });

  useEffect(() => {
    let error = { isValid: true, errorMessage: "" };

    if (!validator.isValidEmptyValue(cardHolder)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
    } else if (!validator.isEnglish(cardHolder)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_ENGLISH };
    } else if (!validator.isValidLengthRange({ value: cardHolder, maxLength: 21 })) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_HOLDER_LENGTH };
    }

    setValidationResult(error);
  }, [cardHolder]);

  return { validationResult };
};

export default useCardHolderValidation;
