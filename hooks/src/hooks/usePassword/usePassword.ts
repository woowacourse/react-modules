import { useState } from "react";
import { ValidationResult } from "./type";
import { ErrorType } from "../../types/errorType";

const PASSWORD_RULE = {
  INVALID_LENGTH_ERROR: "카드 비밀번호는 2자리로 입력해 주세요.",
  NOT_A_NUMBER: "카드 비밀번호는 숫자로 입력해 주세요.",
  MAX_LENGTH: 2,
} as const;

export default function usePassword(): ValidationResult {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ErrorType>({
    isValid: false,
    errorMessage: "",
  });

  const handlePasswordChange = (value: string) => {
    if (value.length > PASSWORD_RULE.MAX_LENGTH) return;

    setPassword(value);

    if (value === "") {
      setError({ isValid: false, errorMessage: "" });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({ isValid: true, errorMessage: PASSWORD_RULE.NOT_A_NUMBER });
      return;
    }
    if (value.length < PASSWORD_RULE.MAX_LENGTH) {
      setError({
        isValid: true,
        errorMessage: PASSWORD_RULE.INVALID_LENGTH_ERROR,
      });
      return;
    }
    setError({ isValid: false, errorMessage: "" });
  };

  return { password, error, handlePasswordChange };
}
