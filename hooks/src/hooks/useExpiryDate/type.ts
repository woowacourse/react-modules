import { ErrorType } from "../../types/ErrorType";

export type ValidationResult = {
  date: DateType;
  error: ErrorType[];
  handleExpiryDateChange: (value: string, dateName: ExpiryField) => void;
};

export type DateType = {
  month: string;
  year: string;
};

export type ExpiryField = keyof DateType;
