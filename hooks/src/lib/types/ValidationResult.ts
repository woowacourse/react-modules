type ValidationResult =
  | { isValid: true }
  | { isValid: false; errorMessage: string };

export default ValidationResult;
