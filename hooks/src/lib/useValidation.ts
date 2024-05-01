export default function useValidation<V>({ validators, value }: UseValidationProps<V>): ValidationResult {
  const firstFailedTest = validators.find(({ test }) => !test(value));

  if (firstFailedTest) return { isValid: false, errorMessage: firstFailedTest.errorMessage };

  return { isValid: true, errorMessage: null };
}
