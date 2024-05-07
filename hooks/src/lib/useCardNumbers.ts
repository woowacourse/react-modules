import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import useInput from './useInput';
import { validateLengthOver, validateNumber } from '../validate/validate';
import { CARD_NUMBERS_ERROR_MESSAGES } from '../constants/error';
import { CARD_NUMBER_TOTAL_LENGTH } from '../constants/length';
import { CardNumbersError } from '../types/cardNumbers';
import getCardBrand from '../utils/checkCardBrandType';
import { CARD_BRAND, CARD_BRAND_CONFIG } from '../constants/cardBrand';
import { formatCardNumbers } from '../utils/formatCardNumbers';

const cardNumbersValidates = (value: string, validLength: number) => {
  validateNumber(value);
  validateLengthOver(value, validLength);
};

const useCardNumbers = (initialValues: string = '') => {
  const validateLengthRef = useRef<number>(CARD_NUMBER_TOTAL_LENGTH);

  const [cardBrand, setCardBrand] = useState<CARD_BRAND>('UNKNOWN');
  const [formatValue, setFormatValue] = useState<string>('');

  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<CardNumbersError>(
      initialValues,
      (value) => cardNumbersValidates(value, validateLengthRef.current),
      validateLengthRef.current
    );

  useEffect(() => {
    setFormatValue(
      formatCardNumbers(value, CARD_BRAND_CONFIG[cardBrand].format)
    );
  }, [cardBrand, value]);

  const setValidateLength = (newLength: number) => {
    validateLengthRef.current = newLength;
  };

  const checkCardBrandType = (value: string) => {
    const cardBrand = getCardBrand(value);
    setCardBrand(cardBrand);
    setValidateLength(CARD_BRAND_CONFIG[cardBrand].length);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 6) {
      checkCardBrandType(e.target.value);
    }

    onChange(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlurValidLength(e);
  };

  return {
    value,
    cardBrand,
    formatValue,
    onChange: handleChange,
    onBlur: handleBlur,
    errorMessage: errorStatus && CARD_NUMBERS_ERROR_MESSAGES[errorStatus],
  };
};

export default useCardNumbers;
