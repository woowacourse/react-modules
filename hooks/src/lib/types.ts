export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export interface ValidatorProps {
  validateInputType: (value: string) => ValidationResult;
  validateFieldRules: (value: string) => ValidationResult;
}

export interface ValidatorSelectProps {
  validateInputType: (value: string) => ValidationResult;
  validateFieldRules: (value: string, options: string[]) => ValidationResult;
}

export interface CustomValidator {
  customValidateInputType?: (value: string) => ValidationResult;
  customValidateFieldRules?: (value: string) => ValidationResult;
}

export interface CustomSelectValidator {
  customValidateInputType?: (value: string) => ValidationResult;
  customValidateFieldRules?: (value: string, options: string[]) => ValidationResult;
}
