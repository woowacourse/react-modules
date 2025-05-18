import { CARD_BRAND_REGEX } from "../constants/cardValidationInfo";
import { CardBrand } from "../useCardNumberInput/useCardNumberInput";

export const getCardNumberMaxLength = (brand: string | null): number => {
  switch (brand) {
    case "AMEX":
      return 15;
    case "DINERS":
      return 14;
    case "UNIONPAY":
    case "VISA":
    case "MASTERCARD":
      return 16;
    default:
      return 19;
  }
};

export const validateCardNumberForBrand = (
  number: string,
  brand: string,
): boolean => number.length === getCardNumberMaxLength(brand);

export const detectCardCompany = (cardNumber: string): CardBrand | null => {
  for (const { brand, pattern } of CARD_BRAND_REGEX) {
    if (pattern.test(cardNumber)) return brand as CardBrand;
  }
  return null;
};
