export type Brand = 'visa' | 'master' | 'diners' | 'amex' | 'union' | null;
export interface BrandInfo {
  name: Brand;
  numbers: number[] | number[][];
  length: number;
}
