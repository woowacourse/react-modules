import { useState } from "react";
import { isNumber } from "../../utils/validation";
import checkNoError from "../../utils/checkNoError";
import {
  CvcNumberType,
  ErrorMessageType,
  HookReturnType,
  SetValueFn,
  SingleErrorType,
  ValidInputFuncType,
} from "../../types";

const useCvcNumber = (): HookReturnType<"cvcNumber"> => {
  const [cvcNumber, setCvcNumber] = useState<CvcNumberType>("");
  const [errors, setErrors] = useState<SingleErrorType>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const onChange: SetValueFn<CvcNumberType> = (value) => setCvcNumber(value);

  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = isNumber(value);
    setErrors(error);
    setErrorMessage(message);
  };

  const noError = checkNoError(errors);

  return {
    state: cvcNumber,
    onChange,
    errors,
    errorMessage,
    validateInput,
    noError,
  };
};

export default useCvcNumber;
