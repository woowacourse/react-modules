import { useState } from "react";
import { cardStateType, SetValueFn } from "../../types/index";
import useCheckLengthComplete from "./useCheckLengthComplete";

interface InputValueType<T> {
  initialState: T;
  maxLength: number;
  keyIndexMap?: string[];
}

const useInputValue = <T>(props: InputValueType<T>) => {
  const { initialState, maxLength, keyIndexMap } = props;
  const [state, setState] = useState<T>(initialState);

  const onChange: SetValueFn<T[keyof T] | T> = (value, index) => {
    if (typeof initialState === "object") {
      setState((prev) => ({ ...prev, [keyIndexMap![index!]]: value }));
    } else {
      setState(value as T);
    }
  };

  const isLengthComplete = useCheckLengthComplete(state as cardStateType, maxLength);

  return {
    state,
    onChange,
    isLengthComplete,
  };
};

export default useInputValue;
