import { useState } from "react";

interface ErrorType {
  month?: string;
  year?: string;
}

const ERROR_MESSAGE = {
  ONLY_NUMBER: "숫자만 입력해주세요.",
  NOT_VALID_MONTH: "잘못된 월을 입력하셨습니다.",
  NOT_VALID_YEAR: "잘못된 년도를 입력하셨습니다.",
} as const;

const useExpiryPeriod = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [errorMessage, setErrorMessage] = useState<ErrorType>({
    year: undefined,
    month: undefined,
  });

  const resetError = () => {
    setErrorMessage({
      year: undefined,
      month: undefined,
    });
  };

  const setError = (type: "month" | "year", errorMessage: string | undefined) => {
    if (!errorMessage) {
      resetError();
      return;
    }
    setErrorMessage((prev) => {
      const temp = { ...prev };
      temp[type] = errorMessage;
      return temp;
    });
  };

  const currentDate = new Date();
  const currentMonth = Number(currentDate.getMonth()) + 1;
  const currentYear = Number(currentDate.getFullYear().toString().slice(2));

  const setYearWrapper = (value: string) => {
    const year = Number(value);
    if (value.length > 2) return;
    if (Number.isNaN(year)) {
      setError("year", ERROR_MESSAGE.ONLY_NUMBER);
      return;
    }
    if (year === currentYear && Number(month) < currentMonth) {
      setError("month", ERROR_MESSAGE.NOT_VALID_MONTH);
    }
    if (year < currentYear) {
      setError("year", ERROR_MESSAGE.NOT_VALID_YEAR);
    }
    setYear(value);
  };

  const setMonthWrapper = (value: string) => {
    if (Number.isInteger(Number(value)) && 1 <= Number(value) && Number(value) <= 12) {
      setMonth(value);
      return;
    }
    setError("month", ERROR_MESSAGE.NOT_VALID_MONTH);
  };

  return {
    yearState: [year, setYearWrapper] as const,
    monthState: [month, setMonthWrapper] as const,
    isError: Object.values(errorMessage).some((message) => message),
    errorState: {
      errorMessage,
      setYearError: (errorMessage: string) => setError("year", errorMessage),
      setMonthError: (errorMessage: string) => setError("month", errorMessage),
    },
  } as const;
};

export default useExpiryPeriod;
