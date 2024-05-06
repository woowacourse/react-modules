import { IErrorStatus } from "../useInputValidation";

export const CVCValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "CVC 값은 숫자만 포함해야 합니다." };
    }
    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "CVC 값은 숫자만 포함해야 합니다." };
    }
    if (value.length !== 3) {
      return { isError: true, errorMessage: "CVC는 3자리여야 합니다." };
    }
    return { isError: false, errorMessage: null };
  },
};
