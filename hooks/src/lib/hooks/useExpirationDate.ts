import { useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, validateNumberFieldWithLength } from "../utils/validation";

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
  const numberValidation = validateNumberFieldWithLength(value, MAX_LENGTH);
  if (numberValidation.isError || isEmpty(value)) return numberValidation;

  const numValue = parseInt(value, 10);
  switch (field) {
    case "month":
      if (numValue < 1 || numValue > 12) {
        return {
          isError: true,
          errorMessage: ERROR_MESSAGE.INVALID_MONTH,
        };
      }
      break;

    case "year":
      if (numValue < currentYear) {
        return {
          isError: true,
          errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
        };
      }
      break;
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
