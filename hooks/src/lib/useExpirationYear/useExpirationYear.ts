import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";

const YEAR_VALID_LENGTH = 2;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_YEAR_RANGE: "현재보다 이전년도는 입력할 수 없습니다.",
  INVALID_YEAR_FORMAT: "YY형태로 입력해주세요.",
};

const useExpirationYear = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkYearRange = (value: string) => {
    const currentYear = new Date().getFullYear() % 1000;
    return Number(value) >= currentYear;
  };

  const validate = (value: string) => {
    if (!checkValidLength(value, YEAR_VALID_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_YEAR_FORMAT);
      setIsValid(false);
      return;
    }
    if (!checkNumber(value)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
      setIsValid(false);
      return;
    }
    if (!checkYearRange(value)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_YEAR_RANGE);
      setIsValid(false);
      return;
    }
    setErrorMessage("");
    setIsValid(true);
  };

  return { isValid, errorMessage, validate };
};

export default useExpirationYear;
