import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import DEFAULT_CARD_BRANDS from '../constants/defaultCardBrands';

import { getValidationResult, validateInitialParams } from './useCardBrand.util';

interface CardBrandParams {
  allowedBrands?: string[];
  initialValue?: string;
  errorMessages?: CardBrandErrorMessages;
}

interface BrandValidationResult {
  brand: string;
  validationResult: ValidationResult;
  handleUpdateBrand: (value: string) => void;
}

export interface CardBrandErrorMessages {
  invalidBrand: string;
  emptyAllowedBrands: string;
  initialValueNotExistsInAllowedBrands: string;
}

export const DEFAULT_PARAMS = {
  allowedBrands: DEFAULT_CARD_BRANDS,
  initialValue: '',
  errorMessages: {
    invalidBrand: '지원하지 않는 카드사입니다. 다른 카드를 선택해주세요.',
    emptyAllowedBrands:
      '[ERROR] 카드사 목록에는 최소 1개 이상의 카드사가 포함되어야 합니다. 다시 확인해주세요.',
    initialValueNotExistsInAllowedBrands:
      '[ERROR] 카드사 목록에 포함되지 않은 카드를 초기값으로 설정하실 수 없습니다. 다시 확인해주세요.',
  },
};

export default function useCardBrand({
  allowedBrands = DEFAULT_PARAMS.allowedBrands,
  initialValue = DEFAULT_PARAMS.initialValue,
  errorMessages = DEFAULT_PARAMS.errorMessages,
}: CardBrandParams = {}): BrandValidationResult {
  validateInitialParams(allowedBrands, initialValue, errorMessages);

  const [brand, setBrand] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(allowedBrands, initialValue, errorMessages),
  );

  const handleUpdateBrand = (value: string) => {
    setBrand(value);
    setValidationResult(getValidationResult(allowedBrands, value, errorMessages));
  };

  return { brand, validationResult, handleUpdateBrand };
}
