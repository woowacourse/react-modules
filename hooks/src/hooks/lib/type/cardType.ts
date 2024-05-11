export type CardBrand = "VISA" | "MASTER_CARD" | "DINERS" | "AMEX" | "UNION_PAY" | "UNKNOWN";

export interface InputState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

export interface CardNumbersState extends InputState {
  cardBrand: CardBrand;
  maxLength: number;
}
