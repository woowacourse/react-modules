import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cardHolder: string;
};

const useCardHolderValidation = ({ cardHolder }: Props) => {
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    if (!validator.isValidEmptyValue(cardHolder)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });
      return;
    }

    if (!validator.isEnglish(cardHolder)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_ENGLISH,
      });
      return;
    }

    if (!validator.isValidLengthRange({ value: cardHolder, maxLength: 21 })) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.OUT_OF_RANGE_HOLDER,
      });
      return;
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  }, [cardHolder]);

  return { validationResult };
};

export default useCardHolderValidation;
