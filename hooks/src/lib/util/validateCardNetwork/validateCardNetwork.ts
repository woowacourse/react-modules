import { CardNetwork } from "../../constants";

const CARD_NETWORK_ID_LENGTH = 6;

interface CardRule {
  name: CardNetwork;
  match: (num: string) => boolean;
}

const CARD_RULES: CardRule[] = [
  { name: "VISA", match: (num) => num.startsWith("4") },
  {
    name: "MASTER",
    match: (num) => {
      const prefix = Number(num.slice(0, 2));
      return prefix >= 51 && prefix <= 54;
    },
  },
  { name: "DINERS", match: (num) => num.startsWith("36") },
  {
    name: "AMEX",
    match: (num) => {
      const prefix = num.slice(0, 2);
      return prefix === "34" || prefix === "37";
    },
  },
  {
    name: "UNIONPAY",
    match: (num) => {
      const prefix3 = Number(num.slice(0, 3));
      const prefix4 = Number(num.slice(0, 4));
      const prefix6 = Number(num.slice(0, 6));
      return (
        (prefix3 >= 624 && prefix3 <= 626) ||
        (prefix4 >= 6282 && prefix4 <= 6288) ||
        (prefix6 >= 622126 && prefix6 <= 622925)
      );
    },
  },
];

export function validateCardNetwork(cardNumbers: string[]): CardNetwork {
  const fullCardNumber = cardNumbers.join("");

  for (const rule of CARD_RULES) {
    if (rule.match(fullCardNumber)) return rule.name;
  }

  if (fullCardNumber.length < CARD_NETWORK_ID_LENGTH) return "PENDING";
  return "DEFAULT";
}
