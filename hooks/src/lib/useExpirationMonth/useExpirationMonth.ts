import { useState } from "react";

const MONTH_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_MONTH_RANGE: "1~12까지의 범위만 입력 가능합니다.",
  INVALID_MONTH_FORMAT: "MM형태로 입력해주세요.",
};

const useExpirationMonth = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isValidLength = (value: string) => {
    return value.length < MONTH_VALID_LENGTH;
  };

  const isNumber = (value: string) => {
    return !/^\d+$/.test(value);
  };

  const isValidRange = (value: string) => {
    return Number(value) < 1 || Number(value) > 12;
  };

  const validate = () => {
    if (!isValidLength) {
      setErrorMessage(ERROR_MESSAGE.INVALID_MONTH_FORMAT);
      setIsValid(false);
      return;
    }
    if (!isNumber) {
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
      setIsValid(false);
      return;
    }

    if (!isValidRange) {
      setErrorMessage(ERROR_MESSAGE.INVALID_MONTH_RANGE);
      setIsValid(false);
      return;
    }
  };

  return { isValid, errorMessage, validate };
};

export default useExpirationMonth;
