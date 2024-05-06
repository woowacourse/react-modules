import { IErrorStatus } from "../useInputValidation";

const CVC_LENGTH = 3;
export const CVCValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "CVC 값은 숫자만 포함해야 합니다." };
    }

    if (value.length > CVC_LENGTH) {
      return { isError: true, errorMessage: `CVC는 ${CVC_LENGTH}자리여야 합니다.` };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "CVC 값은 숫자만 포함해야 합니다." };
    }
    if (value.length !== CVC_LENGTH) {
      return { isError: true, errorMessage: `CVC는 ${CVC_LENGTH}자리여야 합니다.` };
    }
    return { isError: false, errorMessage: null };
  },
};
