import { useState } from "react";
import { isNumber } from "../../utils/validation";
import {
  ErrorMessageType,
  HookReturnType,
  PasswordType,
  SetValueFn,
  SingleErrorType,
  ValidInputFuncType,
} from "../../types";
import useCheckErrorComplete from "../common/useCheckErrorComplete";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { MAX_LENGTH } from "../../constants";

const usePassword = (): HookReturnType<"password"> => {
  const [password, setPassword] = useState<PasswordType>("");
  const [errors, setErrors] = useState<SingleErrorType>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const onChange: SetValueFn<PasswordType> = (value) => setPassword(value);

  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = isNumber(value);
    setErrors(error);
    setErrorMessage(message);
  };

  const isLengthComplete = useCheckLengthComplete(password, MAX_LENGTH.PASSWORD);
  const isErrorComplete = useCheckErrorComplete(errors);
  const isValid = isLengthComplete && isErrorComplete;

  return {
    state: password,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isLengthComplete,
    isErrorComplete,
    isValid,
  };
};

export default usePassword;
