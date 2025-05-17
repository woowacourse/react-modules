export type CardNumberLabel = "first" | "second" | "third" | "fourth";

export type CardType =
  | "UnionPay"
  | "Visa"
  | "MasterCard"
  | "Diners"
  | "AMEX"
  | "Default";

export function isCardNumberLabel(label: string): label is CardNumberLabel {
  return ["first", "second", "third", "fourth"].includes(label);
}

export function isCardType(type: string): type is CardType {
  return [
    "UnionPay",
    "Visa",
    "MasterCard",
    "Diners",
    "AMEX",
    "Default",
  ].includes(type);
}
