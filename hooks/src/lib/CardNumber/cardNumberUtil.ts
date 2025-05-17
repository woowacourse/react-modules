import { cardTypeRules } from './cardTypeRules';

export const getCardType = (cardNumber: string) => {
  if (cardNumber.startsWith('4')) {
    return 'Visa';
  }

  if (cardNumber.startsWith('5')) {
    const firstTwoDigits = parseInt(cardNumber.substring(0, 2));

    if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
      return 'Master';
    }
  }

  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    return 'Amex';
  }

  if (cardNumber.startsWith('36')) {
    return 'Diners';
  }

  if (cardNumber.startsWith('62')) {
    if (cardNumber.length >= 3) {
      const firstThreeDigits = parseInt(cardNumber.substring(0, 3));
      if (firstThreeDigits >= 624 && firstThreeDigits <= 626) {
        return 'UnionPay';
      }
    }

    if (cardNumber.startsWith('622')) {
      if (cardNumber.length >= 6) {
        const firstSixDigits = parseInt(cardNumber.substring(0, 6));
        if (firstSixDigits >= 622126 && firstSixDigits <= 622925) {
          return 'UnionPay';
        }
      }
    }

    if (cardNumber.startsWith('628')) {
      if (cardNumber.length >= 4) {
        const firstFourDigits = parseInt(cardNumber.substring(0, 4));
        if (firstFourDigits >= 6282 && firstFourDigits <= 6288) {
          return 'UnionPay';
        }
      }
    }
  }

  return null;
};

export const getFormattedCardNumber = (
  cardNumbers: string,
  cardType: string
) => {
  if (!cardType) return cardNumbers;

  const formattedCardNumbers = cardNumbers.replace(/\s/g, '');
  const format = cardTypeRules[cardType].format;
  let result = '';
  let currentIndex = 0;

  format.forEach((length) => {
    const segment = formattedCardNumbers.slice(
      currentIndex,
      currentIndex + length
    );
    if (segment) {
      result +=
        segment +
        (currentIndex + length < formattedCardNumbers.length ? '-' : '');
    }
    currentIndex += length;
  });

  return result;
};

export const getCardNumberMaxLength = (cardType: string) => {
  return cardType ? cardTypeRules[cardType].length : 16;
};
