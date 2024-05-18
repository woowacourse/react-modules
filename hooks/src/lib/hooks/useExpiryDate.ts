import { useMemo, useState } from "react";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import { ValidationResult } from "./../../type.d";

type ExpiryDate = {
  month: string;
  year: string;
};

export function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({ month: "", year: "" });
  const [isTouched, setIsTouched] = useState({ month: false, year: false });

  function validateExpiryDate(expiryDate: ExpiryDate): ValidationResult {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const montNumber = Number(expiryDate.month);
    const yearNumber = 2000 + Number(expiryDate.year);

    if (isTouched.month) {
      // 월 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
      if (expiryDate.month === "") {
        return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
      }

      // 월에 입력된 문자열이 숫자가 아니라면 에러 발생
      if (!/^\d+$/.test(expiryDate.month)) {
        return {
          isValid: false,
          errorMessage: ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_MONTH_FORMAT,
        };
      }

      // 월에 입력된 문자열이 1부터 12 사이의 값이 아니라면 에러 발생
      if (montNumber < 1 || montNumber > 12) {
        return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_EXPIRY_DATE.MONTH_OUT_OF_RANGE };
      }
    }

    if (isTouched.year) {
      // 년도 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
      if (expiryDate.year === "") {
        return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
      }

      // 년도에 입력된 문자열이 1부터 99 사이의 2자리가 아니라면 에러 발생
      if (!/^\d{2}$/.test(expiryDate.year)) {
        return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_YEAR_FORMAT };
      }
    }

    if (isTouched.month && isTouched.year) {
      // 월과 년도에 입력된 문자열이 현재날짜보다 과거라면 에러 발생
      if (yearNumber < currentYear || (yearNumber === currentYear && montNumber < currentMonth)) {
        return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_EXPIRY_DATE.EXPIRED_CARD };
      }
    }

    return { isValid: true };
  }

  function handleExpiryDateChange(option: "year" | "month", value: string) {
    if (!isTouched[option]) setIsTouched((prev) => ({ ...prev, [option]: true }));
    setExpiryDate((prev) => ({ ...prev, [option]: value }));
  }

  const cardExpiryDateValidationResult = useMemo(
    () => validateExpiryDate(expiryDate),
    [expiryDate, isTouched]
  );

  return { expiryDate, handleExpiryDateChange, cardExpiryDateValidationResult };
}
