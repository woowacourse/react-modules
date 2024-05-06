import { useState } from "react";
import { useValidation, IErrorStatus } from "../useValidation";

interface UseExpiryDateReturn {
  expiryMonth: string;
  setExpiryMonth: (value: string) => void;
  expiryMonthErrorStatus: IErrorStatus;
  expiryYear: string;
  setExpiryYear: (value: string) => void;
  expiryYearErrorStatus: IErrorStatus;
}

export function useExpiryDate(): UseExpiryDateReturn {
  const [expiryMonthValue, setExpiryMonthValue] = useState("");
  const { errorStatus: expiryMonthErrorStatus, validateValue: validateExpiryMonth } =
    useValidation(validateMonth);

  const [expiryYearValue, setExpiryYearValue] = useState("");
  const { errorStatus: expiryYearErrorStatus, validateValue: validateExpiryYear } =
    useValidation(validateYear);

  const setExpiryMonth = (value: string) => {
    setExpiryMonthValue(value);
    validateExpiryMonth(value);
  };

  const setExpiryYear = (value: string) => {
    setExpiryYearValue(value);
    validateExpiryYear(value);
  };

  return {
    expiryMonth: expiryMonthValue,
    setExpiryMonth,
    expiryMonthErrorStatus,
    expiryYear: expiryYearValue,
    setExpiryYear,
    expiryYearErrorStatus,
  };
}

const EXPIRY_MONTH_LENGTH = 2;
function validateMonth(value: string): IErrorStatus {
  if (value.length !== EXPIRY_MONTH_LENGTH) {
    return { isError: true, errorMessage: "유효기간 월(月)은 2자리로 입력해 주세요." };
  }

  if (!/^(0[1-9]|1[0-2])$/.test(value)) {
    return {
      isError: true,
      errorMessage: "유효기간 월(月)은 01월부터 12월 중 하나로 입력해 주세요.",
    };
  }

  return { isError: false, errorMessage: null };
}

const EXPIRY_YEAR_LENGTH = 2;
const MIN_YEAR = 24;
const MAX_YEAR = 40;
function validateYear(value: string): IErrorStatus {
  if (value.length !== EXPIRY_YEAR_LENGTH) {
    return { isError: true, errorMessage: "유효기간 년도(年)는 2자리로 입력해 주세요" };
  }

  if (Number(value) < MIN_YEAR || Number(value) > MAX_YEAR) {
    return {
      isError: true,
      errorMessage: "유효기간 년도(年)는 24년도부터 40년도 중 하나로 입력해 주세요",
    };
  }

  return { isError: false, errorMessage: null };
}
