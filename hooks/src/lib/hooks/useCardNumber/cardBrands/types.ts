import { VALID_CARD_BRANDS, CARD_BRANDS } from './constant';

export type ValidCardBrand = keyof typeof VALID_CARD_BRANDS;
export type CardBrand = keyof typeof CARD_BRANDS;

export interface CardRule {
  type: CardBrand;
  match: (cardNumber: string) => boolean;
  numberLengths: number;
}
interface CardBrandRange {
  start: number;
  end: number;
}
export interface CardBrandRules {
  ranges: CardBrandRange[];
  format: number[];
  length: number;
}
