import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { validateCardNumber, validateFullCardNumber } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

type CardBrand = 'VISA' | 'MASTER' | 'DINERS' | 'AMEX' | 'UNIONPAY' | 'UNKNOWN';

export function useCardNumbersInput() {
  const [cardNumberGroups, setCardNumberGroups] = useState(['', '', '', '']);

  const cardNumber = cardNumberGroups.join('');

  const [cardBrand, setCardBrand] = useState<CardBrand>('UNKNOWN');

  useEffect(() => {
    setCardBrand(determineCardBrand(cardNumber));
  }, [cardNumber]);

  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name);

    const newCardNumberGroups = cardNumberGroups.map((num, i) => (i === index ? value : num));

    const newCardNumber = newCardNumberGroups.join('');
    const newCardBrand = determineCardBrand(newCardNumber);

    const cardNumberError = validateCardNumber(value);
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
