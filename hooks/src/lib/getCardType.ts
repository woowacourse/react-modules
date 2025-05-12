import { cardRules } from "./cardRules";
import { CardNumber, CardType } from "./types/Card";

export function getCardType(cardNumber: CardNumber): CardType {
  const cardNumberPrefix = `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`;

  const matchedRule = cardRules.find((cardRule) =>
    cardRule.match(cardNumberPrefix)
  );
  return matchedRule ? matchedRule.type : "None";
}
