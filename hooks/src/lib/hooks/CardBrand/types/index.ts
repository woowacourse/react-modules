export type CardBrand = "Visa" | "MasterCard" | "AMEX" | "Diners" | "UnionPay";

export interface CardBrandRule {
  ranges: number[][];
  maxLength: number;
  formatNumbers: number[];
}
