import { ChangeEvent, FocusEventHandler, useEffect, useRef, useState } from "react";
import useRestrictedState from "./useRestrictedState";

interface InputAttributes {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEventHandler<HTMLInputElement>) => void;
}

const useInput = () => {
  const [valueMap, setValueMap] = useState<Record<string, string>>({});
  // const errorMap = {};

  const useRegister = (name: string, { onChange, onBlur }: InputAttributes = {}) => {
    const { valueState, errorState } = useRestrictedState();
    const { value, setValue } = valueState;
    // const { isError, errorMessage, setError } = errorState;

    //TODO: Blur되었을 경우 register내부 에러를 관찰하여 에러가 있으면 바깥 에러에 할당한다.

    const ref = useRef<HTMLInputElement>(null);

    const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setValueMap((prev) => ({ ...prev, [name]: e.target.value }));
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

    return { onChange: onChangeWrapper, onBlur, name, ref, value };
  };

  //
  return { register: useRegister, valueMap };
};

export default useInput;
