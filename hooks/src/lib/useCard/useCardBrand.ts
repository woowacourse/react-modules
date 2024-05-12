import { useState } from 'react';
import {
  validateAMEX,
  validateDiners,
  validateMaster,
  validateUnion,
  validateVisa,
} from '../validator/validateCardBrand';
import { cardBrandChecker } from '../constants';

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState('');

  const determineCardBrand = (value: string) => {
    const isDiners = validateDiners(value);
    const isAMEX = validateAMEX(value);
    const isVisa = validateVisa(value);
    const isMaster = validateMaster(value);
    const isUnion = validateUnion(value);

    const brands = {
      DINERS: isDiners,
      AMEX: isAMEX,
      VISA: isVisa,
      MASTER: isMaster,
      UNION_PAY: isUnion,
    };

    const trueKey = Object.entries(brands).filter(([, value]) => value === true);
    const validBrand = trueKey.length > 0 ? trueKey[0][0] : '';
    setCardBrand(validBrand);
    return validBrand;
  };

  return {
    cardBrand,
    setCardBrand,
    validMaxLength: cardBrandChecker[cardBrand].validMaxLength,
    determineCardBrand,
  };
};

export default useCardBrand;
