import { CARD_BRAND, CARD_NUMBER_LENGTH } from "./constants/cardBrand";
import { IErrorStatus } from "../useInputValidation";
import { REGEX } from "../constants/regex";
import { identifyCardBrand } from "./utils/identifyCardBrand";

const DEFAULT_CARD_NUMBER_LENGTH = 16;
export const cardNumberValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!REGEX.zeroOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    const cardBrand = identifyCardBrand(value);
    const isDiners = cardBrand === CARD_BRAND.Diners;
    const isAmex = cardBrand === CARD_BRAND.AMEX;
    if (isDiners && value.length > CARD_NUMBER_LENGTH.Diners) {
      return {
        isError: true,
        errorMessage: `Diners 카드번호는 ${CARD_NUMBER_LENGTH.Diners}자리로 입력해 주세요.`,
      };
    }

    if (isAmex && value.length > CARD_NUMBER_LENGTH.AMEX) {
      return {
        isError: true,
        errorMessage: `AMEX 카드번호는 ${CARD_NUMBER_LENGTH.AMEX}자리로 입력해 주세요.`,
      };
    }

    if (!isAmex && !isDiners && value.length > DEFAULT_CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${DEFAULT_CARD_NUMBER_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (value.length === 0) {
      return { isError: true, errorMessage: "카드번호를 입력해 주세요." };
    }

    if (!REGEX.oneOrMoreDigits.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    const cardBrand = identifyCardBrand(value);
    const isDiners = cardBrand === CARD_BRAND.Diners;
    const isAmex = cardBrand === CARD_BRAND.AMEX;
    if (isDiners && value.length !== CARD_NUMBER_LENGTH.Diners) {
      return {
        isError: true,
        errorMessage: `Diners 카드번호는 ${CARD_NUMBER_LENGTH.Diners}자리로 입력해 주세요.`,
      };
    }

    if (isAmex && value.length !== CARD_NUMBER_LENGTH.AMEX) {
      return {
        isError: true,
        errorMessage: `AMEX 카드번호는 ${CARD_NUMBER_LENGTH.AMEX}자리로 입력해 주세요.`,
      };
    }

    if (!isAmex && !isDiners && value.length !== DEFAULT_CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${DEFAULT_CARD_NUMBER_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },
};
