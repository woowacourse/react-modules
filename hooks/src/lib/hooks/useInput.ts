import { ChangeEvent, FocusEventHandler, useEffect, useRef } from "react";
import useRestrictedState from "./useRestrictedState";

interface InputAttributes {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEventHandler<HTMLInputElement>) => void;
}

const useInput = (name?: string, { onChange, onBlur }: InputAttributes = {}) => {
  const { valueState, errorState } = useRestrictedState();
  const { value, setValue } = valueState;
  const { isError, errorMessage, setError } = errorState;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("change", onChangeWrapper);
      return () => {
        ref.current?.removeEventListener("change", onChangeWrapper);
      };
    }
  }, [onChange]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("blur", onBlur);
      return () => {
        ref.current?.removeEventListener("blur", onBlur);
      };
    }
  }, [onBlur]);

  console.log(value);

  return { register: { onChange: onChangeWrapper, onBlur, name, ref, value }, error: { isError, errorMessage } };
};

export default useInput;
