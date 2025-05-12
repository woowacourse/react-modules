import { cardRules } from "./cardRules";
import { CardType } from "./types/Card";

export function getCardType(cardNumber: string): CardType {
  const matchedRule = cardRules.find((cardRule) => cardRule.match(cardNumber));
  return matchedRule ? matchedRule.type : "None";
}
