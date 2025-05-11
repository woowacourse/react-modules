import { CARD_BRAND_INFO } from '../constants/cardBrandRule';

export const identifyCardBrand = (numbers: string): string => {
  for (const [brand, { pattern }] of Object.entries(CARD_BRAND_INFO)) {
    if (pattern.test(numbers)) return brand;
  }
  return 'Unknown';
};

export const getCardNumberLength = (brand: string): number => {
  return CARD_BRAND_INFO[brand]?.length || CARD_BRAND_INFO['UNKNOWN'].length;
};

export const getFormat = (brand: string): number[] => {
  return CARD_BRAND_INFO[brand]?.format || CARD_BRAND_INFO['UNKNOWN'].format;
};

export const getFormattedNumber = (number: string, format: number[]) => {
  const result: string[] = [];
  let index = 0;
  if (!format) return;
  for (const length of format) {
    const numberPart = number.slice(index, index + length);
    if (!numberPart) break;
    result.push(numberPart);
    index += length;
  }

  return result.join(' ');
};
