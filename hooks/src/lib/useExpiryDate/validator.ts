import { REGEX } from "../constants/regex";
import { IErrorStatus } from "../useInputValidation";

export const EXPIRY_MONTH_LENGTH = 2;
export const expiryMonthValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!REGEX.zeroOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "유효기간 월(月)은 숫자만 포함해야 합니다." };
    }

    if (value.length > EXPIRY_MONTH_LENGTH) {
      return {
        isError: true,
        errorMessage: `유효기간 월(月)은 ${EXPIRY_MONTH_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!REGEX.oneOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "유효기간 월(月)은 숫자만 포함해야 합니다." };
    }

    if (value.length !== EXPIRY_MONTH_LENGTH) {
      return {
        isError: true,
        errorMessage: `유효기간 월(月)은 ${EXPIRY_MONTH_LENGTH}자리로 입력해 주세요.`,
      };
    }

    if (!REGEX.validMonth.test(value)) {
      return {
        isError: true,
        errorMessage: "유효기간 월(月)은 01월부터 12월 중 하나로 입력해 주세요.",
      };
    }

    return { isError: false, errorMessage: null };
  },
};

const EXPIRY_YEAR_LENGTH = 2;
const MIN_YEAR = 24;
const MAX_YEAR = 40;
export const expiryYearValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!REGEX.zeroOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "유효기간 년도(年)은 숫자만 포함해야 합니다." };
    }

    if (value.length > EXPIRY_YEAR_LENGTH) {
      return {
        isError: true,
        errorMessage: `유효기간 년도(年)은 ${EXPIRY_YEAR_LENGTH}자리로 입력해 주세요`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!REGEX.oneOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "유효기간 년도(年)은 숫자만 포함해야 합니다." };
    }

    if (value.length !== EXPIRY_YEAR_LENGTH) {
      return {
        isError: true,
        errorMessage: `유효기간 년도(年)은 ${EXPIRY_YEAR_LENGTH}자리로 입력해 주세요`,
      };
    }

    if (Number(value) < MIN_YEAR || Number(value) > MAX_YEAR) {
      return {
        isError: true,
        errorMessage: `유효기간 년도(年)은 ${MIN_YEAR}년도부터 ${MAX_YEAR}년도 중 하나로 입력해 주세요`,
      };
    }

    return { isError: false, errorMessage: null };
  },
};
