import { CardCVC } from '../types';
import useCardField, { ValidationConfig } from './useCardFields';
import { CARD_TYPES, CardType } from '../constants/cardTypes';
import { CVC } from '../constants/cardConstants';

export default function useCardCVC(cardType?: CardType) {
  const requiredLength = cardType === CARD_TYPES.AMEX ? CVC.AMEX : CVC.DEFAULT;

  const validationConfig: ValidationConfig = {
    requiredLength,
    errorMessages: {
      onlyNumbers: 'CVC는 숫자만 입력 가능합니다',
      invalidValue: `CVC는 ${requiredLength}자리 숫자여야 합니다`,
      emptyValue: 'CVC를 입력해주세요',
    },
  };

  const { value, error, handleChange, reset, isValid, getErrorMessage } =
    useCardField(validationConfig);

  const cardCVC: CardCVC = value ? Number(value) : null;

  const handleCVCChange = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '');
    const maxLength = cardType === CARD_TYPES.AMEX ? CVC.AMEX : CVC.DEFAULT;
    const limitedInput = digitsOnly.slice(0, maxLength);
    handleChange(limitedInput);
  };

  const isCVCValid = () => {
    const requiredLen = cardType === CARD_TYPES.AMEX ? CVC.AMEX : CVC.DEFAULT;
    return isValid() && value.length === requiredLen;
  };

  return {
    cardCVC,
    value,
    error,
    handleChange: handleCVCChange,
    reset,
    isValid: isCVCValid,
    getErrorMessage,
  };
}
