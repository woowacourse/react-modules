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
  const limitInput = (inputNumber: string, index: number): string => {
    const maxLength = groupLengths[index] ?? 0;
    const sanitized = inputNumber.replace(/\D/g, "");
    return sanitized.slice(0, maxLength);
  };

  let validated = null;
  if (Array.isArray(inputNumbers)) {
    validated = inputNumbers.map((inputNumber, index) =>
      limitInput(inputNumber, index)
    );
    (setInputNumber as Dispatch<string[]>)(validated);
  } else {
    validated = limitInput(inputNumbers, 0);
    (setInputNumber as Dispatch<string>)(validated);
  }
}
