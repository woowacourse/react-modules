import { useState } from "react";
import { Status } from "../shared/types";

export const getInputStatus = (value: string, maxLength: number): Status => {
  const length = value.length;

  if (length === 0) return "default";
  if (length < maxLength) return "pending";
  if (length >= maxLength) return "complete";

  throw new Error("invalid length : (useInput.getStatus)");
};

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const [status, setStatus] = useState<Status>("default");

  return { value, status, setValue, setStatus };
};
