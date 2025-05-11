import { CARD_BRAND_INFO } from '../constants/cardBrandRule';

export const identifyCardBrand = (numbers: string): string => {
  for (const [brand, { pattern }] of Object.entries(CARD_BRAND_INFO)) {
    if (pattern.test(numbers)) return brand;
  }
  return 'Unknown';
};

export const getCardNumberLength = (brand: string) => {
  return CARD_BRAND_INFO[brand]?.length;
};

export const getFormat = (brand: string) => {
  return CARD_BRAND_INFO[brand]?.length;
};
