export interface ErrorState {
  isValid: boolean;
  errorMessage: string;
}

export interface BaseInputState {
  value: string;
}

export type ValidationRule<T> = {
  condition: (value: T) => boolean;
  errorMessage: string;
};

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}
