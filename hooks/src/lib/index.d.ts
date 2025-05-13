export interface ValidationType {
  isError: boolean;
  errorMessage: string | null;
}

export type CardBrand = 'Diners' | 'AMEX' | 'Visa' | 'MasterCard' | 'Union';

export interface UseCardNumberResult {
  onChange: (value: string) => void;
  cardNumber: string;
  cardNumberValidationResult: ValidationType;
  cardBrand: CardBrand | undefined;
  formattingCardNumber: string[];
}

export interface UseExpirationDateResult {
  onChange: (label: 'month' | 'year', value: string) => void;
  expirationDate: {month: string; year: string};
  expirationDateValidationResult: {month: ValidationType; year: ValidationType};
}

export interface UseCvcResult {
  onChange: (value: string) => void;
  cvc: string;
  cvcValidationResult: ValidationType;
}

export interface UsePasswordResult {
  onChange: (value: string) => void;
  password: string;
  passwordValidationResult: ValidationType;
}

export declare function useCardNumber(): UseCardNumberResult;
export declare function useExpirationDate(): UseExpirationDateResult;
export declare function useCvc(): UseCvcResult;
export declare function usePassword(): UsePasswordResult;
