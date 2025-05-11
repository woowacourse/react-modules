import { useMemo, useState } from 'react';
import { validateNumberError } from '../utils/cardInputValidations';
import { determineCardBrand } from '../utils/determineCardBrand';
import { validateCardBrandLength } from '../utils/cardBrandValidations';

export function useCardNumberField() {
  const [cardNumbers, setCardNumbers] = useState('');

  const cardBrand = determineCardBrand(cardNumbers);

  const cardNumberErrors = useMemo(() => {
    const numError = validateNumberError(cardNumbers);
    if (numError) return numError;

    const cardBrandLengthError = validateCardBrandLength(cardBrand, cardNumbers);
    if (cardBrandLengthError) return cardBrandLengthError;

    return '';
  }, [cardNumbers]);

  const handleCardNumberChange = (value: string) => {
    setCardNumbers(value);
  };

  return { cardNumbers, cardBrand, handleCardNumberChange, cardNumberErrors };
}
