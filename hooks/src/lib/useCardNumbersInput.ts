import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { validateCardNumber, validateFullCardNumber } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';
import { CARD_FORMAT_PATTERNS } from './types/cardBrand';
import { determineCardBrand } from './utils/determineCardBrand';

export type CardNumberInputElement = HTMLInputElement & {
  name: '0' | '1' | '2' | '3';
};

export type CardNumberInputEvent = ChangeEvent<CardNumberInputElement>;

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

  function onChangeHandler(e: CardNumberInputEvent) {
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
