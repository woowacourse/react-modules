import { IErrorStatus } from "../useInputValidation";

export const cardNumberValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
    }
    if (value.length !== 4) {
      return { isError: true, errorMessage: "카드번호 한 단위는 4자리로 입력해 주세요." };
    }

    return { isError: false, errorMessage: null };
  },
};
