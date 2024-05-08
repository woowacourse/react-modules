export type CardType = 'DEFAULT' | 'VISA' | 'MASTERCARD' | 'DINERS' | 'AMEX' | 'UNIONPAY';

export const getCardType = (cardNumber: string) => {
  const firstDigits = cardNumber.charAt(0);

  if (firstDigits === '3') {
    if (cardNumber.length < 2) return 'DEFAULT';

    const secondDigits = cardNumber.substring(0, 2);

    if (secondDigits === '36') return 'DINERS';
    if (secondDigits === '34' || secondDigits === '37') return 'AMEX';
  }

  if (firstDigits === '4') return 'VISA';

  if (firstDigits === '5') {
    if (cardNumber.length < 2) return 'DEFAULT';

    const secondDigits = cardNumber.substring(0, 2);

    if (Number(secondDigits) >= 51 && Number(secondDigits) <= 55) return 'MASTERCARD';
  }

  if (firstDigits === '6') {
    if (cardNumber.length < 3) return 'DEFAULT';

    const thirdDigits = cardNumber.substring(0, 3);

    if (thirdDigits === '622') {
      const sixthDigits = cardNumber.substring(0, 6);
      if (Number(sixthDigits) >= 622126 && Number(sixthDigits) <= 622925) return 'UNIONPAY';
    }

    if (thirdDigits === '628') {
      const fourthDigits = cardNumber.substring(0, 4);
      if (Number(fourthDigits) >= 6282 && Number(fourthDigits) >= 6288) return 'UNIONPAY';
    }

    if (Number(thirdDigits) >= 624 || Number(thirdDigits) <= 626) return 'UNIONPAY';
  }

  return 'DEFAULT';
};

export const getValidCardNumberLength = (cardType: CardType) => {
  if (cardType === 'DINERS') return 14;
  if (cardType === 'AMEX') return 15;

  return 16;
};

export const formatCardNumber = (cardType: CardType, cardNumber: string) => {
  const cardNumberCopy = cardNumber;

  if (cardType === 'DINERS' || cardType === 'AMEX') {
    if (cardNumberCopy.length > 4 && cardNumberCopy.length <= 10) {
      return `${cardNumberCopy.slice(0, 4)} ${cardNumberCopy.slice(4, cardNumberCopy.length)}`;
    }

    if (cardNumberCopy.length > 10) {
      return `${cardNumberCopy.slice(0, 4)} ${cardNumberCopy.slice(4, 10)} ${cardNumberCopy.slice(
        10,
        cardNumberCopy.length
      )}`;
    }

    return cardNumberCopy;
  }

  if (cardNumberCopy.length > 4 && cardNumberCopy.length <= 8) {
    return `${cardNumberCopy.slice(0, 4)} ${cardNumberCopy.slice(4, cardNumberCopy.length)}`;
  }

  if (cardNumberCopy.length > 8 && cardNumberCopy.length <= 12) {
    return `${cardNumberCopy.slice(0, 4)} ${cardNumberCopy.slice(4, 8)} ${cardNumberCopy.slice(
      8,
      cardNumberCopy.length
    )}`;
  }

  if (cardNumberCopy.length > 12) {
    return `${cardNumberCopy.slice(0, 4)} ${cardNumberCopy.slice(4, 8)} ${cardNumberCopy.slice(
      8,
      12
    )} ${cardNumberCopy.slice(12, cardNumberCopy.length)}`;
  }

  return cardNumberCopy;
};
