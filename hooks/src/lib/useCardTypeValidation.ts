import { useState } from 'react';
import { CARD_TYPE } from './constants';

interface ValidationResult {
  cardType: 'Visa' | 'Mastercard' | 'none';
}

const useCardTypeValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    cardType: 'none',
  });

  const handleCardTypeChange = (value: string) => {
    if (value.charAt(0) === CARD_TYPE.visaNumber) {
      setValidationResult({ cardType: 'Visa' });
      return;
    }

    const startNumber = parseInt(value.substring(0, 2), 10);

    if (CARD_TYPE.minMastercardNumber <= startNumber && startNumber <= CARD_TYPE.maxMastercardNumber) {
      setValidationResult({ cardType: 'Mastercard' });
      return;
    }
    setValidationResult({ cardType: 'none' });
  };

  return { validationResult, handleCardTypeChange };
};

export default useCardTypeValidation;
