import { useEffect, useState } from 'react';
import { validateNumber } from './utils/validators';

/**
 * 카드 브랜드
 * @property {string} name: 카드 브랜드
 * @property {number} prefixNumberCount: 카드 브랜드를 판별하는 카드 번호 개수 (ex: 마스터 카드 - 2 )
 * @property {number[]} cardTypePatters: 카드 브랜드를 판별하는 카드 번호 배열 (ex: 마스터 카드 - [51,52,53,54])
 */
export interface Brand {
  name: string;
  cardTypePatters: number[];
}
export interface UseCardTypeProps {
  firstCardNumbers: string;
  brands: Brand[];
}

export default function useCardType({ firstCardNumbers, brands }: UseCardTypeProps) {
  const [brand, setBrand] = useState<string | null>(null);

  const findCardBrand = () => {
    if (!validateNumber(firstCardNumbers)) return;

    const cardBrand = brands.find((brand) => {
      const prefixNumberCount = brand.cardTypePatters[0].toString().length;
      const prefix = Number(firstCardNumbers.slice(0, prefixNumberCount));

      return brand.cardTypePatters.includes(prefix);
    });
    return setBrand(cardBrand?.name || null);
  };

  useEffect(() => {
    findCardBrand();
  }, [firstCardNumbers]);
  return {
    brand,
  };
}
