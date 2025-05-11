export type CardBrand = "AMEX" | "Diners" | "Visa" | "MasterCard" | "UnionPay";

export type CardBrandRule = {
  ranges: [number, number][];
  length: number;
  formatNumbers: number[];
};
