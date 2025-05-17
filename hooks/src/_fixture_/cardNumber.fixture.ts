export const CARD_TEST_CASES = {
  Visa: {
    valid: '4111111111111111',
    tooShort: '4111',
    expectedFormat: '4111-1111-1111-1111',
    expectedCompany: 'Visa',
    expectedLength: 16
  },
  AMEX: {
    valid: '341234567890123',
    tooShort: '34123456789',
    expectedFormat: '3412-345678-90123',
    expectedCompany: 'AMEX',
    expectedLength: 15
  },
  Diners: {
    valid: '36123456789012',
    tooShort: '36123456',
    expectedFormat: '3612-345678-9012',
    expectedCompany: 'Diners',
    expectedLength: 14
  },
  UnionPay: {
    valid: '6221261234567890',
    tooShort: '62212612',
    expectedFormat: '6221-2612-3456-7890',
    expectedCompany: 'UnionPay',
    expectedLength: 16
  }
} as const;
