import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE } from "../constants/error";
import isPositiveInteger from "../utils/isPositiveInteger";
import isLengthEqual from "../utils/isLengthEqual";

interface CardNumberValidationType {
  first: ValidationType;
  second: ValidationType;
  third: ValidationType;
  fourth: ValidationType;
}

interface CardNumberArgs {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const defaultErrorState = {
  isError: false,
  errorMessage: null,
};

const defaultCardNumberValidationValue = {
  first: defaultErrorState,
  second: defaultErrorState,
  third: defaultErrorState,
  fourth: defaultErrorState,
};

const MAX_LENGTH = 4;

const useCardNumberValidation = (
  args: CardNumberArgs
): CardNumberValidationType => {
  const [cardNumberValidationResult, setCardNumberValidationResult] =
    useState<CardNumberValidationType>(defaultCardNumberValidationValue);

  useEffect(() => {
    Object.entries(args).forEach(([key, value]) => {
      if (!isPositiveInteger(value)) {
        setCardNumberValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
          },
        }));
      }

      if (!isLengthEqual(value, MAX_LENGTH)) {
        setCardNumberValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
          },
        }));
      }
    });
  }, [args]);

  return cardNumberValidationResult;
};

export default useCardNumberValidation;
