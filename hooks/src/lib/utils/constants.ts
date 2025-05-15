export const NETWORK = {
  visa: 'visa',
  master: 'master',
  diners: 'diners',
  amex: 'amex',
  union: 'union',
};
export type NetworkType = keyof typeof NETWORK;

export const NETWORK_LIST = new Map<NetworkType, string[]>([
  ['visa', ['4']],
  ['master', ['51', '52', '53', '54', '55']],
  ['diners', ['36']],
  ['amex', ['34', '37']],
  [
    'union',
    [
      '624',
      '625',
      '626',
      '6282',
      '6283',
      '6284',
      '6285',
      '6286',
      '6287',
      '6288',
    ],
  ],
]);

interface RangeType {
  start: number;
  end: number;
}

export const NETWORK_RANGE = new Map<Partial<NetworkType>, RangeType>([
  ['union', { start: 622126, end: 622925 }],
]);

export const NETWORK_FORMAT: Record<NetworkType, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  union: [4, 4, 4, 4],
} as const;

export const DEFAULT_FORMAT = [4, 4, 4, 4];

export const FORMAT_SEPARATOR = '-';
