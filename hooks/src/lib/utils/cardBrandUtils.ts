import {
  CARD_BRAND_INFO,
  FALLBACK_CARD_INFO,
} from '../constants/cardBrandRule';
import { CardBrandType } from '../types/cardTypes';

function isCardBrandType(key: string): key is CardBrandType {
  return key in CARD_BRAND_INFO;
}

export const identifyCardBrand = (value: string): CardBrandType | null => {
  for (const brand in CARD_BRAND_INFO) {
    if (!isCardBrandType(brand)) continue;

    const { pattern } = CARD_BRAND_INFO[brand];
    if (pattern.test(value)) return brand;
  }
  return null;
};

export const getCardNumberLength = (brand: CardBrandType | null): number => {
  return brand ? CARD_BRAND_INFO[brand].length : FALLBACK_CARD_INFO.length;
};

export const getFormat = (brand: CardBrandType | null): number[] => {
  return brand ? CARD_BRAND_INFO[brand].format : FALLBACK_CARD_INFO.format;
};

export const getCardBrandInfo = (value: string) => {
  const cardBrand = identifyCardBrand(value);
  const cardNumberLength = getCardNumberLength(cardBrand);
  const format = getFormat(cardBrand);

  return { cardBrand, cardNumberLength, format };
};

export const getFormattedNumber = (value: string, format: number[]) => {
  const result: string[] = [];
  let index = 0;
  if (!format) return;
  for (const length of format) {
    const numberPart = value.slice(index, index + length);
    if (!numberPart) break;
    result.push(numberPart);
    index += length;
  }

  return result.join(' ');
};
