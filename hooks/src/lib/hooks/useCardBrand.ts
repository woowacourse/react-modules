import { useEffect, useState } from 'react';

import { AMEX, DINERS, MASTER, MIN_CARD_NUMBERS_LENGTH, UNION, VISA } from '../constants';
import { Brand, BrandInfo } from '../types/card';

export default function useCardBrand({ cardNumbers }: { cardNumbers: string }) {
  const [brand, setBrand] = useState<Brand>(null);
  // 숫자로 이루어 졌는지

  // 카드 번호 최소 자리 수
  const validateMinLength = () => {
    return cardNumbers.length >= MIN_CARD_NUMBERS_LENGTH;
  };

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
   * 카드 번호에 맞는 카드 브랜드를 반환, 만약 해당하는 카드 브랜드가 없으면 undefined를 반환
   * @param brandInfo : 카드 브랜드 정보
   * @param isValidatedNumbers  : 카드 번호가 카드 브랜드 번호에 속하는 지 여부
   */
  const getBrand = <T>(brandInfo: BrandInfo<T>, isValidatedNumbers: boolean): Brand | undefined => {
    const { length, name } = brandInfo;

    if (cardNumbers.length !== length) return;
    if (isValidatedNumbers) {
      return name;
    }
  };

  /**
   * 카드 브랜드별, 판독 메서드를 가지고 있는 Map 객체
   */
  const brandDetecterMap: Map<Exclude<Brand, null>, () => Brand | undefined> = new Map([
    ['visa', (): Brand | undefined => getBrand(VISA, isBrandNumbers(VISA.numbers))],
    ['master', (): Brand | undefined => getBrand(MASTER, isBrandNumbers(MASTER.numbers))],
    ['diners', (): Brand | undefined => getBrand(DINERS, isBrandNumbers(DINERS.numbers))],
    ['amex', (): Brand | undefined => getBrand(AMEX, isBrandNumbers(AMEX.numbers))],
    [
      'union',
      (): Brand | undefined => {
        const isUnionNumbers = Object.values(UNION.numbers).some((numbers) => isBrandNumbers(numbers));
        return getBrand(UNION, isUnionNumbers);
      },
    ],
  ]);

  const detectCardBrand = () => Array.from(brandDetecterMap.entries()).find(([_, value]) => !!value())?.[0];

  const validateCardBrand = () => {
    // TODO: 카드 번호 최소 길이에 대한 유효성 검사 => CardNumbers에서 해도...?
    if (!validateMinLength()) return setBrand(null);
    // 카드 번호에 맞는 카드 번호 판단
    const cardBrand = detectCardBrand();
    setBrand(cardBrand || null);
  };

  useEffect(() => {
    validateCardBrand();
  }, [cardNumbers]);

  return { brand };
}
