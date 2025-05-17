import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";
import { CardInputError } from "../types/cardErrorType";

const MONTH_VALID_LENGTH = 2;
const YEAR_VALID_LENGTH = 2;

export const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_MONTH_RANGE: "1~12까지의 범위만 입력 가능합니다.",
  INVALID_MONTH_FORMAT: "MM형태로 입력해주세요.",
  INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
  INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

interface ExpirationDateError {
  month: CardInputError;
  year: CardInputError;
}
type ExpDateField = "month" | "year";

const useExpirationDate = () => {
  const [expDate, setExpDate] = useState({ month: "", year: "" });
  const [validationResult, setValidationResult] = useState<ExpirationDateError>(
    {
      month: { errorState: false, message: "" },
      year: { errorState: false, message: "" },
    }
  );

  const checkMonthRange = (value: string) => {
    const num = Number(value);
    return num >= 1 && num <= 12;
  };

  const checkYearRange = (value: string) => {
    const currentYear = new Date().getFullYear() % 100;
    return Number(value) >= currentYear;
  };

  const validate = (label: "month" | "year", value: string) => {
    const validLength =
      label === "month" ? MONTH_VALID_LENGTH : YEAR_VALID_LENGTH;

    if (!checkValidLength(value, validLength)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message:
            label === "month"
              ? ERROR_MESSAGE.INVALID_MONTH_FORMAT
              : ERROR_MESSAGE.INVALID_YEAR_FORMAT,
        },
      }));
      return;
    }

    if (!checkNumber(value)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message: ERROR_MESSAGE.INVALID_NUMBER,
        },
      }));
      return;
    }

    if (label === "month" && !checkMonthRange(value)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message: ERROR_MESSAGE.INVALID_MONTH_RANGE,
        },
      }));
      return;
    }

    if (label === "year" && !checkYearRange(value)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message: ERROR_MESSAGE.INVALID_YEAR_RANGE,
        },
      }));
      return;
    }

    setValidationResult((prev) => ({
      ...prev,
      [label]: { errorState: false, message: "" },
    }));
  };

  const handleChange = ({
    name,
    value,
  }: {
    name: ExpDateField;
    value: string;
  }) => {
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
