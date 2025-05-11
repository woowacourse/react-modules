import { CARD_BRAND_INFO } from '../constants/cardBrandRule';

export const identifyCardBrand = (numbers: string): string => {
  for (const [brand, { pattern }] of Object.entries(CARD_BRAND_INFO)) {
    if (pattern.test(numbers)) return brand;
  }
  return 'Unknown';
};

export const getCardNumberLength = (brand: string): number => {
  console.log('unknown length:', CARD_BRAND_INFO['UNKNOWN'].length);
  return CARD_BRAND_INFO[brand]?.length || CARD_BRAND_INFO['UNKNOWN'].length;
};

export const getFormat = (brand: string): number[] => {
  return CARD_BRAND_INFO[brand]?.format || CARD_BRAND_INFO['UNKNOWN'].format;
};
