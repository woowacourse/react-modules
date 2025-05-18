export interface CardRule {
  name: string;
  prefixes: string[];
  length: number;
  format: number[];
  validator?: (cardNumber: string) => boolean;
}

export const cardRules: CardRule[] = [
  {
    name: 'Visa',
    prefixes: ['4'],
    length: 16,
    format: [4, 4, 4, 4],
  },
  {
    name: 'Master',
    prefixes: ['51', '52', '53', '54', '55'],
    length: 16,
    format: [4, 4, 4, 4],
  },
  {
    name: 'Amex',
    prefixes: ['34', '37'],
    length: 15,
    format: [4, 6, 5],
  },
  {
    name: 'Diners',
    prefixes: ['36'],
    length: 14,
    format: [4, 6, 4],
  },
  {
    name: 'UnionPay',
    prefixes: ['62'],
    length: 16,
    format: [4, 4, 4, 4],
    validator: (cardNumber: string) => {
      if (cardNumber.length >= 3) {
        const firstThreeDigits = parseInt(cardNumber.substring(0, 3));
        if (firstThreeDigits >= 624 && firstThreeDigits <= 626) {
          return true;
        }
      }

      if (cardNumber.startsWith('622') && cardNumber.length >= 6) {
        const firstSixDigits = parseInt(cardNumber.substring(0, 6));
        if (firstSixDigits >= 622126 && firstSixDigits <= 622925) {
          return true;
        }
      }

      if (cardNumber.startsWith('628') && cardNumber.length >= 4) {
        const firstFourDigits = parseInt(cardNumber.substring(0, 4));
        if (firstFourDigits >= 6282 && firstFourDigits <= 6288) {
          return true;
        }
      }

      return false;
    },
  },
];
