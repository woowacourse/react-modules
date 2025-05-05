import { useState } from "react";
import { isExpirationDate } from "../../utils/validation";
import checkNoError from "../../utils/checkNoError";
import {
  ErrorMessageType,
  ExpirationDateType,
  HookReturnType,
  ListErrorType,
  SetValueFn,
  ValidInputFuncType,
} from "../../types";

const KEY_INDEX_MATCH = ["month", "year"];

const useExpirationDate = (): HookReturnType<"expirationDate"> => {
  /** 상태 및 변수 관리 */
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState<ListErrorType>([false, false]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  /** setter(상태업데이트) */
  const onChange: SetValueFn<ExpirationDateType[keyof ExpirationDateType]> = (
    value,
    index
  ) => {
    if (index === undefined) return;

    // setter 상태업데이트
    setExpirationDate((prev) => ({
      ...prev,
      [KEY_INDEX_MATCH[index]]: value,
    }));
  };

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const inputType = index === 0 ? "month" : "year";
    const { error, message } = isExpirationDate(inputType, value);

    setErrors((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const noError = checkNoError(errors);

  return {
    state: expirationDate,
    onChange,
    errors,
    errorMessage,
    validateInput,
    noError,
  };
};

export default useExpirationDate;
