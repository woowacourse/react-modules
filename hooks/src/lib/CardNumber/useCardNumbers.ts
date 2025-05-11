import { useState } from 'react';

import useCardNumbersValidate from './useCardNumbersValidate';
import { cardTypeRules } from './cardTypeRules';

type CardType = keyof typeof cardTypeRules;

export type CardNumbersResult = {
  cardNumbers: string;
  formattedCardNumbers: string;
  cardType: CardType | null;
  cardNumberMaxLength: number;
  errorMessage: string | null;
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useCardNumbers = (): CardNumbersResult => {
  const [cardNumbers, setCardNumbers] = useState<string>('');
  const [cardType, setCardType] = useState<CardType | null>(null);
  const { errorMessage, validateCardNumbers } = useCardNumbersValidate();

  const cardNumberMaxLength = cardType ? cardTypeRules[cardType].length : 16;

  const getCardType = (cardNumber: string) => {
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

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType(getCardType(e.target.value));

    validateCardNumbers(e.target.value, cardType);
    setCardNumbers(e.target.value);
  };

  const getFormattedCardNumber = (cardNumbers: string) => {
    if (!cardType) return cardNumbers;

    const formattedCardNumbers = cardNumbers.replace(/\s/g, '');
    const format = cardTypeRules[cardType].format;
    let result = '';
    let currentIndex = 0;

    format.forEach((length) => {
      const segment = formattedCardNumbers.slice(
        currentIndex,
        currentIndex + parseInt(length)
      );
      if (segment) {
        result +=
          segment +
          (currentIndex + parseInt(length) < formattedCardNumbers.length
            ? '-'
            : '');
      }
      currentIndex += parseInt(length);
    });

    return result;
  };

  const formattedCardNumbers = getFormattedCardNumber(cardNumbers);
  return {
    cardNumbers,
    formattedCardNumbers,
    cardType,
    cardNumberMaxLength,
    errorMessage,
    handleCardNumberChange
  };
};

export default useCardNumbers;
