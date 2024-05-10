import { GLOBAL_BRANDS_TYPE } from '../useCardNumber';

export default function getCardGlobalBrand(cardNumber: string): GLOBAL_BRANDS_TYPE {
  if (cardNumber.length >= 1) {
    const firstDigit = cardNumber[0];
    if (firstDigit === '4') {
      return 'Visa';
    }
  }

  if (cardNumber.length >= 2) {
    const firstTwoDigits = cardNumber.slice(0, 2);
    if (firstTwoDigits === '36') {
      return 'Diners';
    }
    if (firstTwoDigits === '34' || firstTwoDigits === '37') {
      return 'AMEX';
    }
    if (firstTwoDigits >= '51' && firstTwoDigits <= '55') {
      return 'MasterCard';
    }
  }

  if (cardNumber.length >= 3) {
    const firstThreeDigits = cardNumber.slice(0, 3);
    if (firstThreeDigits >= '624' && firstThreeDigits <= '626') {
      return 'UnionPay';
    }
  }

  if (cardNumber.length >= 4) {
    const firstFourDigits = cardNumber.slice(0, 4);
    if (firstFourDigits >= '6282' && firstFourDigits <= '6288') {
      return 'UnionPay';
    }
  }

  if (cardNumber.length >= 6) {
    const firstSixDigits = cardNumber.slice(0, 6);
    if (firstSixDigits >= '622126' && firstSixDigits <= '622925') {
      return 'UnionPay';
    }
  }

  return 'Default';
}
