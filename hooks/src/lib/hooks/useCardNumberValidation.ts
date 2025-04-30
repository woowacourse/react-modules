import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

interface CardNumberValidationType {
  first: ValidationType;
  second: ValidationType;
  third: ValidationType;
  fourth: ValidationType;
}

interface CardNumberArgs {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
}

const defaultCardNumberValidationValue = {
  first: defaultValidationValue,
  second: defaultValidationValue,
  third: defaultValidationValue,
  fourth: defaultValidationValue,
};

const MAX_LENGTH = 4;

const useCardNumberValidation = (
  args: CardNumberArgs = {}
): CardNumberValidationType => {
  const [cardNumberValidationResult, setCardNumberValidationResult] =
    useState<CardNumberValidationType>(defaultCardNumberValidationValue);

  useEffect(() => {
    Object.entries(args).forEach(([key, value]) => {
      if (!value || isEmpty(value)) return;

      if (!isPositiveInteger(value)) {
        setCardNumberValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
          },
        }));
        return;
      }

      if (!isLengthEqual(value, MAX_LENGTH)) {
        setCardNumberValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
          },
        }));
        return;
      }
    });
  }, [args]);

  return cardNumberValidationResult;
};

export default useCardNumberValidation;
