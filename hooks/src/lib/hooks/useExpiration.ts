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
  const {
    values: expiration,
    changeValues: setExpiration,
    isFullFilled,
  } = useCardInfo({
    initValues: initExpiration,
    maxLength: 3,
  });

  const {
    error: monthError,
    checkValidation: validateMonth,
    getErrorMessage: getMonthErrorMessage,
    isError: isMonthError,
    resetError: resetMonthError,
  } = useError({
    initError: initMonthError,
    getValidationFns: getMonthValidationFns,
  });

  const {
    error: yearError,
    checkValidation: validateYear,
    getErrorMessage: getYearErrorMessage,
    isError: isYearError,
    resetError: resetYearError,
  } = useError({
    initError: initYearError,
    getValidationFns: getYearValidationFns,
  });

  return {
    expiration,
    setExpiration,
    isFullFilled,
    monthError,
    validateMonth,
    getMonthErrorMessage,
    isMonthError,
    resetMonthError,
    yearError,
    isYearError,
    validateYear,
    getYearErrorMessage,
    resetYearError,
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
