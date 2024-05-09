export type Brand = 'visa' | 'master' | 'diners' | 'amex' | 'union' | null;
export interface BrandInfo<T> {
  name: Brand;
  numbers: T;
  length: number;
}
