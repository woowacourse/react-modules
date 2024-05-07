interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

type EventType = FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>;
