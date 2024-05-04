import { ChangeEvent, useState, FocusEvent } from "react";
import useInput from "../common/useInput";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

const usePassword = <T extends object>(initialValue: T) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkNumberAndOver(value, OPTION.passwordMaxLength)) {
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

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkFillNumber(value, OPTION.passwordMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.passwordOutOfRange,
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
    handlePasswordChange,
    handlePasswordBlur,
  } as const;
};

export default usePassword;
