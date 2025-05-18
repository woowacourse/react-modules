import { useMemo } from 'react';
import { useCardBrandValidation } from "../useCardBrandValidation";
import { CARD_BRAND_SEGMENT } from "../constants/cardConfig";

export const useCardFormatter = (cardNumber: string) => {
  const rawNumber = useMemo(() =>
      cardNumber
        .split('')
        .filter(char => char >= '0' && char <= '9')
        .join(''),
    [cardNumber]);

  const { cardBrand } = useCardBrandValidation(cardNumber);

  const formattedNumber = useMemo(() => {
    if (!rawNumber) {
      return '';
    }

    const pattern = cardBrand !== null ? CARD_BRAND_SEGMENT[cardBrand] : CARD_BRAND_SEGMENT.visa;

    const segments = pattern.reduce<string[]>((acc: string[], length: number) => {
      const offset = acc.reduce((sum, segment) => sum + segment.length, 0);
      const slice = rawNumber.slice(offset, offset + length);
      return slice ? [...acc, slice] : acc;
    }, []);

    return segments.join(' ');
  }, [rawNumber, cardBrand]);

  return { formattedNumber };
};
