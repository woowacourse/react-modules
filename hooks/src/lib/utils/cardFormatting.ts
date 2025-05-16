type CardFormat = {
  gaps: number[];
  length: number;
};

export const CARD_FORMAT: Record<string, CardFormat> = {
  visa: {
    gaps: [4, 8, 12],
    length: 16,
  },
  master: {
    gaps: [4, 8, 12],
    length: 16,
  },
  diners: {
    gaps: [4, 10],
    length: 14,
  },
  amex: {
    gaps: [4, 10],
    length: 15,
  },
  unionpay: {
    gaps: [4, 8, 12],
    length: 16,
  },
};

export function formatCardNumber(cardNumber: string, cardBrand: string): string {
  const digitsOnly = cardNumber.replace(/\D/g, '');

  const format = CARD_FORMAT[cardBrand] || { gaps: [4, 8, 12], length: 16 };

  let result = '';

  for (let i = 0; i < digitsOnly.length; i++) {
    if (format.gaps.includes(i)) {
      result += ' ';
    }
    result += digitsOnly[i];
  }

  return result;
}

export function getMaxInputLength(cardBrand: string): number {
  const format = CARD_FORMAT[cardBrand];
  if (!format) return 16 + 3;

  const maxLength = format.length;
  const gapsCount = format.gaps.length;

  return maxLength + gapsCount;
}
