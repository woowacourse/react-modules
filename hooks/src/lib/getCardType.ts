import { cardRules } from "./cardRules";
import { CardNumber, CardType } from "./types/Card";

export function getCardType(cardNumber: CardNumber): CardType {
  const cardNumberPrefix = `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`;

  cardRules.map((cardRule) => {
    if (cardRule.match(cardNumberPrefix)) {
      return cardRule.type;
    }
  });
  return "None";
}
