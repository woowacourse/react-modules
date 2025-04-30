import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

interface ExpirationDateValidationType {
  month: ValidationType;
  year: ValidationType;
}

interface ExpirationDateArgs {
  month?: string;
  year?: string;
}

const defaultExpirationDateValidationValue = {
  month: defaultValidationValue,
  year: defaultValidationValue,
};

const MAX_LENGTH = 2;
const currentYear = new Date().getFullYear() % 100;

const useExpirationDateValidation = (
  args: ExpirationDateArgs = {}
): ExpirationDateValidationType => {
  const [expirationDateValidationResult, setExpirationDateValidationResult] =
    useState<ExpirationDateValidationType>(
      defaultExpirationDateValidationValue
    );

  useEffect(() => {
    setExpirationDateValidationResult(defaultExpirationDateValidationValue);

    Object.entries(args).forEach(([key, value]) => {
      if (!value || isEmpty(value)) return;

      if (!isPositiveInteger(value)) {
        setExpirationDateValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
          },
        }));
        return;
      }

      if (!isLengthEqual(value, MAX_LENGTH)) {
        setExpirationDateValidationResult((prev) => ({
          ...prev,
          [key]: {
            isError: true,
            errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
          },
        }));
        return;
      }

      if (key === "month") {
        const monthNumber = parseInt(value, 10);
        if (monthNumber < 1 || monthNumber > 12) {
          setExpirationDateValidationResult((prev) => ({
            ...prev,
            [key]: {
              isError: true,
              errorMessage: ERROR_MESSAGE.INVALID_MONTH,
            },
          }));
        }
      }

      if (key === "year") {
        const yearNumber = parseInt(value, 10);
        if (yearNumber < currentYear) {
          setExpirationDateValidationResult((prev) => ({
            ...prev,
            [key]: {
              isError: true,
              errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
            },
          }));
        }
      }
    });
  }, [args]);

  return expirationDateValidationResult;
};

export default useExpirationDateValidation;
