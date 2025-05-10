export type CardBrand = "Visa" | "MasterCard" | "AMEX" | "Diners" | "UnionPay";

export interface CardBrandRule {
  ranges: number[][];
  length: number;
  formatNumbers: number[];
}
