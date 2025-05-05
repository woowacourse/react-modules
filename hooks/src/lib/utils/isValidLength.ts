import { checkCardBrand } from "./card-brand-checker";
import { CARD_NUMBER_LENGTH } from "../validator/constants/card-number-length";

export function isValidLength(cardNumber: string) {
  const cleaned = cardNumber.replace(/\D/g, "");

  const assumedBrand = checkCardBrand(cleaned);

  const required = CARD_NUMBER_LENGTH[assumedBrand];

  return required.includes(cleaned.length);
}
