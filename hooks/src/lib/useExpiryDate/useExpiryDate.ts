import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";
import formattingMonth from "../utils/formattingMonth";

interface ExpiryDateValue {
  month: string;
  year: string;
}

const useExpiryDate = (initialValue: ExpiryDateValue) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;

    if (!Validator.checkNumberAndOver(value, OPTION.expirationDateMaxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiryFormat,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleExpiryDateValidator = (e: EventType) => {
    if (e.target !== e.currentTarget) return;

    const { value, name } = e.target as HTMLInputElement;

    if (name === "month" && !Validator.checkExpirationMonth(name, value))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiredMonth,
      });

    const newValue = name === "month" ? formattingMonth(value, name) : value;
    updateByNameAndValue({ name, value: newValue });

    if (name === "year" && !Validator.checkFillNumber(value, OPTION.expirationDateMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiryFormat,
      });

    if (!Validator.checkDateExpiration(inputValue.month, inputValue.year))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiredCard,
      });

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleExpiryDateBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleExpiryDateValidator(e);
  };

  const handleExpiryDateEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.currentTarget.blur();

    handleExpiryDateValidator(e);
  };

  return {
    inputValue,
    validationResult,
    handleExpiryChange,
    handleExpiryDateBlur,
    handleExpiryDateEnter,
  };
};

export default useExpiryDate;
