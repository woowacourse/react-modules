import { CardCVC } from '../types/types';
import useCardField, { ValidationConfig } from './useCardFields';

export default function useCardCVC(cardType?: string | null) {
  const requiredLength = cardType === 'American Express' ? 4 : 3;

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
    handleChange(digitsOnly);
  };

  const isCVCValid = () => {
    const requiredLen = cardType === 'American Express' ? 4 : 3;
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
