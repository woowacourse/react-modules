import { useState } from "react";
import { cardStateType } from "../../types/index";
import useCheckLengthComplete from "./useCheckLengthComplete";

interface InputValueType<T> {
  initialState: T;
  maxLength: number;
  splitter?: string;
}

const useInputValue = <T extends string>(props: InputValueType<T>) => {
  const { initialState, maxLength, splitter = " " } = props;
  const [state, setState] = useState<T>(initialState);

  const onChange = (value: T) => {
    const regex = new RegExp(splitter, "g");
    const cleanValue = value.replace(regex, "") as T;
    if (cleanValue.length <= maxLength) setState(cleanValue);
  };

  const isLengthComplete = useCheckLengthComplete(state as cardStateType, maxLength);

  return {
    state,
    onChange,
    isLengthComplete,
  };
};

export default useInputValue;
