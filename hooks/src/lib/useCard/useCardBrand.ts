import { useState } from 'react';
import {
  validateAMEX,
  validateDiners,
  validateMaster,
  validateUnion,
  validateVisa,
} from '../validator/validateCardBrand';
import { CARD_BRAND_INFO } from '../constants';

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type CardBrand = 'DINERS' | 'AMEX' | 'VISA' | 'MASTER' | 'UNION_PAY' | 'NONE';
type CardBrandChecker = Record<Exclude<CardBrand, 'NONE'>, boolean>;

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>('NONE');

  const determineCardBrand = (value: string) => {
    const isDiners = validateDiners(value);
    const isAMEX = validateAMEX(value);
    const isVisa = validateVisa(value);
    const isMaster = validateMaster(value);
    const isUnion = validateUnion(value);

    const brands: CardBrandChecker = {
      DINERS: isDiners,
      AMEX: isAMEX,
      VISA: isVisa,
      MASTER: isMaster,
      UNION_PAY: isUnion,
    };

    const validBrandList = (Object.entries(brands) as Entries<CardBrandChecker>).filter(
      ([, value]) => value === true,
    );
    const validBrand = validBrandList.length > 0 ? validBrandList[0][0] : 'NONE';

    setCardBrand(validBrand);
  };

  return {
    cardBrand,
    setCardBrand,
    validMaxLength: CARD_BRAND_INFO[cardBrand].validMaxLength,
    determineCardBrand,
  };
};

export default useCardBrand;
