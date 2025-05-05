import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";

function cardExpirationValidation(month: string, year: string) {
  const isCardExpirationError = [
    !isValidMonth(month) ||
      !isValidLength(month, 0, 2) ||
      !isNumber(month) ||
      !isPositiveNumber(month),
    !isValidYear(year) ||
      !isValidLength(year, 0, 2) ||
      !isNumber(year) ||
      !isPositiveNumber(year),
  ];

  const errorText = (() => {
    if (!isNumber(month)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!isPositiveNumber(month)) {
      return "입력값은 양수여야합니다.";
    }
    if (!isValidLength(month, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    if (!isValidMonth(month)) {
      return "월은 1~12 이어야합니다.";
    }
    if (!isNumber(year)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!isPositiveNumber(year)) {
      return "입력값은 양수여야합니다.";
    }
    if (!isValidLength(year, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    if (!isValidYear(year)) {
      return "년도는 25 이상 이어야합니다.";
    }
    return "";
  })();
  return { isCardExpirationError, errorText };
}

export default cardExpirationValidation;

const isValidMonth = (value: string) => {
  const num = Number(value);
  return num >= 1 && num <= 12;
};

const isValidYear = (value: string) => {
  const num = Number(value);
  return num >= 25 && num <= 99;
};
