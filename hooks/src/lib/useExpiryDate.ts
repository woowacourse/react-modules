import { ChangeEvent, useState } from "react";
import { MAX_DATE_LENGTH, REGEX } from "./constants";

interface ValidationResult {
  isValid: boolean;
  errorMessages: string[];
}

const useExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    errorMessages: [],
  });

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");

    let month = numericValue.substring(0, 2);
    let year = numericValue.substring(2);

    if (
      month.length === 1 &&
      parseInt(month, 10) >= 2 &&
      parseInt(month, 10) <= 9
    ) {
      month = `0${month}`;
    } else if (
      (month.length === 2 && parseInt(month, 10) < 1) ||
      parseInt(month, 10) > 12
    ) {
      month = "01";
      year = numericValue.substring(1, 2);
    } else if (month.length === 3) {
      year = month.slice(2);
      console.log(year);
      month = month.slice(0, 2);
      console.log(month);
    }
    const formattedValue = `${month}${
      month.length === 0 ||
      month.length === 1 ||
      (expiryDate.length === 6 && !year)
        ? ""
        : ` / ${year}`
    }`;

    setTimeout(() => {
      const inputElement = e.target as HTMLInputElement;
      const cursorPosition = inputElement.selectionStart;
      if (year && month.length === 1) {
        e.target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });

    const isMonthNumeric = REGEX.onlyNumber.test(month);
    const isYearNumeric = REGEX.onlyNumber.test(year);
    const isValidMonthLength = month.length === MAX_DATE_LENGTH.expiryMonth;
    const isValidYearLength = year.length === MAX_DATE_LENGTH.expiryYear;

    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth() + 1;

    const dateErrors: string[] = [];

    if (/[a-z]|[A-Z]/.test(value)) {
      dateErrors.push("숫자로 입력해주세요.");
    }

    if (
      !isValidMonthLength ||
      !isValidYearLength ||
      month.length > 2 ||
      year.length > 2
    ) {
      dateErrors.push(`잘못된 형식의 만료일자 입력입니다.`);
    }

    setExpiryDate(formattedValue);
    const inputYear = parseInt(year, 10);
    const inputMonth = parseInt(month, 10);

    if (
      isMonthNumeric &&
      isYearNumeric &&
      isValidMonthLength &&
      isValidYearLength
    ) {
      if (inputYear < currentYear) {
        dateErrors.push("만료된 카드입니다.");
      }

      if (inputYear === currentYear && inputMonth < currentMonth) {
        dateErrors.push("만료된 카드입니다.");
      }
    }

    setValidationResult({
      isValid: dateErrors.length === 0,
      errorMessages: dateErrors,
    });
  };

  return { validationResult, expiryDate, handleExpiryDateChange };
};

export default useExpiryDate;
