import { useState } from "react";
import { isExpirationDate } from "../../utils/validation";
import {
  ErrorMessageType,
  ExpirationDateType,
  HookReturnType,
  ListErrorType,
  SetValueFn,
  ValidInputFuncType,
} from "../../types";
import useCheckErrorComplete from "../common/useCheckErrorComplete";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { MAX_LENGTH } from "../../constants";

const KEY_INDEX_MATCH = ["month", "year"];

const useExpirationDate = (): HookReturnType<"expirationDate"> => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState<ListErrorType>([false, false]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const onChange: SetValueFn<ExpirationDateType[keyof ExpirationDateType]> = (value, index) => {
    setExpirationDate((prev) => ({
      ...prev,
      [KEY_INDEX_MATCH[index!]]: value,
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

  const isLengthComplete = useCheckLengthComplete(expirationDate, MAX_LENGTH.EXPIRATION_DATE);
  const isErrorComplete = useCheckErrorComplete(errors);
  const isValid = isLengthComplete && isErrorComplete;

  return {
    state: expirationDate,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isLengthComplete,
    isErrorComplete,
    isValid,
  };
};

export default useExpirationDate;
