import { useEffect, useState } from 'react';
import { useCardBrandValidation } from "../useCardBrandValidation";
import { CARD_BRAND_SEGMENT } from "../constants/cardConfig";

export const useCardFormatter = (cardNumber: string) => {
  const [rawNumber, setRawNumber] = useState<string>('');
  const [formattedNumber, setFormattedNumber] = useState<string>('');
  const { cardBrand } = useCardBrandValidation(cardNumber);

  useEffect(() => {
    if (!rawNumber) {
      setFormattedNumber('');
      return;
    }

    const pattern = CARD_BRAND_SEGMENT[cardBrand] || CARD_BRAND_SEGMENT.unknown;

    const segments = pattern.reduce<string[]>((acc, length) => {
      const offset = acc.reduce((sum, segment) => sum + segment.length, 0);
      const slice = rawNumber.slice(offset, offset + length);
      return slice ? [...acc, slice] : acc;
    }, []);

    setFormattedNumber(segments.join(' '));
  }, [rawNumber, cardBrand]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input
      .split('')
      .filter((num) => num >= '0' && num <= '9')
      .join('');

    setRawNumber(digits);
  };

  return {
    formattedNumber,
    handleCardNumberChange
  };
};
