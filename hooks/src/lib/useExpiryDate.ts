import { useState } from "react";

const numberRegex = /^[0-9]*$/;
const MONTH_MIN = 1;
const MONTH_MAX = 12;

export default function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState({
    month: "",
    year: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    month: "",
    year: "",
  });

  const isValid = Object.values(errorMessage).every(
    (message) => message === ""
  );

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    dateType: string
  ) => {
    const value = event.target.value;

    if (!dateType || !numberRegex.test(value)) return;

    setExpiryDate({ ...expiryDate, [dateType]: value });

    if (dateType === "year") {
      const current = new Date();
      const year = Number(value);
      const month = Number(expiryDate["month"]);
      const currentYear = current.getFullYear() % 100;
      const currentMonth = current.getMonth() + 1;

      if (year < currentYear) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "유효 기간이 만료된 카드 입니다.",
        });
        return;
      }

      if (year === currentYear && month < currentMonth) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "유효 기간이 만료된 카드 입니다.",
        });
        return;
      }

      setErrorMessage({
        ...errorMessage,
        [dateType]: "",
      });
    }

    if (dateType === "month") {
      const current = new Date();
      const year = Number(expiryDate["year"]);
      const month = Number(value);
      const currentYear = current.getFullYear() % 100;
      const currentMonth = current.getMonth() + 1;

      if (month < MONTH_MIN || month > MONTH_MAX) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "1~12 사이의 숫자를 입력해 주세요.",
        });
        return;
      }

      if (year === currentYear && month < currentMonth) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "유효 기간이 만료된 카드 입니다.",
        });

        return;
      }

      setErrorMessage({
        ...errorMessage,
        [dateType]: "",
      });
    }
  };

  return { errorMessage, isValid, expiryDate, handleExpiryDateChange };
}
