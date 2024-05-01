import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";

const useExpiryDate = () => {
  const [period, setPeriod] = useState({ month: "", year: "" });
  const [periodErrorState, setPeriodErrorState] = useState({
    isError: {
      month: false,
      year: false,
      expired: false,
    },
    errorMessage: {
      month: "",
      year: "",
      expired: "",
    },
  });

  const validatePeriod = (value: string, type: "month" | "year") => {
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

  const handlePeriodChange = (type: "month" | "year", value: string) => {
    const newPeriod = { ...period, [type]: value };
    setPeriod(newPeriod);

    const isValidPeriod = validatePeriod(value, type);

    const newErrorMessage = { ...periodErrorState.errorMessage };

    if (!isValidPeriod) {
      newErrorMessage[type] = `올바르지 않은 ${
        type === "month" ? "월" : "년도"
      } 형식입니다.`;
    } else {
      newErrorMessage[type] = "";
    }

    if (isValidPeriod && newPeriod.month && newPeriod.year) {
      const isExpired = !validateExpiration(newPeriod.month, newPeriod.year);
      newErrorMessage["expired"] = isExpired
        ? "카드의 유효 기간이 만료되었습니다."
        : "";
    }

    setPeriodErrorState((prevState) => ({
      isError: {
        ...prevState.isError,
        [type]: !isValidPeriod,
        expired: isValidPeriod
          ? validateExpiration(newPeriod.month, newPeriod.year)
          : prevState.isError.expired,
      },
      errorMessage: newErrorMessage,
    }));
  };

  return { period, periodErrorState, handlePeriodChange };
};

export default useExpiryDate;
