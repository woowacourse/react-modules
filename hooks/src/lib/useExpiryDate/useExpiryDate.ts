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

  const handleExpiryDateBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value, name } = e.target;

    if (name === "year" && !Validator.checkFillNumber(value, OPTION.expirationDateMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiryFormat,
      });

    if (name === "month" && !Validator.checkCreditExpirationPeriod(value, name))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiredCard,
      });

    if (name === "month") {
      const newValue = formattingMonth(value, name);
      updateByNameAndValue({ name, value: newValue });
    } else {
      updateByNameAndValue({ name, value });
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleExpiryDateEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key !== "Enter") return;

    const { value, name } = e.target as HTMLInputElement;

    if (name === "year" && !Validator.checkFillNumber(value, OPTION.expirationDateMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiryFormat,
      });

    if (name === "month" && !Validator.checkCreditExpirationPeriod(value, name))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiredCard,
      });

    if (name === "month") {
      const newValue = formattingMonth(value, name);
      updateByNameAndValue({ name, value: newValue });
    } else {
      updateByNameAndValue({ name, value });
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
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
