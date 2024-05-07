import { useState } from "react";
import { getInputStatus, useInput } from "./useInput";
import { ERROR_MESSAGE } from "../shared/errorMessages";
import validator from "../shared/utils/validator/validator";

const useInputPasswordPrefix = () => {
  const { value, status, setValue, setStatus } = useInput("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    // status 업데이트
    setStatus(getInputStatus(value, event.target.maxLength));

    // Default인 경우 : Error 검사
    if (status !== "default") {
      const [isValid, errorMessage] = validator.passwordPrefix.isValidInput(value);

      // Error인 경우 : 에러 발생
      if (!isValid) {
        setStatus("error");
        setErrorMessage(errorMessage);
      }
    }

    // Error가 아닌 경우 : 값 업데이트
    setValue(value);
    setErrorMessage("");
  };

  const handleBlur = () => {
    // 미완성인 경우 : Error 상태로 판단
    if (["default", "pending"].includes(status)) {
      setStatus("error");
      setErrorMessage(ERROR_MESSAGE.passwordPrefix.isNotFulfilled);
    }
  };

  return [value, status, errorMessage, handleChange, handleBlur];
};

export default useInputPasswordPrefix;
