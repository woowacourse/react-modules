import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";
import { ERROR_MESSAGES } from "../constants/messages";

export type PeriodType = "month" | "year";

function useExpiryDate() {
  const [period, setPeriod] = useState({ month: "", year: "" });
  const [isPeriodError, setIsPeriodError] = useState({
    month: false,
    year: false,
    expired: false,
  });

  const validatePeriod = (value: string, type: PeriodType) => {
    const regex =
      type === "month" ? INPUT_REGEX.period.month : INPUT_REGEX.period.year;
    return regex.test(value);
  };

  const validateExpiration = (month: string, year: string) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const inputYear = parseInt(year, 10);
    const inputMonth = parseInt(month, 10);

    return (
      inputYear > currentYear ||
      (inputYear === currentYear && inputMonth >= currentMonth)
    );
  };

  const handlePeriodChange = (type: PeriodType, value: string) => {
    const newPeriod = { ...period, [type]: value };
    setPeriod(newPeriod);

    const isValidPeriod = validatePeriod(value, type);

    const periodErrors = { ...isPeriodError };
    periodErrors[type] = !isValidPeriod;

    if (newPeriod.month && newPeriod.year) {
      const isExpired = !validateExpiration(newPeriod.month, newPeriod.year);
      periodErrors.expired = isExpired;
    }

    setIsPeriodError(periodErrors);
  };

  const getPeriodErrorMessage = () => {
    if (isPeriodError.month) {
      return ERROR_MESSAGES.month;
    }

    if (isPeriodError.year) {
      return ERROR_MESSAGES.year;
    }

    if (isPeriodError.expired) {
      return ERROR_MESSAGES.expired;
    }
    return undefined;
  };

  return { period, isPeriodError, getPeriodErrorMessage, handlePeriodChange };
}

export default useExpiryDate;
