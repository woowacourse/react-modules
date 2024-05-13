import { CARD_BRAND } from "../constants/option";

const getCardNumberMaxLength = (cardBrand: BrandType) => {
  if (cardBrand === CARD_BRAND.Diners) return 14;
  if (cardBrand === CARD_BRAND.AMEX) return 15;
  return 16;
};

export default getCardNumberMaxLength;
