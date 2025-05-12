import { CardType } from "./types/Card";

export interface CardRule {
  type: CardType;
  match: (cardNumber: string) => boolean;
  numberLengths: number;
}

export const cardRules: CardRule[] = [
  {
    type: "VISA",
    match: (prefix: string) => {
      const p = Number(prefix.slice(0, 1));
      return p === 4;
    },
    numberLengths: 16,
  },
  {
    type: "MasterCard",
    match: (prefix: string) => {
      const p = Number(prefix.slice(0, 2));
      return p >= 51 && p <= 55;
    },
    numberLengths: 16,
  },
  {
    type: "AMEX",
    match: (prefix: string) => {
      const p = prefix.slice(0, 2);
      return p === "34" || p === "37";
    },
    numberLengths: 15,
  },
  {
    type: "Diners",
    match: (prefix: string) => prefix.startsWith("36"),
    numberLengths: 14,
  },
  {
    type: "UnionPay",
    match: (prefix: string) => {
      const p3 = Number(prefix.slice(0, 3));
      const p4 = Number(prefix.slice(0, 4));
      const p6 = Number(prefix.slice(0, 6));
      return (
        (p6 >= 622126 && p6 <= 622925) ||
        (p3 >= 624 && p3 <= 626) ||
        (p4 >= 6282 && p4 <= 6288)
      );
    },
    numberLengths: 16,
  },
  {
    type: "None",
    match: () => false,
    numberLengths: 16,
  },
];
