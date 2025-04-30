import { useState } from "react";

const numberRegex = /^[0-9]*$/;

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
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const dateType = event.target.dataset.dateType;

    if (!dateType || numberRegex.test(value)) return;

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
      }

      if (year === currentYear && month < currentMonth) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "유효 기간이 만료된 카드 입니다.",
        });
      }
    }

    if (dateType === "month") {
      const current = new Date();
      const year = Number(expiryDate["year"]);
      const month = Number(value);
      const currentYear = current.getFullYear() % 100;
      const currentMonth = current.getMonth() + 1;

      if (year === currentYear && month < currentMonth) {
        setErrorMessage({
          ...errorMessage,
          [dateType]: "유효 기간이 만료된 카드 입니다.",
        });
      }
    }
  };

  return { errorMessage, isValid, expiryDate, handleExpiryDateChange };
}
