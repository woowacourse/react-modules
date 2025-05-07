import { ErrorType } from "../../types/errorType";

export type ValidationResult = {
  cvc: string;
  error: ErrorType;
  handleCvcNumberChange: (value: string) => void;
};
