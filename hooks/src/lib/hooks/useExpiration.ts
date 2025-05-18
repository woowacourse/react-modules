import useCardInfo from "./useCardInfo";
import useError from "./useError";
import {
  isValidLength,
  isValidMonthRange,
  isValidNumber,
  isValidYearRange,
} from "../util";

export default function useExpiration({
  initExpiration,
  initMonthError,
  initYearError,
}: {
  initExpiration: Record<string, string>;
  initMonthError: Record<string, string>;
  initYearError: Record<string, string>;
}) {
  const expiration = useCardInfo({
    initValues: initExpiration,
    maxLength: 3,
  });

  const monthError = useError({
    initError: initMonthError,
    getValidationFns: getMonthValidationFns,
  });

  const yearError = useError({
    initError: initYearError,
    getValidationFns: getYearValidationFns,
  });

  return {
    expiration,
    monthError,
    yearError,
  };
}

const ERROR_MESSAGE = {
  LENGTH: "2자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
  MONTH_RANGE: "유효기간은 1~12월 사이여야 합니다.",
  YEAR_RANGE: "유효기간은 25~99년 사이여야 합니다.",
};

function getMonthValidationFns(maxLength: number, month: string) {
  return [
    {
      condition: () => !isValidLength(month, maxLength),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(month),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
    {
      condition: () => !isValidMonthRange(month),
      errorMsg: ERROR_MESSAGE.MONTH_RANGE,
    },
  ];
}

function getYearValidationFns(maxLength: number, year: string) {
  return [
    {
      condition: () => !isValidLength(year, maxLength),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(year),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
    {
      condition: () => !isValidYearRange(year),
      errorMsg: ERROR_MESSAGE.YEAR_RANGE,
    },
  ];
}
