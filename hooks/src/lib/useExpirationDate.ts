import { useState } from "react";
import { DEFAULT_ERROR_MESSAGE } from "./constants/messages";

interface ExpirationDateInput {
  month: string;
  year: string;
}

interface ErrorMessageProps {
  customErrorMessages?: {
    format?: string;
    twoDigits?: string;
    invalidMonth?: string;
  };
}

const useExpirationDate = ({ customErrorMessages }: ErrorMessageProps) => {
  const [isValid, setIsValid] = useState({ month: true, year: true });
  const [errorMessage, setErrorMessage] = useState("");

  const handleExpirationDate = ({ month, year }: ExpirationDateInput) => {
    const monthResult = validateMonth(month);
    const yearResult = validateYear(year);

    setIsValid({ month: monthResult.isValid, year: yearResult.isValid });
    setErrorMessage(monthResult.errorMessage || yearResult.errorMessage || "");
  };

  const validateMonth = (month: string) => {
    if (!isNumber(month)) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.format ??
          DEFAULT_ERROR_MESSAGE.INVALID_EXPIRATION_NUMBER_FORMAT,
      };
    }
    if (!isTwoDigits(month)) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.twoDigits ??
          DEFAULT_ERROR_MESSAGE.INVALID_EXPIRATION_TWO_DIGITS,
      };
    }
    if (!isValidMonth(month)) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.invalidMonth ??
          DEFAULT_ERROR_MESSAGE.INVALID_EXPIRATION_MONTH_RANGE,
      };
    }

    return { isValid: true, errorMessage: "" };
  };

  const validateYear = (year: string) => {
    if (!isNumber(year)) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.format ??
          DEFAULT_ERROR_MESSAGE.INVALID_EXPIRATION_NUMBER_FORMAT,
      };
    }
    if (!isTwoDigits(year)) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.twoDigits ??
          DEFAULT_ERROR_MESSAGE.INVALID_EXPIRATION_TWO_DIGITS,
      };
    }

    return { isValid: true, errorMessage: "" };
  };

  return { handleExpirationDate, isValid, errorMessage };
};

const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

const isTwoDigits = (value: string) => {
  return value.length === 2;
};

const isValidMonth = (month: string) => {
  const monthNumber = Number(month);
  return monthNumber >= 1 && monthNumber <= 12;
};

export default useExpirationDate;
