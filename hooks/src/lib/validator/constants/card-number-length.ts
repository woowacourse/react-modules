import { CardBrand } from "../../constants/CardBrand";

export const CARD_NUMBER_LENGTH: Record<CardBrand, number[]> = {
  VISA: [13, 16, 19],
  MASTERCARD: [16],
  AMEX: [15],
  DINERS: [14, 15, 16, 17, 18, 19],
  UNIONPAY: [16, 17, 18, 19],
  DEFAULT: [16],
};

export const CLIENT_CARD_NUMBER_LENGTH: Record<CardBrand, number[]> = {
  VISA: [16],
  MASTERCARD: [16],
  AMEX: [15],
  DINERS: [14],
  UNIONPAY: [16],
  DEFAULT: [16],
};
