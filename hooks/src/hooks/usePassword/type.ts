import { ErrorType } from "../../types/errorType";

export type ValidationResult = {
  password: string;
  error: ErrorType;
  handlePasswordChange: (value: string) => void;
};
