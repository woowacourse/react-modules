export type CardBrandType = 'Visa' | 'Master' | 'UnionPay' | 'Diners' | 'AMEX';

export interface CardBrandInfoType {
  pattern: RegExp;
  length: number;
  format: number[];
}
