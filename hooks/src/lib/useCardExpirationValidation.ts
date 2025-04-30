import useIsNumber from "./useIsNumber";
import useIsValidLength from "./useIsValidLength";

function useCardExpirationValidation(month: string, year: string) {
  const isCardExpirationError = [
    !isValidMonth(month) ||
      !useIsValidLength(month, 0, 2) ||
      !useIsNumber(month),
    !isValidYear(year) || !useIsValidLength(year, 0, 2) || !useIsNumber(year),
  ];

  return { isCardExpirationError };
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
