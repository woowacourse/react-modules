import { CARD_BRAND_NUMBER_LENGTH, CARD_CONFIG } from './cardDataValidation';

interface CardTypeCheck {
  readonly name: keyof typeof CARD_BRAND_NUMBER_LENGTH;
  readonly check: (cardNumber: string) => boolean;
}

const cardTypeCheck: ReadonlyArray<CardTypeCheck> = [
  {
    name: 'Visa',
    check: (cardNumber: string) =>
      Math.floor(parseInt(cardNumber.substring(0, 2), 10) / 10) ===
      CARD_CONFIG.VISA,
  },
  {
    name: 'MasterCard',
    check: (cardNumber: string) => {
      const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
      return (
        CARD_CONFIG.MASTER.START <= cardBrandNumber &&
        cardBrandNumber <= CARD_CONFIG.MASTER.END
      );
    },
  },
  {
    name: 'Diners',
    check: (cardNumber: string) =>
      parseInt(cardNumber.substring(0, 2), 10) === 36,
  },
  {
    name: 'AMEX',
    check: (cardNumber: string) => {
      const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
      return cardBrandNumber === 34 || cardBrandNumber === 37;
    },
  },
  {
    name: 'UnionPay',
    check: (cardNumber: string) => {
      const cardBrandNumberThree = parseInt(cardNumber.substring(0, 3), 10);
      const cardBrandNumberFour = parseInt(cardNumber.substring(0, 4), 10);
      const cardBrandNumberSix = parseInt(cardNumber.substring(0, 6), 10);
      return (
        (cardBrandNumberSix >= 622126 && cardBrandNumberSix <= 622925) ||
        (cardBrandNumberThree >= 624 && cardBrandNumberThree <= 626) ||
        (cardBrandNumberFour >= 6282 && cardBrandNumberFour <= 6288)
      );
    },
  },
];

export default cardTypeCheck;
