import { CARD_BRAND, CardBrandType } from '../constants/cardBrand';

export const judgeCardBrand = (cardNumber: string) => {
  const cardBrandList = Object.keys(CARD_BRAND) as CardBrandType[];
  const cardBrand =
    cardBrandList.find((cardBrand) =>
      CARD_BRAND[cardBrand].condition.test(cardNumber),
    ) || 'NONE';

  return CARD_BRAND[cardBrand];
};
