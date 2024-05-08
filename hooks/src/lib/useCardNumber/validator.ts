import { IErrorStatus } from "../useInputValidation";

const CARD_NUMBER_LENGTH = 16;
export const cardNumberValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    if (value.length > CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${CARD_NUMBER_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }
    if (value.length !== CARD_NUMBER_LENGTH) {
      return {
        isError: true,
        errorMessage: `카드번호는 ${CARD_NUMBER_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },
};
