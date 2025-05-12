import { useState, useEffect } from 'react';
import { CardBrand } from '../useCardNumber';
import { CARD_BRAND_CONFIG } from '../constants/cardConfig';
import { CARD_NUMBER_ERROR } from "../constants/errorMessages";

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

    const p1 = digits.slice(0, 1);
    const p2 = digits.slice(0, 2);
    const p3 = digits.slice(0, 3);
    const p4 = digits.slice(0, 4);
    const p6 = digits.slice(0, 6);

    const n2 = parseInt(p2, 10);
    const n3 = parseInt(p3, 10);
    const n4 = parseInt(p4, 10);
    const n6 = parseInt(p6, 10);

    const isDiners = p2 === '36' && digits.length === CARD_BRAND_CONFIG.diners.length;

    const isAmex = (p2 === '34' || p2 === '37') && digits.length === CARD_BRAND_CONFIG.amex.length;

    const isUnionPay =
      digits.length === CARD_BRAND_CONFIG.unionpay.length &&
      ((n6 >= 622126 && n6 <= 622925) || (n3 >= 624 && n3 <= 626) || (n4 >= 6282 && n4 <= 6288));

    const isVisa = p1 === '4' && digits.length === CARD_BRAND_CONFIG.visa.length;

    const isMastercard =
      ((n2 >= 51 && n2 <= 55) || (n2 >= 22 && n2 <= 27)) &&
      digits.length === CARD_BRAND_CONFIG.mastercard.length;

    const detectedBrand: CardBrand = (() => {
      if (isDiners) {
        return 'diners';
      } else if (isAmex) {
        return 'amex';
      } else if (isUnionPay) {
        return 'unionpay';
      } else if (isVisa) {
        return 'visa';
      } else if (isMastercard) {
        return 'mastercard';
      } else {
        return 'unknown';
      }
    })();

    const expectedLen = CARD_BRAND_CONFIG[detectedBrand].length;
    const validLength = digits.length === expectedLen;

    if (detectedBrand === 'unknown') {
      setResult({
        cardBrand: 'unknown',
        isValid: false,
        error: CARD_NUMBER_ERROR.invalidBrand,
      });

      return;
    }

    if (!validLength) {
      setResult({
        cardBrand: detectedBrand,
        isValid: false,
        error: `${detectedBrand.toUpperCase()} 카드는 ${expectedLen}자리 숫자여야 합니다.`,
      });

      return;
    }
  }, [cardNumber]);

  return result;
}
