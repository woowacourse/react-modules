import { REGEX } from "../constants";
import getCardBrand from "./getCardBrand";

const formattingCardNumber = (cardNumber: string) => {
  const cardBrand = getCardBrand(cardNumber);

  if (cardBrand === "Diners" || cardBrand === "AMEX") {
    const match = cardNumber.match(REGEX.specificCardFormat);
    if (!match) return cardNumber;

    return [match[1], match[2] ? " " : "", match[2], match[3] ? " " : "", match[3]].join("");
  }

  const match = cardNumber.match(REGEX.normalCardFormat);
  if (!match) return cardNumber;
  return [
    match[1],
    match[2] ? " " : "",
    match[2],
    match[3] ? " " : "",
    match[3],
    match[4] ? " " : "",
    match[4],
  ].join("");
};

export default formattingCardNumber;
