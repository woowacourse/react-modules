import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/cardCustomHook";
import { ExpiryDateKeys } from "../types/cardCustomHook";

const useExpiryDateValidation = () => {
  const [errorState, setErrorState] = useState<Record<ExpiryDateKeys, boolean>>(
    {
      month: false,
      year: false,
    }
  );

  const [errorText, setErrorText] = useState("");

  const updateErrorState = (name: string, validResult: boolean) => {
    setErrorState((prevErrorState) => {
      return {
        ...prevErrorState,
        [name]: validResult,
      };
    });
  };

  const updateAllErrorState = (validResult: boolean) => {
    setErrorState({
      month: validResult,
      year: validResult,
    });
  };

  const validateExpiryDate = (
    name: string,
    value: string,
    expiryDate: Record<ExpiryDateKeys, string>
  ): boolean => {
    const isNumericInput = cardInputValidator.validateNumericInput(value);

    if (!isNumericInput) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      updateErrorState(name, true);

      return false;
    }

    const isOverInputLength = value.length > 2;

    if (isOverInputLength) return false;

    if (name === "month" && !cardInputValidator.validateMonth(value)) {
      setErrorText(VALIDATION_MESSAGES.invalidMonthRange);
      updateErrorState(name, true);

      return true;
    }

    if (name === "year" && !cardInputValidator.validateYear(value)) {
      setErrorText(VALIDATION_MESSAGES.expiredYear);
      updateErrorState(name, true);

      return true;
    }

    if (
      (name === "month" && expiryDate.year.length !== 2) ||
      (name === "year" && expiryDate.month.length !== 2)
    ) {
      return true;
    }

    if (
      !cardInputValidator.validateFutureDate(
        name === "month" ? parseInt(value, 10) : parseInt(expiryDate.month, 10),
        name === "year" ? parseInt(value, 10) : parseInt(expiryDate.year, 10)
      )
    ) {
      setErrorText(VALIDATION_MESSAGES.expiredDate);
      updateAllErrorState(true);

      return true;
    }

    setErrorText("");
    updateAllErrorState(false);

    return true;
  };

  return {
    errorState,
    errorText,
    validateExpiryDate,
  };
};

export default useExpiryDateValidation;
