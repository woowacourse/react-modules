import { useState } from 'react';
import { getInputStatus, useInput } from './useInput';
import { ERROR_MESSAGE } from '../shared/errorMessages';
import validator from '../shared/utils/validator/validator';
import { CardBrand, Status } from '../shared/types';
import { CARD_NUMBER_FORMAT, VALID_INPUT_LENGTH } from '../shared/constants';
import detectCardBrand from '../shared/utils/useCardBrand';

type UseInputCardNumberReturn = [
  value: string,
  status: Status,
  brand: CardBrand | null,
  errorMessage: string,
  handleChange: (value: string, validLength?: number) => void,
  handleBlur: () => void
];

const useInputCardNumber = (): UseInputCardNumberReturn => {
  const { value, status, setValue, setStatus } = useInput('');
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (value: string, validLength: number = VALID_INPUT_LENGTH.cardNumber) => {
    // 최대길이 검사
    if (cardBrand && value.length > CARD_NUMBER_FORMAT[cardBrand].maxLength) {
      return;
    }

    //  status 업데이트
    setStatus(getInputStatus(value, validLength));

    // Default가 아닌 경우 : Error 검사
    if (status !== 'default') {
      const [isValid, errorMessage] = validator.cardNumber.isValidInput(value);

      // Error인 경우 : 에러 발생
      if (!isValid) {
        setStatus('error');
        setErrorMessage(errorMessage);
        return;
      }
    }

    // Error가 아닌 경우 : 값 업데이트
    setValue(value);
    setErrorMessage('');
    setCardBrand(detectCardBrand({ cardNumber: value }));
  };

  const handleBlur = () => {
    // 미완성인 경우 : Error 상태로 판단
    if (['default', 'pending'].includes(status)) {
      setStatus('error');
      setErrorMessage(ERROR_MESSAGE.cardNumber.isNotFulfilled);
    }
  };

  return [value, status, cardBrand, errorMessage, handleChange, handleBlur];
};

export default useInputCardNumber;
