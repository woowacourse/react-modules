export type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};

export type NetworkType = 'visa' | 'master' | 'diners' | 'amex' | 'union';
