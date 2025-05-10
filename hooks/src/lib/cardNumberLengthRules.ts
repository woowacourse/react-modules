import { CardNumber, CardType } from "./types/Card";

export const cardNumberLengthRules: Record<
  CardType,
  Record<keyof CardNumber, number>
> = {
  VISA: { first: 4, second: 4, third: 4, fourth: 4 },
  MasterCard: { first: 4, second: 4, third: 4, fourth: 4 },
  AMEX: { first: 4, second: 6, third: 5, fourth: 0 },
  Diners: { first: 4, second: 6, third: 4, fourth: 0 },
  UnionPay: { first: 4, second: 4, third: 4, fourth: 4 },
  None: { first: 4, second: 4, third: 4, fourth: 4 },
};
