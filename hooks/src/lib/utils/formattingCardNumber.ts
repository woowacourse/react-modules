import { REGEX } from "../constants";
import getCardBrand from "./getCardBrand";

const formattingCardNumber = (cardNumber: string) => {
  const cardBrand = getCardBrand(cardNumber);

  const format =
    cardBrand === "Diners" || cardBrand === "AMEX"
      ? REGEX.specificCardFormat
      : REGEX.normalCardFormat;

  const matches = cardNumber.match(format);
  if (!matches) return cardNumber;

  matches[0] = "";
  return matches.filter(Boolean).join(" ");
};

export default formattingCardNumber;
