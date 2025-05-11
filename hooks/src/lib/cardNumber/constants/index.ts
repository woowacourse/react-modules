import { CardFormats } from '../types';
import { AMEX_REGEX, DINERS_REGEX, MASTERCARD_REGEX, UNIONPAY_REGEX, VISA_REGEX } from './regex';

export const CARD_FORMATS: readonly CardFormats[] = [
  { name: 'Visa', pattern: [4, 4, 4, 4], match: (_: number, digits: string) => VISA_REGEX.test(digits) },
  { name: 'MasterCard', pattern: [4, 4, 4, 4], match: (_: number, digits: string) => MASTERCARD_REGEX.test(digits) },
  { name: 'AMEX', pattern: [4, 6, 5], match: (_: number, digits: string) => AMEX_REGEX.test(digits) },
  { name: 'Diners', pattern: [4, 6, 4], match: (_: number, digits: string) => DINERS_REGEX.test(digits) },
  { name: 'UnionPay', pattern: [4, 4, 4, 4], match: (_: number, digits: string) => UNIONPAY_REGEX.test(digits) },
  {
    name: 'UnionPay',
    pattern: [4, 4, 4, 4],
    match: (cardBinPrefix: number) => cardBinPrefix >= 622126 && cardBinPrefix <= 622925
  }
] as const;

export const DEFAULT_CARD_NUMBER_PATTERN = [4, 4, 4, 4];

export const CARD_BIN_PREFIX_LENGTH = 6;
export const DECIMAL_RADIX = 10;
