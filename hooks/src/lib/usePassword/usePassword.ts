import { ChangeEvent, useState, KeyboardEvent, FocusEvent } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

const usePassword = (initialValue: { password: string }) => {
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
        errorMessage: ERROR_MESSAGE.passwordOutOfRange,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handlePasswordValidator = (e: EventType) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkFillNumber(value, OPTION.passwordMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.passwordOutOfRange,
      });

    updateByNameAndValue({ name, value });
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    handlePasswordValidator(e);
  };

  const handleCardNumberEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.currentTarget.blur();

    handlePasswordValidator(e);
  };

  return {
    inputValue,
    validationResult,
    handlePasswordChange,
    handlePasswordBlur,
    handleCardNumberEnter,
  };
};

export default usePassword;
