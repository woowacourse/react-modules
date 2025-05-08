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
  const [expDate, setExpDate] = useState({ month: "", year: "" });
  const [validationResult, setValidationResult] = useState({
    month: { state: false, message: "" },
    year: { state: false, message: "" },
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
    let isError = false;
    let message = "";

    const validLength =
      label === "month" ? MONTH_VALID_LENGTH : YEAR_VALID_LENGTH;

    if (!checkValidLength(value, validLength)) {
      message =
        label === "month"
          ? ERROR_MESSAGE.INVALID_MONTH_FORMAT
          : ERROR_MESSAGE.INVALID_YEAR_FORMAT;
      isError = true;
    } else if (!checkNumber(value)) {
      message = ERROR_MESSAGE.INVALID_NUMBER;
      isError = true;
    } else if (
      (label === "month" && !checkMonthRange(value)) ||
      (label === "year" && !checkYearRange(value))
    ) {
      message =
        label === "month"
          ? ERROR_MESSAGE.INVALID_MONTH_RANGE
          : ERROR_MESSAGE.INVALID_YEAR_RANGE;
      isError = true;
    }

    setValidationResult((prev) => ({
      ...prev,
      [label]: { state: isError, message },
    }));

    return { state: isError, message };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name !== "month" && name !== "year") return;

    setExpDate((prev) => ({
      ...prev,
      [name]: value,
    }));

    validate(name, value);
  };

  return {
    expDate,
    handleChange,
    validationResult,
  };
};

export default useExpirationDate;
