import { ChangeEvent, FocusEvent, useState } from "react";
import useInputs from "../common/useInputs";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";
import formattingMonth from "../utils/formattingMonth";

export interface ExpirationPeriodValue {
  month: string;
  year: string;
}

const useExpiryDate = (initialValue: ExpirationPeriodValue) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInputs(
    initialValue as unknown as Record<string, string>
  );
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;

    if (!Validator.checkDigit(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyNumber,
      });
    }

    if (Validator.checkOverMaxDigit(value, OPTION.expirationDateMaxLength)) {
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

    if (name !== "year" && name !== "month") return;

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

    const newValue = formattingMonth(name, value);

    updateByNameAndValue(name, newValue);
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
  } as const;
};

export default useExpiryDate;
