import { useState } from "react";
import { getInputStatus, useInput } from "./useInput";
import { LEAST_LENGTH } from "../shared/options";
import { ERROR_MESSAGE } from "../shared/errorMessages";
import validator from "../shared/utils/validator/validator";

const useInputPasswordPrefix = () => {
  const { value, status, setValue, setStatus } = useInput("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (value: string) => {
    // status 업데이트
    setStatus(getInputStatus(value, LEAST_LENGTH.passwordPrefix));

    // Default 상태에서 유효성검사 스킵
    if (status === "default") return;

    // 입력 error 상태 업데이트
    const [isValid, errorMessage] = validator.passwordPrefix.isValidInput(value);
    if (isValid) {
      setValue(value);
      setErrorMessage("");
    } else {
      setStatus("error");
      setErrorMessage(errorMessage);
    }
  };

  const handleBlur = () => {
    // 미완성 error 상태 업데이트
    if (status === "pending") {
      setStatus("error");
      setErrorMessage(ERROR_MESSAGE.passwordPrefix.isNotFulfilled);
    }
  };

  return [value, status, errorMessage, handleChange, handleBlur];
};

export default useInputPasswordPrefix;
