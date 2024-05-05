export interface UseCard {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  errorInfo: ValidationResult;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}
