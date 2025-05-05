// strictCardBrandChecker.ts
import type { CardBrand } from "../constants/CardBrand";
import { CARD_NUMBER_LENGTH } from "../validator/constants/card-number-length";

type KnownBrand = Exclude<CardBrand, "DEFAULT">;

const BRAND_PATTERNS: { brand: KnownBrand; regex: RegExp }[] = [
  { brand: "VISA", regex: /^4/ },
  {
    brand: "MASTERCARD",
    regex: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/,
  },
  { brand: "DINERS", regex: /^36/ },
  { brand: "AMEX", regex: /^(34|37)/ },
  {
    brand: "UNIONPAY",
    regex:
      /^(62[4-6]|622(?:12[6-9]|1[3-9]\d|[2-8]\d{2}|9[0-1]\d|92[0-5])|628[2-8])/,
  },
];

export function strictCardBrandChecker(cardNumber: string): CardBrand {
  const cleaned = cardNumber.replace(/\D/g, "");
  const len = cleaned.length;

  for (const { brand, regex } of BRAND_PATTERNS) {
    if (regex.test(cleaned) && CARD_NUMBER_LENGTH[brand].includes(len)) {
      return brand;
    }
  }

  return "DEFAULT";
}

export function cardBrandChecker(cardNumber: string): CardBrand {
  const cleaned = cardNumber.replace(/\D/g, "");

  for (const { brand, regex } of BRAND_PATTERNS) {
    if (regex.test(cleaned)) {
      return brand;
    }
  }

  return "DEFAULT";
}
