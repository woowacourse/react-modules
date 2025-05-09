import { checkCardBrand } from "./card-brand-checker";
import { CARD_NUMBER_LENGTH } from "../validator/constants/card-number-length";

export function isValidLength(
  cardNumber: string,
  cardNumberLength: Record<string, number[]> = CARD_NUMBER_LENGTH
): boolean {
  const cleaned = cardNumber.replace(/\D/g, "");

  const assumedBrand = checkCardBrand(cleaned);

  const required = cardNumberLength[assumedBrand] || [];

  return required.includes(cleaned.length);
}
