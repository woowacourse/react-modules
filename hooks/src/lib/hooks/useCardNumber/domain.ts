import { CARD_BRANDS } from "./constants";
import { formatCardNumber, FORMAT_PATTERNS } from "./cardFormatUtils";

export const cardBranRule = {
  Visa: {
    inputCount: 4,
    length: 16,
    ranges: [[4]],
    format: (cardNumber: string) =>
      formatCardNumber({
        pattern: FORMAT_PATTERNS.FourFourFourFour,
        cardNumber,
        groupCount: 4,
      }),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: CARD_BRANDS.Visa,
      }),
  },

  MasterCard: {
    inputCount: 4,
    length: 16,
    ranges: [[51, 55]],
    format: (cardNumber: string) =>
      formatCardNumber({
        pattern: FORMAT_PATTERNS.FourFourFourFour,
        cardNumber,
        groupCount: 4,
      }),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: CARD_BRANDS.MasterCard,
      }),
  },

  Diners: {
    inputCount: 3,
    length: 14,
    ranges: [[36]],
    format: (cardNumber: string) =>
      formatCardNumber({
        pattern: FORMAT_PATTERNS.FourSixFour,
        cardNumber,
        groupCount: 3,
      }),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 14,
        brand: CARD_BRANDS.Diners,
      }),
  },

  AMEX: {
    inputCount: 3,
    length: 15,
    ranges: [[34], [37]],
    format: (cardNumber: string) =>
      formatCardNumber({
        pattern: FORMAT_PATTERNS.FourSixFive,
        cardNumber,
        groupCount: 3,
      }),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 15,
        brand: CARD_BRANDS.AMEX,
      }),
  },

  UnionPay: {
    inputCount: 4,
    length: 16,
    ranges: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
    format: (cardNumber: string) =>
      formatCardNumber({
        pattern: FORMAT_PATTERNS.FourFourFourFour,
        cardNumber,
        groupCount: 4,
      }),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: CARD_BRANDS.UnionPay,
      }),
  },

  Unknown: {
    inputCount: 1,
    length: 16,
    ranges: [[0]],
    format: (cardNumber: string) => [cardNumber],
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: CARD_BRANDS.Unknown,
      }),
  },
};

function validateCardNumberLength({
  cardNumber,
  maxLength,
  brand,
}: {
  cardNumber: string;
  maxLength: number;
  brand: string;
}) {
  const cardLength = cardNumber.length;
  if (cardLength < maxLength) {
    return `${brand} 카드 번호는 ${maxLength}자리여야 합니다.`;
  }
}
