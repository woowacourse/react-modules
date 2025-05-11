const CARD_IDENTIFYING_NUMBER = {
  VISA: 4,
  MASTERCARD: {
    MIN: 51,
    MAX: 55,
  },
  DINERS: 36,
  AMEX: {
    MIN: 34,
    MAX: 37,
  },
};

const UNION_PAY_IDENTIFYING_NUMBER = {
  SIX: {
    MIN: 622126,
    MAX: 622925,
  },
  THREE: {
    MIN: 624,
    MAX: 626,
  },
  FOUR: [6282, 6283, 6284, 6285, 6286, 6287, 6288],
};

const getValidCardNumber = (id: string) => {
  const cardNumber = id.replace(/\D/g, '');
  const firstDigit = parseInt(cardNumber[0]);
  const firstTwoDigits = parseInt(cardNumber.slice(0, 2));
  const firstThreeDigits = parseInt(cardNumber.slice(0, 3));
  const firstSixDigits = parseInt(cardNumber.slice(0, 6));

  // VISA (4로 시작)
  if (firstDigit === CARD_IDENTIFYING_NUMBER.VISA) {
    return 'VISA';
  }

  // MASTERCARD (51-55로 시작)
  if (
    firstTwoDigits >= CARD_IDENTIFYING_NUMBER.MASTERCARD.MIN &&
    firstTwoDigits <= CARD_IDENTIFYING_NUMBER.MASTERCARD.MAX
  ) {
    return 'MASTERCARD';
  }

  // DINERS (36로 시작)
  if (firstTwoDigits === CARD_IDENTIFYING_NUMBER.DINERS) {
    return 'DINERS';
  }

  // AMEX (34-37로 시작)
  if (firstTwoDigits >= CARD_IDENTIFYING_NUMBER.AMEX.MIN && firstTwoDigits <= CARD_IDENTIFYING_NUMBER.AMEX.MAX) {
    return 'AMEX';
  }

  // UNIONPAY (622126-622925, 624-626, 6282-6288로 시작)
  if (
    (firstSixDigits >= UNION_PAY_IDENTIFYING_NUMBER.SIX.MIN &&
      firstSixDigits <= UNION_PAY_IDENTIFYING_NUMBER.SIX.MAX) ||
    (firstThreeDigits >= UNION_PAY_IDENTIFYING_NUMBER.THREE.MIN &&
      firstThreeDigits <= UNION_PAY_IDENTIFYING_NUMBER.THREE.MAX) ||
    UNION_PAY_IDENTIFYING_NUMBER.FOUR.includes(firstSixDigits)
  ) {
    return 'UNIONPAY';
  }

  return 'UNKNOWN';
};

function useIdentifyCard() {
  return { getValidCardNumber };
}

export default useIdentifyCard;
