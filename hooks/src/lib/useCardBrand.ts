import { CARD_BRAND } from './constants';

interface UseCardBrandProps {
  cardNumber: string;
}

export default function useCardBrand({ cardNumber }: UseCardBrandProps) {
  const isExistBrand = (prefixes: Prefix[]): boolean => {
    return prefixes.some((prefix) => {
      // prefix가 숫자면 앞 글자를 비교
      if (typeof prefix === 'number') {
        return cardNumber.startsWith(prefix.toString());
      }

      // prefix가 범위면 숫자로 변환하여 비교
      const prefixLength = prefix.to.toString().length;
      const startNumber = Number(cardNumber.substring(0, prefixLength));

      return startNumber >= prefix.from && startNumber <= prefix.to;
    });
  };

  const getCardBrand = (): Brand => {
    for (const [key, { prefixes }] of Object.entries(CARD_BRAND)) {
      const brand = key as Brand;

      if (isExistBrand(prefixes)) {
        return brand;
      }
    }
    return 'etc';
  };

  return { brand: getCardBrand() };
}
