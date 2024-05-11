import { useCallback, useMemo, useState } from 'react';

import { CARD_BRAND_NAME } from '../constants/cardBrandRule';
import getCardNumberValidator from './getCardNumberValidator';
import getCheckCardBrandRule from './getCheckCardBrand';
import getErrorMessage from '../utils/getErrorMessage';
import getFormattedCardNumber from './getFormattedCardNumber';
import getOnChange from '../utils/getOnChange';

export default function useCardNumber(
  targetBrandNames: (typeof CARD_BRAND_NAME)[number][] = [...CARD_BRAND_NAME]
) {
  const [cardNumber, setCardNumber] = useState('');

  const onChange = useCallback(() => getOnChange(setCardNumber), []);

  const checkCardBrandRule = useCallback(
    getCheckCardBrandRule(targetBrandNames),
    targetBrandNames
  );

  const cardNumberValidators = useMemo(
    () => getCardNumberValidator(targetBrandNames),
    targetBrandNames
  );

  const errorMessage = getErrorMessage(cardNumber, cardNumberValidators);

  const isValid = errorMessage === null;

  const cardBrandRule = checkCardBrandRule(cardNumber);

  const formattedCardNumber =
    cardBrandRule && cardBrandRule.numberLength === cardNumber.length
      ? getFormattedCardNumber(cardNumber, cardBrandRule.formatArray)
      : null;

  return {
    cardNumber,
    setCardNumber,
    onChange,
    errorMessage,
    isValid,
    cardBrandName: cardBrandRule?.name ?? null,
    cardBrandRule: cardBrandRule ?? null,
    formattedCardNumber,
  };
}
