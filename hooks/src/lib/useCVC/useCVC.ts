import { ChangeEvent, FocusEvent, useState } from "react";
import useInput from "../common/useInput";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

const useCVC = (initialValue: string) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkDigit(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyNumber,
      });
    }

    if (Validator.checkOverMaxDigit(value, OPTION.cvcMaxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cvcOutOfRange,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCvcBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkFillNumber(value, OPTION.cvcMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cvcOutOfRange,
      });

    updateByNameAndValue(value);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  return {
    inputValue,
    validationResult,
    handleCvcChange,
    handleCvcBlur,
  } as const;
};

export default useCVC;
