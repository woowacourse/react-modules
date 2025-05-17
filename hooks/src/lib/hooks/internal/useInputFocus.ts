import { useCallback, useRef } from "react";

interface useInputFocusProps {
  inputFieldLength: number;
  validateInputLength: (value: string, index: number) => boolean;
}

export function useInputFocus({
  inputFieldLength,
  validateInputLength,
}: useInputFocusProps) {
  const inputRefs = Array.from({ length: inputFieldLength }, () =>
    useRef<HTMLInputElement>(null)
  );

  const moveToNext = useCallback(
    (value: string, index: number) => {
      if (validateInputLength(value, index) && inputRefs[index + 1])
        inputRefs[index + 1].current?.focus();

      console.log(validateInputLength(value, index), value, index);
    },
    [inputRefs]
  );

  return { inputRefs, moveToNext };
}
