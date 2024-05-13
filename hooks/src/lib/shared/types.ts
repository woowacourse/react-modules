import { CARD_BRAND } from './constants';

export type ExpiryDateType = 'month' | 'year';
export type Status = 'default' | 'pending' | 'complete' | 'error';
export type CardBrand = keyof typeof CARD_BRAND;
