import { useState } from "react";
import { isNumber } from "../../utils/validation";
import {
  CvcNumberType,
  ErrorMessageType,
  HookReturnType,
  SetValueFn,
  SingleErrorType,
  ValidInputFuncType,
} from "../../types";
import useCheckErrorComplete from "../common/useCheckErrorComplete";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { MAX_LENGTH } from "../../constants";

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

  const isLengthComplete = useCheckLengthComplete(cvcNumber, MAX_LENGTH.CVC_NUMBER);
  const isErrorComplete = useCheckErrorComplete(errors);

  return {
    state: cvcNumber,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isLengthComplete,
    isErrorComplete,
  };
};

export default useCvcNumber;
