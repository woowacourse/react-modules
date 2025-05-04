import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";

const MONTH_VALID_LENGTH = 2;
const YEAR_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_MONTH_RANGE: "1~12까지의 범위만 입력 가능합니다.",
  INVALID_MONTH_FORMAT: "MM형태로 입력해주세요.",
  INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
  INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

const useExpirationDate = () => {
  const [isValid, setIsValid] = useState({
    month: true,
    year: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    month: "",
    year: "",
  });

  const checkMonthRange = (value: string) => {
    const num = Number(value);
    return num >= 1 && num <= 12;
  };

  const checkYearRange = (value: string) => {
    const currentYear = new Date().getFullYear() % 100;
    return Number(value) >= currentYear;
  };

  const validate = (label: "month" | "year", value: string) => {
    let valid = true;
    let message = "";

    const validLength =
      label === "month" ? MONTH_VALID_LENGTH : YEAR_VALID_LENGTH;

    if (!checkValidLength(value, validLength)) {
      message =
        label === "month"
          ? ERROR_MESSAGE.INVALID_MONTH_FORMAT
          : ERROR_MESSAGE.INVALID_YEAR_FORMAT;
      valid = false;
    } else if (!checkNumber(value)) {
      message = ERROR_MESSAGE.INVALID_NUMBER;
      valid = false;
    } else if (
      (label === "month" && !checkMonthRange(value)) ||
      (label === "year" && !checkYearRange(value))
    ) {
      message =
        label === "month"
          ? ERROR_MESSAGE.INVALID_MONTH_RANGE
          : ERROR_MESSAGE.INVALID_YEAR_RANGE;
      valid = false;
    }

    setIsValid((prev) => ({
      ...prev,
      [label]: valid,
    }));

    setErrorMessage((prev) => ({
      ...prev,
      [label]: message,
    }));
  };

  return {
    isValid,
    errorMessage,
    validate,
  };
};

export default useExpirationDate;
