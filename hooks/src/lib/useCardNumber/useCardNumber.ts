import { useMemo, useState } from 'react';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_RULES } from './cardRules';
import identifyCardBrand from './identifyCardBrand';

export const CARD_NUMBER = {
  maxLength: 4,
  fieldCount: 4,
};

const splitCardNumber = (cardNumber: string): string[] => {
  if (!cardNumber) return Array(CARD_NUMBER.fieldCount).fill('');

  const brand = identifyCardBrand(cardNumber);
  const fieldLengths = CARD_RULES[brand].fieldLengths;
  const requiredFields = CARD_RULES[brand].fields;

  const result: string[] = [];
  let start = 0;

  for (let i = 0; i < requiredFields; i++) {
    const fieldLength = fieldLengths[i];
    const end = Math.min(start + fieldLength, cardNumber.length);
    result.push(cardNumber.substring(start, end));
    start += fieldLength;
  }

  while (result.length < CARD_NUMBER.fieldCount) {
    result.push('');
  }

  return result;
};

export const useCardNumber = (initialCardNumber: string = '', initialErrorMsg: string = '') => {
  const [cardNumber, setCardNumber] = useState<string>(initialCardNumber);
  const [cardNumberError, setCardNumberError] = useState<string[]>(Array(CARD_NUMBER.fieldCount).fill(initialErrorMsg));

  const cardBrand = useMemo(() => identifyCardBrand(cardNumber), [cardNumber]);

  const fieldLengthArr = useMemo(() => CARD_RULES[cardBrand].fieldLengths, [cardBrand]);
  const requiredFields = useMemo(() => CARD_RULES[cardBrand].fields, [cardBrand]);

  const formattedCardNumber = useMemo(() => splitCardNumber(cardNumber), [cardNumber]);

  const handleCardNumberChange = ({ idx, value }: { idx: number; value: string }) => {
    if (!isOnlyDigits(value) && value !== '') {
      const newErrors = [...cardNumberError];
      newErrors[idx] = CARD_NUMBER_ERROR.onlyNumbers;
      setCardNumberError(newErrors);
      return;
    }

    const newErrors = [...cardNumberError];
    newErrors[idx] = '';
    setCardNumberError(newErrors);

    const maxLength = fieldLengthArr[idx] || CARD_NUMBER.maxLength;
    if (value.length > maxLength) {
      value = value.substring(0, maxLength);
    }

    const updatedFields = [...formattedCardNumber];
    updatedFields[idx] = value;

    let newCardNumber = '';
    for (let i = 0; i < requiredFields; i++) {
      newCardNumber += updatedFields[i] || '';
    }

    setCardNumber(newCardNumber);
  };

  const isCardNumberValid = () => {
    const expectedTotalLength = CARD_RULES[cardBrand].lengths[0];

    for (let i = 0; i < requiredFields; i++) {
      const expectedFieldLength = fieldLengthArr[i];
      if ((formattedCardNumber[i] || '').length !== expectedFieldLength) {
        return false;
      }
    }

    const formatPattern = CARD_RULES[cardBrand].formatPattern;
    if (!formatPattern.test(cardNumber)) {
      return false;
    }

    return cardNumber.length === expectedTotalLength;
  };

  return {
    cardNumber,
    formattedCardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
    cardBrand,
    requiredFields,
    fieldLengthArr,
  };
};

export default useCardNumber;
