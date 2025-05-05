import {
  commonConditions,
  getErrorByRules,
} from "../../../../utils/validation";
import { ErrorState, ValidationRule } from "../../../types";

const cardExpiryDateConditions = {
  isValidMonth: (value: string) => {
    const month = Number(value.slice(0, 2));
    return month >= 1 && month <= 12;
  },
  isValidExpiryDate: (value: string) => {
    const month = Number(value.slice(0, 2));
    const year = Number(value.slice(2, 4));
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    const isYearValid = year > currentYear;
    const isMonthValid = year === currentYear && month >= currentMonth;

    return isYearValid || isMonthValid;
  },
};

const cardExpiryDateValidationRules: ValidationRule[] = [
  {
    condition: commonConditions.hasLength(4),
    errorMessage: "유효기간은 4자리여야 합니다.",
  },
  {
    condition: cardExpiryDateConditions.isValidMonth,
    errorMessage: "월은 1~12 사이여야 합니다.",
  },
  {
    condition: cardExpiryDateConditions.isValidExpiryDate,
    errorMessage: "유효기간이 만료되었습니다.",
  },
];

export const getCardExpiryDateError = (expiryDate: string): ErrorState => {
  return getErrorByRules(expiryDate, cardExpiryDateValidationRules);
};
