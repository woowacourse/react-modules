const CARD_IDENTIFYING_NUMBER = {
  VISA: 4,
  MASTERCARD: { MIN: 51, MAX: 55 },
  DINERS: 36,
  AMEX: { MIN: 34, MAX: 37 },
};

const CARD_IDENTIFYING_NUMBER_LENGTH = {
  DINERS: 14,
  AMEX: 15,
};

const UNION_PAY_IDENTIFYING_NUMBER = {
  SIX: { MIN: 622126, MAX: 622925 },
  THREE: { MIN: 624, MAX: 626 },
  FOUR: [6282, 6283, 6284, 6285, 6286, 6287, 6288],
};

export function identifyCard(id: string): string {
  const cardNumber = id.replace(/\D/g, '');
  const length = cardNumber.length;
  const firstDigit = parseInt(cardNumber[0]);
  const firstTwoDigits = parseInt(cardNumber.slice(0, 2));
  const firstThreeDigits = parseInt(cardNumber.slice(0, 3));
  const firstFourDigits = parseInt(cardNumber.slice(0, 4));
  const firstSixDigits = parseInt(cardNumber.slice(0, 6));

  // VISA (4로 시작)
  if (firstDigit === CARD_IDENTIFYING_NUMBER.VISA) return 'VISA';

  // MASTERCARD (51-55로 시작)
  if (
    firstTwoDigits >= CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN &&
    firstTwoDigits <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX
  ) {
    return 'MASTERCARD';
  }

  // DINERS (36로 시작, 길이 14)
  if (firstTwoDigits === CARD_IDENTIFYING_NUMBER.DINERS && length === CARD_IDENTIFYING_NUMBER_LENGTH.DINERS) {
    return 'DINERS';
  }

  // AMEX (34-37로 시작, 길이 15)
  if (
    firstTwoDigits >= CARD_IDENTIFYING_NUMBER.AMEX.MIN &&
    firstTwoDigits <= CARD_IDENTIFYING_NUMBER.AMEX.MAX &&
    length === CARD_IDENTIFYING_NUMBER_LENGTH.AMEX
  ) {
    return 'AMEX';
  }

  // UNIONPAY (622126-622925, 624-626, 6282-6288)
  if (
    (firstSixDigits >= UNION_PAY_IDENTIFYING_NUMBER.SIX.MIN &&
      firstSixDigits <= UNION_PAY_IDENTIFYING_NUMBER.SIX.MAX) ||
    (firstThreeDigits >= UNION_PAY_IDENTIFYING_NUMBER.THREE.MIN &&
      firstThreeDigits <= UNION_PAY_IDENTIFYING_NUMBER.THREE.MAX) ||
    UNION_PAY_IDENTIFYING_NUMBER.FOUR.includes(firstFourDigits)
  ) {
    return 'UNIONPAY';
  }

  return 'UNKNOWN';
}
