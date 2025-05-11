import { useMemo, useState } from 'react';
import { determineCardBrand } from '../utils/determineCardBrand';
import { validateCardBrandLength } from '../utils/cardBrandValidations';
import { formatCardNumber, getMaxInputLength } from '../utils/cardFormatting';

export function useCardNumberField() {
  const [cardNumbers, setCardNumbers] = useState('');
  const [formattedCardNumber, setFormattedCardNumber] = useState('');

  const numbersOnly = cardNumbers.replace(/\D/g, '');
  const cardBrand = determineCardBrand(numbersOnly);

  const maxCardLength = getMaxInputLength(cardBrand);

  const cardNumberErrors = useMemo(() => {
    const cardBrandLengthError = validateCardBrandLength(cardBrand, numbersOnly);
    if (cardBrandLengthError) return cardBrandLengthError;

    return '';
  }, [cardNumbers, cardBrand, numbersOnly]);

  const handleCardNumberChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    setCardNumbers(digitsOnly);

    const formatted = formatCardNumber(digitsOnly, cardBrand);
    setFormattedCardNumber(formatted);
  };

  return {
    cardNumbers,
    formattedCardNumber,
    cardBrand,
    handleCardNumberChange,
    cardNumberErrors,
    maxCardLength,
  };
}
