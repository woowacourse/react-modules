import { CardNumber, CardType } from "./types/Card";

export function getCardType(cardNumber: CardNumber): CardType {
  const cardNumberPrefix = `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`;

  const prefix1 = cardNumberPrefix.slice(0, 1);
  const prefix2 = cardNumberPrefix.slice(0, 2);
  const prefix3 = cardNumberPrefix.slice(0, 3);
  const prefix4 = cardNumberPrefix.slice(0, 4);
  const prefix6 = cardNumberPrefix.slice(0, 6);

  if (prefix1 === "4") {
    return "VISA";
  } else if (Number(prefix2) >= 51 && Number(prefix2) <= 55) {
    return "MasterCard";
  } else if (prefix2 === "34" || prefix2 === "37") {
    return "AMEX";
  } else if (prefix2 === "36") {
    return "Diners";
  } else if (
    (Number(prefix6) >= 622126 && Number(prefix6) <= 622925) ||
    (Number(prefix3) >= 624 && Number(prefix3) <= 626) ||
    (Number(prefix4) >= 6282 && Number(prefix4) <= 6288)
  ) {
    return "UnionPay";
  }

  return "None";
}
