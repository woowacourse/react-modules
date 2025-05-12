import { CARD_TYPE_RULES } from "./cardRules";
import { CardNumber, CardType } from "./types/Card";

export function getCardType(cardNumber: CardNumber): CardType {
  const cardNumberPrefix = `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`;

  for (const [cardType, matcher] of Object.entries(CARD_TYPE_RULES)) {
    if (matcher(cardNumberPrefix)) {
      return cardType as CardType;
    }
  }

  return "None";
}
