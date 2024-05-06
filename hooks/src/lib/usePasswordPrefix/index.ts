import { useState } from "react";
import { useValidation, IErrorStatus } from "../useValidation";

interface UsePasswordPrefixReturn {
  passwordPrefix: string;
  setPasswordPrefix: (value: string) => void;
  errorStatus: IErrorStatus;
}

export function usePasswordPrefix(): UsePasswordPrefixReturn {
  const [value, setValue] = useState("");
  const { errorStatus, validateValue } = useValidation(validatePasswordPrefix);

  const setPasswordPrefix = (value: string) => {
    setValue(value);
    validateValue(value);
  };

  return { passwordPrefix: value, setPasswordPrefix, errorStatus };
}

const PASSWORD_PREFIX_LENGTH = 2;

function validatePasswordPrefix(value: string): IErrorStatus {
  if (value.length !== PASSWORD_PREFIX_LENGTH) {
    return {
      isError: true,
      errorMessage: `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리여야 합니다.`,
    };
  }
  if (!/^\d+$/.test(value)) {
    return { isError: true, errorMessage: "비밀번호는 숫자만 포함해야 합니다." };
  }

  return { isError: false, errorMessage: null };
}
