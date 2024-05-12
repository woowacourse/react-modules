import { useEffect, useState } from 'react';

import { CARD_BRANDS } from '../constants';
import { Brand } from '../types/card';

export default function useCardBrand({ cardNumbers }: { cardNumbers: string }) {
  const [brand, setBrand] = useState<Brand>(null);
  /**
   * 카드 번호에 카드 브랜드에 적합한 번호가 존재하는 지 여부를 판단하는 함수
   * @param brandNumbers : 카드 브랜드에 속하는 번호들
   */
  const isBrandNumbers = (brandNumbers: number[]) => {
    const prefixNumberCount = brandNumbers[0].toString().length;
    const prefix = Number(cardNumbers.slice(0, prefixNumberCount));

    return brandNumbers.includes(prefix);
  };
  /**
   * number[] 인지 판단
   */
  function isNumberArray(arr: number[] | number[][]): arr is number[] {
    return Array.isArray(arr) && arr.every((item) => typeof item === 'number');
  }

  const detectCardBrand = (): Brand | undefined => {
    return CARD_BRANDS.find(({ numbers, length }) => {
      if (cardNumbers.length !== length) return false;
      // 브랜드를 판별하는 숫자가 number[]인 경우에 isBrandNumbers로 바로 판단
      if (isNumberArray(numbers)) return isBrandNumbers(numbers);
      //  브랜드를 판별하는 숫자의 자릿수가 다양한 유니온의 경우, 이중배열이라서 이중 배열을 돌면서 판단
      return numbers.some((array) => isBrandNumbers(array));
    })?.name;
  };

  const validateCardBrand = () => {
    // 카드 번호에 맞는 카드 번호 판단
    const cardBrand = detectCardBrand();

    setBrand(cardBrand || null);
  };

  useEffect(() => {
    validateCardBrand();
  }, [cardNumbers]);

  return { brand };
}
