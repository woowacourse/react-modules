interface UseValidationProps<V> {
  validators: { test: (value: V) => boolean; errorMessage: string }[];
  value: V;
}

interface ValidationResult {
  isValid: boolean;
  errorMessage: string | null;
}
