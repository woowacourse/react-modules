import { useEffect, useState } from 'react';
import { useCardBrandValidation } from "../useCardBrandValidation";

export const useCardFormatter = (cardNumber: string) => {
  const [number, setNumber] = useState<string>('');
  const [formattedNumber, setFormattedNumber] = useState<string>('');
  const { cardBrand } = useCardBrandValidation(cardNumber);

  useEffect(() => {
    if (!number) {
      setFormattedNumber('');
      return;
    }

    const segments =
      cardBrand === 'amex'
        ? [number.slice(0, 4), number.slice(4, 10), number.slice(10, 15)]
        : cardBrand === 'diners'
          ? [number.slice(0, 2), number.slice(2, 8), number.slice(8, 14)]
          :
          [number.slice(0, 4), number.slice(4, 8), number.slice(8, 12), number.slice(12, 16)];

    const formatted = segments
      .filter((segment) => segment.length > 0)
      .join(' ');

    setFormattedNumber(formatted);
  }, [number, cardBrand]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input
      .split('')
      .filter((num) => num >= '0' && num <= '9')
      .join('');

    setNumber(digits);
  };

  return {
    formattedNumber,
    handleCardNumberChange
  };
};
