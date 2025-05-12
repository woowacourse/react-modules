import { ErrorType } from "../../types/ErrorType";

export type ValidationResult = {
  cvc: string;
  error: ErrorType;
  handleCvcNumberChange: (value: string) => void;
};
