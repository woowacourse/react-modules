import useIsNumber from "./useIsNumber";
import useIsPositiveNumber from "./useIsPositiveNumber";
import useIsValidLength from "./useIsValidLength";

function useCardExpirationValidation(month: string, year: string) {
  const isCardExpirationError = [
    !isValidMonth(month) ||
      !useIsValidLength(month, 0, 2) ||
      !useIsNumber(month) ||
      !useIsPositiveNumber(month),
    !isValidYear(year) ||
      !useIsValidLength(year, 0, 2) ||
      !useIsNumber(year) ||
      !useIsPositiveNumber(year),
  ];

  const errorText = (() => {
    if (!useIsNumber(month)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!useIsPositiveNumber(month)) {
      return "입력값은 양수여야합니다.";
    }
    if (!useIsValidLength(month, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    if (!isValidMonth(month)) {
      return "월은 1~12 이어야합니다.";
    }
    if (!useIsNumber(year)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!useIsPositiveNumber(year)) {
      return "입력값은 양수여야합니다.";
    }
    if (!useIsValidLength(year, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    if (!isValidYear(year)) {
      return "년도는 25 이상 이어야합니다.";
    }
    return "";
  })();
  return { isCardExpirationError, errorText };
}

export default useCardExpirationValidation;

const isValidMonth = (value: string) => {
  const num = Number(value);
  return num >= 1 && num <= 12;
};

const isValidYear = (value: string) => {
  const num = Number(value);
  return num >= 25 && num <= 99;
};
