export { default as useCVC } from './useCVC';
export { default as usePassword } from './usePassword';
export { default as useCardHolder } from './useCardHolder';
export { default as useExpiryDate } from './useExpiryDate';
export { default as useCardType } from './useCardType';
export { default as useCardNumbers } from './useCardNumbers';

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export type CardBrand = 'Diners' | 'AMEX' | 'UnionPay' | 'VISA' | 'MasterCard';

export interface CardNumbersReturn {
  value: Record<string, string>;
  getCardBrand: () => CardBrand | undefined;
  getInputMaxLengthByCardBrand: () => number[];
  runValidationInputTypeByChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => void;
  runValidationFieldRulesByBlur: (
    event: React.FocusEvent<HTMLInputElement, Element>,
    name: string,
  ) => void;
  validationResult: Record<string, ValidationResult>;
}

export interface CardTypeReturn {
  value: string;
  runValidationByChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  validationResult: ValidationResult;
}

export interface CVCReturn {
  value: string;
  runValidationInputTypeByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  runValidationFieldRulesByBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  validationResult: ValidationResult;
}

export interface ExpiryDateReturn {
  month: {
    value: string;
    runValidationInputTypeByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    runValidationFieldRulesByBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    validationResult: ValidationResult;
  };
  year: {
    value: string;
    runValidationInputTypeByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    runValidationFieldRulesByBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    validationResult: ValidationResult;
  };
}

export interface PasswordReturn {
  value: string;
  runValidationInputTypeByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  runValidationFieldRulesByBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  validationResult: ValidationResult;
}

export interface CardHolderReturn {
  value: string;
  runValidationInputTypeByChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  runValidationFieldRulesByBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  validationResult: ValidationResult;
}
