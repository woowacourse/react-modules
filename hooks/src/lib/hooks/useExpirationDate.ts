import { ValidationType } from "../../types/validation";
import { useState } from "react";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

type ExpirationDateFieldType = "month" | "year";

interface ExpirationDateType {
  month: string;
  year: string;
}

interface ExpirationDateValidationType {
  month: ValidationType;
  year: ValidationType;
}

interface UserExpirationDateReturn {
  expirationDate: ExpirationDateType;
  expirationDateValidation: ExpirationDateValidationType;
  handleExpirationDateChange: (
    field: ExpirationDateFieldType,
    value: string
  ) => void;
}

const initialExpirationDate = {
  month: "",
  year: "",
};

const initialExpirationDateValidationValue = {
  month: defaultValidationValue,
  year: defaultValidationValue,
};

const MAX_LENGTH = 2;
const currentYear = new Date().getFullYear() % 100;

const validateExpirationDateField = (
  field: ExpirationDateFieldType,
  value: string
): ValidationType => {
  if (!value || isEmpty(value)) return defaultValidationValue;

  if (!isPositiveInteger(value)) {
    return {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };
  }

  if (!isLengthEqual(value, MAX_LENGTH)) {
    return {
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };
  }

  if (field === "month") {
    const monthNumber = parseInt(value, 10);
    if (monthNumber < 1 || monthNumber > 12) {
      return {
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_MONTH,
      };
    }
  }

  if (field === "year") {
    const yearNumber = parseInt(value, 10);
    if (yearNumber < currentYear) {
      return {
        isError: true,
        errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
      };
    }
  }

  return defaultValidationValue;
};

const useExpirationDate = (): UserExpirationDateReturn => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>(
    initialExpirationDate
  );
  const [expirationDateValidation, setExpirationDateValidation] =
    useState<ExpirationDateValidationType>(
      initialExpirationDateValidationValue
    );

  const handleExpirationDateChange = (
    field: ExpirationDateFieldType,
    value: string
  ) => {
    setExpirationDate((prev) => ({ ...prev, [field]: value }));
    const validationResult = validateExpirationDateField(field, value);
    setExpirationDateValidation((prev) => ({
      ...prev,
      [field]: validationResult,
    }));
  };

  return {
    expirationDate,
    expirationDateValidation,
    handleExpirationDateChange,
  };
};

export default useExpirationDate;
