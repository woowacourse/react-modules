export interface ErrorState {
  isValid: boolean;
  errorMessage: string;
}

export interface BaseInputState {
  value: string;
}

export type ValidationRule = {
  condition: (value: string) => boolean;
  errorMessage: string;
};
