import { useState } from "react";
import { cardStateType, ErrorMessageType, ListErrorType, SetValueFn, SingleErrorType } from "../../types/index";
import useCheckLengthComplete from "./useCheckLengthComplete";
import useCheckErrorComplete from "./useCheckErrorComplete";

interface PropsType<T> {
  initialState: T;
  maxLength: number;
  keyIndexMap?: string[];
}

const useBaseField = <T>(props: PropsType<T>) => {
  const { initialState, maxLength, keyIndexMap } = props;
  const isMulti = typeof initialState === "object" ? true : false;

  const [state, setState] = useState<T>(initialState);

  const [errors, setErrors] = useState<SingleErrorType | ListErrorType>(
    isMulti ? Object.keys(initialState as {}).map(() => false) : false,
  );
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const onChange: SetValueFn<T[keyof T] | T> = (value, index) => {
    if (isMulti) {
      setState((prev) => ({ ...prev, [keyIndexMap![index!]]: value }));
    } else {
      setState(value as T);
    }
  };

  const clearError = (index?: number) => {
    if (index) {
      setErrors((prev) => {
        const updated = [...(prev as ListErrorType)];
        updated[index] = false;
        return updated;
      });
    } else {
      setErrors(false);
    }
    setErrorMessage("");
  };

  const changeError = (message: ErrorMessageType, index?: number) => {
    if (index) {
      setErrors((prev) => {
        const updated = [...(prev as ListErrorType)];
        updated[index] = true;
        return updated;
      });
    } else {
      setErrors(true);
    }
    setErrorMessage(message);
  };

  const isLengthComplete = useCheckLengthComplete(state as cardStateType, maxLength);
  const isErrorComplete = useCheckErrorComplete(errors);
  const isValid = isLengthComplete && isErrorComplete;

  return {
    state,
    errors,
    errorMessage,
    onChange,
    // validateInput,
    clearError,
    changeError,
    isLengthComplete,
    isErrorComplete,
    isValid,
  };
};

export default useBaseField;
