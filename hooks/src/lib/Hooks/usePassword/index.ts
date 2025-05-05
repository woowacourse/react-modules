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
import useErrorCheckComplete from "../common/useErrorCheckComplete";

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

  const isErrorComplete = useErrorCheckComplete(errors);

  return {
    state: password,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isErrorComplete,
  };
};

export default usePassword;
