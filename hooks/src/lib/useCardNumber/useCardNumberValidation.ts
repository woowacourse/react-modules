import { useState } from 'react';
import { isCardNumberLessLength } from './useCardNumber.util';
import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import { isContainsNonNumeric } from '../utils/number';
import { CardBrand } from '../domain/cardBrand/cardBrand.type';
import { CARD_BRAND_LENGTH_MAP } from '../domain/cardBrand/cardBrand.constant';

const useCardNumberValidation = () => {
  const [cardNumberError, setCardNumberError] = useState({
    isError: false,
    errorMessage: '',
  });

  const updateCardNumberError = (errorMessage: string, isError: boolean = true) => {
    setCardNumberError({
      isError,
      errorMessage,
    });
  };

  const validateCardNumbers = (value: string, cardBrand: CardBrand) => {
    if (isContainsNonNumeric(value)) {
      updateCardNumberError('숫자만 입력 가능합니다.');

      return CARD_NUMBER_ERROR_TYPE.nonNumeric;
    }

    if (isCardNumberLessLength(value, cardBrand)) {
      updateCardNumberError(`카드 번호는 ${CARD_BRAND_LENGTH_MAP[cardBrand]}자리 숫자여야 합니다.`);

      return CARD_NUMBER_ERROR_TYPE.notFulledCardNumbers;
    }

    updateCardNumberError('', false);

    return CARD_NUMBER_ERROR_TYPE.notError;
  };

  return {
    cardNumberError,
    validateCardNumbers,
  };
};

export default useCardNumberValidation;
