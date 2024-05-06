import { IErrorStatus } from "../useInputValidation";

const PASSWORD_PREFIX_LENGTH = 2;
export const passwordPrefixValidator = {
  onChange: (value: string): IErrorStatus => {
    if (!/^\d*$/.test(value)) {
      return { isError: true, errorMessage: "비밀번호는 숫자만 포함해야 합니다." };
    }

    if (value.length > PASSWORD_PREFIX_LENGTH) {
      return {
        isError: true,
        errorMessage: `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },

  onBlur: (value: string): IErrorStatus => {
    if (!/^\d+$/.test(value)) {
      return { isError: true, errorMessage: "비밀번호는 숫자만 포함해야 합니다." };
    }

    if (value.length !== PASSWORD_PREFIX_LENGTH) {
      return {
        isError: true,
        errorMessage: `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리로 입력해 주세요.`,
      };
    }

    return { isError: false, errorMessage: null };
  },
};
