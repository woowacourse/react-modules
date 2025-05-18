import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { validateCardNumber, validateFullCardNumber } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

type CardBrand = 'VISA' | 'MASTER' | 'DINERS' | 'AMEX' | 'UNIONPAY' | 'UNKNOWN';

const CARD_FORMAT_PATTERNS = {
  VISA: [4, 4, 4, 4],
  MASTER: [4, 4, 4, 4],
  DINERS: [4, 6, 4],
  AMEX: [4, 6, 5],
  UNIONPAY: [4, 4, 4, 4],
  UNKNOWN: [4, 4, 4, 4],
};

export function useCardNumbersInput() {
  const [cardNumberGroups, setCardNumberGroups] = useState(['', '', '', '']);
  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  const cardNumber = cardNumberGroups.join('');
  const cardBrand = determineCardBrand(cardNumber);
  const formatPattern = CARD_FORMAT_PATTERNS[cardBrand];

  useEffect(() => {
    if (cardNumber) {
      formatCardNumber(cardNumber);
    }
  }, [cardNumber]);

  function formatCardNumber(number: string) {
    const cleanNumber = number.replace(/\D/g, '');
    const pattern = CARD_FORMAT_PATTERNS[cardBrand];

    let formattedGroups: string[] = [];
    let startIndex = 0;

    for (let i = 0; i < pattern.length; i++) {
      const groupSize = pattern[i];
      const endIndex = startIndex + groupSize;
      const group = cleanNumber.substring(startIndex, endIndex);
      formattedGroups.push(group);
      startIndex = endIndex;
    }

    setCardNumberGroups(formattedGroups);
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name);

    const cardNumberError = validateCardNumber(value);

    const numericValue = value.replace(/\D/g, '');
    const currentFormatPattern = CARD_FORMAT_PATTERNS[cardBrand];
    const maxLength = currentFormatPattern[index] || 4;
    const truncatedValue = numericValue.substring(0, maxLength);

    let newCardNumberGroups = [...cardNumberGroups];
    newCardNumberGroups[index] = truncatedValue;

    const newCardNumber = newCardNumberGroups.join('');
    const newCardBrand = determineCardBrand(newCardNumber);

    const fullCardNumberError = validateFullCardNumber(newCardBrand, newCardNumber);

    const errorResult = { ...cardNumberError, ...fullCardNumberError };
    const errorMessage = getFirstErrorMessage(errorResult, 'NUMBER');

    setCardNumberGroups(newCardNumberGroups);
    setError({
      isValid: !errorMessage,
      errorMessage: errorMessage || '',
    });
  }

  return {
    cardNumberGroups,
    cardNumber,
    cardBrand,
    formatPattern,
    onChangeHandler,
    error,
  };
}

function determineCardBrand(cardNumber: string): CardBrand {
  const cleanNumber = cardNumber.replace(/\D/g, '');

  if (cleanNumber[0] === '4') {
    return 'VISA';
  } else if (cleanNumber[0] === '5' && cleanNumber[1] >= '1' && cleanNumber[1] <= '5') {
    return 'MASTER';
  } else if (cleanNumber.startsWith('36')) {
    return 'DINERS';
  } else if (cleanNumber.startsWith('34') || cleanNumber.startsWith('37')) {
    return 'AMEX';
  } else if (cleanNumber.startsWith('62')) {
    if (cleanNumber[2] >= '4' && cleanNumber[2] <= '6') {
      return 'UNIONPAY';
    } else if (cleanNumber[2] === '8' && cleanNumber[3] >= '2' && cleanNumber[3] <= '8') {
      return 'UNIONPAY';
    } else if (
      cleanNumber[2] === '2' &&
      parseInt(cleanNumber.slice(3, 6), 10) >= 126 &&
      parseInt(cleanNumber.slice(3, 6), 10) <= 925
    ) {
      return 'UNIONPAY';
    }
  }

  return 'UNKNOWN';
}
