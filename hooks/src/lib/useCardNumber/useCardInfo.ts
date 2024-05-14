import { useState } from 'react';
import Validation from '../utils/validation';

type CardBrandType = 'visa' | 'mastercard' | 'diners' | 'amex' | 'unionpay' | '';

interface ValidateCardBrandProps {
  brand: CardBrandType;
  format: number[];
}

type ValidateCardBrandType = (value: string) => ValidateCardBrandProps;

const validateCardBrand: ValidateCardBrandType = (value: string) => {
  if (Validation.isVisa(value)) {
    return { brand: 'visa', format: [4, 4, 4, 4] };
  }

  if (Validation.isMastercard(value)) {
    return { brand: 'mastercard', format: [4, 4, 4, 4] };
  }

  if (Validation.isDiners(value)) {
    return { brand: 'diners', format: [4, 6, 4] };
  }

  if (Validation.isAmex(value)) {
    return { brand: 'amex', format: [4, 6, 5] };
  }

  if (Validation.isUnionpay(value)) {
    return { brand: 'unionpay', format: [4, 4, 4, 4] };
  }

  return { brand: '', format: [4, 4, 4, 4] };
};

const useCardInfo = () => {
  const [brand, setBrand] = useState<CardBrandType>('');

  const updateCardInfo = (value: string) => {
    const cardInfo = validateCardBrand(value);

    setBrand(cardInfo.brand);

    return cardInfo.format;
  };

  return { brand, updateCardInfo };
};

export default useCardInfo;
