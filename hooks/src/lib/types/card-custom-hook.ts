import { CARD_BRAND } from "../constants/card-custom-hook";

export type ExpiryDateKeys = "month" | "year";

export type CardNumberKeys = "first" | "second" | "third" | "fourth";

export type CardBrand = keyof typeof CARD_BRAND;

export interface FormattedCardNumber {
  formattedResult: string[];
  totalLength: number;
}

export interface ValidResult {
  isValid: boolean;
  errorText: string;
}

export interface CardInputRule {
  formattingRule: number[];
  maxLength: number;
  errorText: string;
}
