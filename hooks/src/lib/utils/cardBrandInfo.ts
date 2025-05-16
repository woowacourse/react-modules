type CardInfo = {
  brand: 'VISA' | 'MASTERCARD' | 'AMEX' | 'Diners' | 'UnionPay' | 'Unknown';
  maxLength: number;
  pattern: number[];
  isMatch: (cardNumber: string) => boolean;
};

const DEFAULT_CARD_INFO: CardInfo[] = [
  {
    brand: 'VISA',
    maxLength: 16,
    pattern: [4, 4, 4, 4],
    isMatch: (cardNumber) => cardNumber.startsWith('4'),
  },
  {
    brand: 'MASTERCARD',
    maxLength: 16,
    pattern: [4, 4, 4, 4],
    isMatch: (cardNumber) => {
      if (!cardNumber.startsWith('5')) return false;
      const prefix = parseInt(cardNumber[1], 10);
      return prefix >= 1 && prefix <= 5;
    },
  },
  {
    brand: 'AMEX',
    maxLength: 15,
    pattern: [4, 6, 5],
    isMatch: (cardNumber) => cardNumber.startsWith('34') || cardNumber.startsWith('37'),
  },
  {
    brand: 'Diners',
    maxLength: 14,
    pattern: [4, 6, 4],
    isMatch: (cardNumber) => cardNumber.startsWith('36'),
  },
  {
    brand: 'UnionPay',
    maxLength: 16,
    pattern: [4, 4, 4, 4],
    isMatch: (cardNumber) => {
      if (cardNumber.length >= 6) {
        const prefixSix = parseInt(cardNumber.slice(0, 6), 10);
        if (prefixSix >= 622126 && prefixSix <= 622925) return true;
      }

      if (cardNumber.length >= 4) {
        const prefixFour = parseInt(cardNumber.slice(0, 4), 10);
        if (prefixFour >= 6282 && prefixFour <= 6288) return true;
      }

      if (cardNumber.length >= 3) {
        const prefixThree = parseInt(cardNumber.slice(0, 3), 10);
        if (prefixThree >= 624 && prefixThree <= 626) return true;
      }

      return false;
    },
  },
  {
    brand: 'Unknown',
    maxLength: 16,
    pattern: [4, 4, 4, 4],
    isMatch: () => true,
  },
];

export const cardBrandInfo = (cardNumber: string) => {
  const numericCardNumber = cardNumber.replace(/\D/g, '');
  return DEFAULT_CARD_INFO.find((rule) => rule.isMatch(numericCardNumber));
};
