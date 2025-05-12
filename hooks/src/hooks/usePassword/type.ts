import { ErrorType } from "../../types/ErrorType";

export type ValidationResult = {
  password: string;
  error: ErrorType;
  handlePasswordChange: (value: string) => void;
};
