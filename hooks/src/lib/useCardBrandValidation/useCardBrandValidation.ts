import { useMemo } from 'react';
import { CARD_BRAND_CONFIG } from '../constants/cardConfig';
import { CARD_NUMBER_ERROR } from "../constants/errorMessages";
import { CardBrand } from "../types/cardTypes";
import { validateCardBrand } from "../utils/validateCardBrand";

type CardValidationResult = {
  cardBrand: CardBrand | null;
  isValid: boolean;
  error: string | null;
}

export const useCardBrandValidation = (cardNumber: string): CardValidationResult => {
  return useMemo(() => {
    const digits = cardNumber.split(' ').join('');
    const isAllDigits = [...digits].every((num) => num >= '0' && num <= '9');

    if (digits === '') {
      return {
        cardBrand: null,
        isValid: false,
        error: CARD_NUMBER_ERROR.required,
      };
    }

    if (!isAllDigits) {
      return {
        cardBrand: null,
        isValid: false,
        error: CARD_NUMBER_ERROR.onlyNumbers,
      }
    }

    const detectedBrand = validateCardBrand(digits);

    if (detectedBrand === null) {
      return {
        cardBrand: null,
        isValid: false,
        error: CARD_NUMBER_ERROR.invalidBrand,
      };
    }

    const expectedLength = CARD_BRAND_CONFIG[detectedBrand].length;

    if (digits.length !== expectedLength) {
      return {
        cardBrand: detectedBrand,
        isValid: false,
        error: `${detectedBrand.toUpperCase()} 카드는 ${expectedLength}자리 숫자여야 합니다.`,
      };
    }

    return {
      cardBrand: detectedBrand,
      isValid: true,
      error: null,
    };
  }, [cardNumber]);
}
