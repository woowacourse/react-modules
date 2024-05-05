import { useState } from "react";

interface ErrorType {
  month?: string;
  year?: string;
}

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
      setError("year", "숫자만 입력해주세요.");
      return;
    }
    if (year === currentYear && Number(month) < currentMonth) {
      setError("month", "잘못된 월을 입력하셨습니다.");
    }
    if (year < currentYear) {
      setError("year", "잘못된 년도를 입력하셨습니다.");
    }
    setYear(value);
  };

  const setMonthWrapper = (value: string) => {
    if (Number.isInteger(Number(value)) && 1 <= Number(value) && Number(value) <= 12) {
      setMonth(value);
      return;
    }
    setError("month", "1에서 12사이의 숫자를 입력해주세요");
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
