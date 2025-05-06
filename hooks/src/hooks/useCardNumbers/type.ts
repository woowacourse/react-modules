import { ErrorType } from "../../types/errorType";

export type ValidationResult = {
  numbers: string[];
  error: ErrorType[];
  handleCardNumberChange: (value: string, index: number) => void;
};
