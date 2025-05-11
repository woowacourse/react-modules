import { CARD_BRAND_RULE } from "../constants";
import type { CardBrand } from "../types";

export function detectCardBrand(cardNumberParts: string[]): CardBrand | null {
  const cardNumber = cardNumberParts.join("");

  if (!cardNumber) return null;

  for (const [brand, rule] of Object.entries(CARD_BRAND_RULE)) {
    for (const [start, end] of rule.ranges) {
      const prefixLength = Math.max(
        start.toString().length,
        end.toString().length
      );

      if (cardNumber.length < prefixLength) continue;

      const cardPrefix = parseInt(cardNumber.slice(0, prefixLength), 10);

      if (cardPrefix >= start && cardPrefix <= end) {
        return brand as CardBrand;
      }
    }
  }

  return null;
}
