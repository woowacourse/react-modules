import { useMemo, useState, useEffect } from 'react';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_RULES } from './cardRules';
import identifyCardBrand from './identifyCardBrand';

export const CARD_NUMBER = {
  maxLength: 4,
  fieldCount: 4,
};

const splitInitialCardNumber = (cardNumber: string): string[] => {
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
  const [formattedCardNumber, setFormattedCardNumber] = useState<string[]>(splitInitialCardNumber(initialCardNumber));
  const [cardNumberError, setCardNumberError] = useState<string[]>(Array(CARD_NUMBER.fieldCount).fill(initialErrorMsg));

  const cardBrand = useMemo(() => identifyCardBrand(formattedCardNumber[0]), [formattedCardNumber[0]]);
  const fieldLengthArr = useMemo(() => CARD_RULES[cardBrand].fieldLengths, [cardBrand]);
  const requiredFields = useMemo(() => CARD_RULES[cardBrand].fields, [cardBrand]);

  const cardNumber = useMemo(() => {
    let result = '';

    for (let i = 0; i < requiredFields; i++) {
      result += formattedCardNumber[i] || '';
    }
    return result;
  }, [formattedCardNumber, requiredFields]);

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

    const newFormattedCardNumber = [...formattedCardNumber];
    newFormattedCardNumber[idx] = value;
    setFormattedCardNumber(newFormattedCardNumber);
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

  useEffect(() => {
    const adjustedFields = [...formattedCardNumber].slice(0, requiredFields);

    for (let i = 0; i < requiredFields; i++) {
      if (i < adjustedFields.length) {
        const maxLength = fieldLengthArr[i];
        if (adjustedFields[i].length > maxLength) {
          adjustedFields[i] = adjustedFields[i].substring(0, maxLength);
        }
      }
    }

    setFormattedCardNumber(adjustedFields);
  }, [cardBrand]);

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
