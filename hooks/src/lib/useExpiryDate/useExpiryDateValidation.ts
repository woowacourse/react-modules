import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";
import { ExpiryDateKeys } from "../types/card-custom-hook";

const useExpiryDateValidation = () => {
  const [errorState, setErrorState] = useState<Record<ExpiryDateKeys, boolean>>({
    month: false,
    year: false,
  });

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

  const validateExpiryDate = (name: ExpiryDateKeys, value: string, expiryDate: Record<ExpiryDateKeys, string>): boolean => {
    if (cardInputValidator.validateOverInputLength(value, INPUT_RULES.maxExpirationDateLength)) return false;

    if (!cardInputValidator.validateNumericInput(value)) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      updateErrorState(name, true);

      return false;
    }

    if (name === "month" && !cardInputValidator.validateMonth(value)) {
      setErrorText(VALIDATION_MESSAGES.invalidMonthLength);
      updateErrorState(name, true);

      return true;
    }

    if (name === "year" && !cardInputValidator.validateYear(value)) {
      setErrorText(VALIDATION_MESSAGES.expiredYear);
      updateErrorState(name, true);

      return true;
    }

    if (
      (name === "month" && expiryDate.year.length !== INPUT_RULES.maxExpirationDateLength) ||
      (name === "year" && expiryDate.month.length !== INPUT_RULES.maxExpirationDateLength)
    ) {
      setErrorText("");
      updateAllErrorState(false);

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
