const brandPatterns: [RegExp, string][] = [
  [/^4\d{0,}/, 'Visa'],
  [/^5[1-5]/, 'Master'],
  [/^36/, 'Diners'],
  [/^3[47]/, 'AMEX'],
  [/^62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5]/, 'UnionPay'],
  [/^62[4-6]/, 'UnionPay'],
  [/^628[2-8]/, 'UnionPay'],
];

export const identifyCardBrand = (numbers: string): string => {
  for (const [pattern, brand] of brandPatterns) {
    if (pattern.test(numbers)) return brand;
  }
  return 'Unknown';
};
