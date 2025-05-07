import { useState } from "react";
import { ValidationResult, DateType } from "./type";
import { ErrorType } from "../../types/errorType";

const EXPIRY_DATE_RULE = {
  INVALID_YEAR_LENGTH_ERROR: "연도는 2자리로 입력해 주세요.",
  INVALID_MONTH_LENGTH_ERROR: "월은 2자리로 입력해 주세요.",
  YEAR_IS_NOT_A_NUMBER: "연도는 숫자로 입력해 주세요.",
  MONTH_IS_NOT_A_NUMBER: "월은 숫자로 입력해 주세요.",
  INVALID_YEAR: "유효하지 않은 연도입니다.",
  INVALID_MONTH: "유효하지 않은 월입니다.",
  DATE_MAX_LENGTH: 2,
  DATE_MONTH_MIN: 1,
  DATE_MONTH_MAX: 12,
  DATE_YEAR_MIN: 25,
} as const;

const initialDate = [
  {
    isValid: false,
    errorMessage: "",
  },
  {
    isValid: false,
    errorMessage: "",
  },
];

export default function useExpiryDate(): ValidationResult {
  const [date, setDate] = useState<DateType>({ month: "", year: "" });
  const [error, setError] = useState<ErrorType[]>(initialDate);

  const updateDate = (index: number, isValid: boolean, message: string) => {
    setError((prev) => {
      const newError = [...prev];
      newError[index] = {
        isValid: isValid,
        errorMessage: message,
      };
      return newError;
    });
  };

  const handleExpiryDateChange = (value: string, dateName: string) => {
    if (dateName === "month") {
      if (value.length > EXPIRY_DATE_RULE.DATE_MAX_LENGTH) return;
      setDate((prev) => ({ ...prev, month: value }));

      if (value === "") {
        updateDate(1, false, "");
        return;
      }

      if (!/^\d*$/.test(value)) {
        updateDate(0, true, EXPIRY_DATE_RULE.MONTH_IS_NOT_A_NUMBER);
        return;
      }
      if (value.length < EXPIRY_DATE_RULE.DATE_MAX_LENGTH) {
        updateDate(0, true, EXPIRY_DATE_RULE.INVALID_MONTH_LENGTH_ERROR);
        return;
      }
      if (
        Number(value) < EXPIRY_DATE_RULE.DATE_MONTH_MIN ||
        Number(value) > EXPIRY_DATE_RULE.DATE_MONTH_MAX
      ) {
        updateDate(0, true, EXPIRY_DATE_RULE.INVALID_MONTH);
        return;
      }
      updateDate(0, false, "");
    }

    if (dateName === "year") {
      if (value.length > EXPIRY_DATE_RULE.DATE_MAX_LENGTH) return;
      setDate((prev) => ({ ...prev, year: value }));

      if (value === "") {
        updateDate(0, false, "");
        return;
      }

      if (!/^\d*$/.test(value)) {
        updateDate(1, true, EXPIRY_DATE_RULE.YEAR_IS_NOT_A_NUMBER);
        return;
      }
      if (value.length < EXPIRY_DATE_RULE.DATE_MAX_LENGTH) {
        updateDate(1, true, EXPIRY_DATE_RULE.INVALID_YEAR_LENGTH_ERROR);
        return;
      }
      if (Number(value) < EXPIRY_DATE_RULE.DATE_YEAR_MIN) {
        updateDate(1, true, EXPIRY_DATE_RULE.INVALID_YEAR);
        return;
      }
      updateDate(1, false, "");
    }
  };

  return { date, error, handleExpiryDateChange };
}
