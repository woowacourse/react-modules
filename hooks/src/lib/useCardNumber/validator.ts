import { CARD_BRAND, CARD_NUMBER_LENGTH } from "./constants/cardBrand";
import { IErrorStatus } from "../useInputValidation";
import { hasCardBrand } from "./utils/hasCardBrand";

const DEFAULT_CARD_NUMBER_LENGTH = 16;
export const cardNumberValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    if (value.length > DEFAULT_CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${DEFAULT_CARD_NUMBER_LENGTH}자리로 입력해 주세요. (${CARD_BRAND.Diners} - ${CARD_NUMBER_LENGTH.Diners}자리, ${CARD_BRAND.AMEX} - ${CARD_NUMBER_LENGTH.AMEX}자리 제외)`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    if (!hasCardBrand(value) && value.length !== DEFAULT_CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${DEFAULT_CARD_NUMBER_LENGTH}자리로 입력해 주세요. (${CARD_BRAND.Diners} - ${CARD_NUMBER_LENGTH.Diners}자리, ${CARD_BRAND.AMEX} - ${CARD_NUMBER_LENGTH.AMEX}자리 제외)`,
      };
    }

    return { isError: false, errorMessage: null };
  },
};
