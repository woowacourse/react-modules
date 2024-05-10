import { CARD_BRAND, CARD_BRAND_TYPE } from '../constants/cardBrand';

export const judgeCardBrand = (cardNumber: string) => {
  const cardBrandList = Object.keys(CARD_BRAND) as CARD_BRAND_TYPE[];
  const cardBrand =
    cardBrandList.find((cardBrand) =>
      CARD_BRAND[cardBrand].condition.test(cardNumber),
    ) || 'NONE';

  return CARD_BRAND[cardBrand];
};
