import { useState, useEffect } from 'react';
import { CARD_BRAND_CONFIG } from '../constants/cardConfig';
import { CARD_NUMBER_ERROR } from "../constants/errorMessages";
import { CardBrand } from "../types/cardTypes";
import { validateCardBrand } from "../utils/validateCardBrand";

type CardValidationResult = {
  cardBrand: CardBrand;
  isValid: boolean;
  error: string | null;
}

export const useCardBrandValidation = (cardNumber: string): CardValidationResult => {
  const [result, setResult] = useState<CardValidationResult>({
    cardBrand: 'unknown',
    isValid: false,
    error: null
  });

  useEffect(() => {
    const digits = cardNumber.split(' ').join('');
    const isAllDigits = [...digits].every((num) => num >= '0' && num <= '9');

    if (digits === '') {
      setResult({
        cardBrand: 'unknown',
        isValid: false,
        error: CARD_NUMBER_ERROR.required,
      });
      return;
    }

    if (!isAllDigits) {
      setResult({
        cardBrand: 'unknown',
        isValid: false,
        error: CARD_NUMBER_ERROR.onlyNumbers,
      });
      return;
    }

    const detectedBrand = validateCardBrand(digits);

    if (detectedBrand === 'unknown') {
      setResult({
        cardBrand: 'unknown',
        isValid: false,
        error: CARD_NUMBER_ERROR.invalidBrand,
      });

      return;
    }

    const expectedLength = CARD_BRAND_CONFIG[detectedBrand].length;

    if (digits.length !== expectedLength) {
      setResult({
        cardBrand: detectedBrand,
        isValid: false,
        error: `${detectedBrand.toUpperCase()} 카드는 ${expectedLength}자리 숫자여야 합니다.`,
      });

      return;
    }

    setResult({
      cardBrand: detectedBrand,
      isValid: true,
      error: null,
    });
  }, [cardNumber]);

  return result;
}
