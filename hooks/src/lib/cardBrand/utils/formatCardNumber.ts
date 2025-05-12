import { CARD_BRAND_RULE } from "../constants";
import { CardBrand } from "../types";

export const formatCardNumber = (cardNumber: string, cardBrand: CardBrand) => {
  const cleanCardNumber = cardNumber.replace(/-/g, "");
  const { formatNumbers: format } = CARD_BRAND_RULE[cardBrand];
  let indexStart = 0;

  return format
    .map((formatNumber) => {
      const indexEnd = indexStart + formatNumber;
      const part = cleanCardNumber.slice(indexStart, indexEnd);
      indexStart += formatNumber;
      return part;
    })
    .filter(Boolean)
    .join("-");
};
