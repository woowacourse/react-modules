import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

const useCardNumber = <T extends object>(initialValue: T) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkNumberAndOver(value, OPTION.cardNumberMaxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyNumber,
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

    updateByNameAndValue({ name, value });
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardNumberEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key !== "Enter") return;

    const { name, value } = e.target as HTMLInputElement;
    if (!value || !Validator.checkFillNumber(value, OPTION.cardNumberMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });

    updateByNameAndValue({ name, value });
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
    handleCardNumberEnter,
  };
};

export default useCardNumber;
