import { ChangeEvent, FocusEvent, useState } from "react";
import useInputs from "../common/useInputs";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

export interface CardNumberValue {
  firstValue: string;
  secondValue: string;
  thirdValue: string;
  fourthValue: string;
}

const useCardNumber = (initialValue: CardNumberValue) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInputs(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkDigit(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyNumber,
      });
    }

    if (Validator.checkOverMaxDigit(value, OPTION.cardNumberMaxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkFillNumber(value, OPTION.cardNumberMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });

    updateByNameAndValue(name, value);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  return {
    inputValue,
    validationResult,
    handleCardNumberChange,
    handleCardNumberBlur,
  } as const;
};

export default useCardNumber;
