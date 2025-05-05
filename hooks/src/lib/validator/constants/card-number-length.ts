import { CardBrand } from "../../constants/CardBrand";

type KnownBrand = Exclude<CardBrand, "DEFAULT">;
export const CARD_NUMBER_LENGTH: Record<KnownBrand, number[]> = {
  VISA: [13, 16, 19],
  MASTERCARD: [16],
  AMEX: [15],
  DINERS: [14, 15, 16, 17, 18, 19],
  UNIONPAY: [16, 17, 18, 19],
};
