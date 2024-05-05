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

export interface Options {
  isAutoFocus?: boolean;
}

export interface ValidatorProps {
  onChange: (value: string) => ValidationResult;
  onBlur: (value: string) => ValidationResult;
}

export interface UseCardNumber {
  value: Record<string, string>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => void;
  errorInfo: Record<string, ValidationResult>;
}
