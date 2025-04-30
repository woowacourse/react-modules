import { ValidationResult } from "../../../../types";

export const validateCardExpiryDate = (
  expiryDate: string
): ValidationResult => {
  if (isNaN(Number(expiryDate))) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }

  if (expiryDate.length !== 4) {
    return {
      isValid: false,
      errorMessage: "유효기간은 4자리여야 합니다.",
    };
  }

  const month = Number(expiryDate.slice(0, 2));
  const year = Number(expiryDate.slice(2, 4));

  if (month < 1 || month > 12) {
    return {
      isValid: false,
      errorMessage: "월은 1~12 사이여야 합니다.",
    };
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const hasYearPassed = year < currentYear;
  const hasMonthPassed = year === currentYear && month < currentMonth;

  if (hasYearPassed || hasMonthPassed) {
    return {
      isValid: false,
      errorMessage: "유효기간이 만료되었습니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};
