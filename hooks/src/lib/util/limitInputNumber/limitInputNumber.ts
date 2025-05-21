import { Dispatch } from "react";

interface limitInputNumberProps {
  inputNumbers: string[] | string;
  setInputNumber: Dispatch<string[]> | Dispatch<string>;
  groupLengths: number[];
}

export function limitInputNumber({
  inputNumbers,
  setInputNumber,
  groupLengths,
}: limitInputNumberProps) {
  const limitInput = (
    inputNumber: string,
    index: number,
    needSlice: boolean = false
  ): string => {
    const maxLength = groupLengths[index] ?? 0;
    const sanitized = inputNumber.replace(/\D/g, "");
    if (needSlice) return sanitized.slice(0, maxLength);
    return sanitized;
  };

  let validated = null;
  if (Array.isArray(inputNumbers)) {
    validated = inputNumbers.map((inputNumber, index) =>
      limitInput(inputNumber, index, groupLengths.length <= index + 1)
    );
    (setInputNumber as Dispatch<string[]>)(validated);
  } else {
    validated = limitInput(inputNumbers, 0, true);
    (setInputNumber as Dispatch<string>)(validated);
  }
}
