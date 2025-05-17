import { Dispatch, useState } from "react";
import validateExpiryDateNumber from "../util/validateExpiryDateNumber/validateExpiryDateNumber";
import { useInputFocus } from "./internal/useInputFocus";
import limitInputNumber from "../util/limitInputNumber/limitInputNumber";
import { EXPIRY_DATE_LENGTH } from "../constants";

interface UseExpiryDateNumberReturn {
  expiryDateNumber: string[];
  setExpiryDateNumber: Dispatch<string[]>;
  errorMessage?: string[];
  isError: boolean[];
  inputRefs?: React.RefObject<HTMLInputElement | null>[];
  moveToNext?: (value: string, index: number) => void;
}

export default function useExpiryDateNumber(): UseExpiryDateNumberReturn {
  const [expiryDateNumber, setExpiryDateNumber] = useState(["", ""]);
  const errorMessage = validateExpiryDateNumber(expiryDateNumber);
  const isError = errorMessage.map((msg) => msg !== "");

  const { inputRefs, moveToNext } = useInputFocus({
    inputFieldLength: EXPIRY_DATE_LENGTH,
    validateInputLength: (value: string) => value.length === EXPIRY_DATE_LENGTH,
  });

  const setValidExpiryDateNumber = (expiryDateNumber: string[]) =>
    limitInputNumber({
      inputNumbers: expiryDateNumber,
      setInputNumber: setExpiryDateNumber,
      groupLengths: [EXPIRY_DATE_LENGTH, EXPIRY_DATE_LENGTH],
    });

  return {
    expiryDateNumber,
    setExpiryDateNumber: setValidExpiryDateNumber,
    errorMessage,
    isError: isError,
    inputRefs,
    moveToNext,
  };
}
