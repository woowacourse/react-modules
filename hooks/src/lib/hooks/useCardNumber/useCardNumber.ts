import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

import { CardInputItem } from '../../types/cardInputItem.types';

const CARD_NUMBER_INPUTS_LENGTH = 4;

/**
 *
 * @description
 * useCardNumber 훅은 카드 번호 입력을 관리하는 커스텀 훅입니다.
 * 카드 번호의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @param  validLength 카드 번호의 유효 길이
 * @returns 카드 번호 입력 상태와 핸들러를 반환합니다.
 * @returns cardNumbers 카드 번호 입력 상태
 * @returns errorMessage 카드 번호 입력 오류 메시지
 * @returns handleCardNumberChange 카드 번호 입력 핸들러
 * @example
 * const { cardNumbers, errorMessage, handleCardNumberChange } = useCardNumber();
 * <input
 *   type="text"
 *   value={cardNumbers[0].value}
 *   onChange={(e) => handleCardNumberChange(e, 0)}
 *   placeholder="카드 번호를 입력하세요"
 * />
 */
export const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState<CardInputItem[]>(
    Array.from({ length: CARD_NUMBER_INPUTS_LENGTH }, () => ({ value: '', isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateCardInput(newValue, CARD_NUMBER_INPUTS_LENGTH);

    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[index].value = newValue;
      newCardNumbers[index].isValid = isValid;
      return newCardNumbers;
    });

    if (!isValid) {
      setErrorMessage(errorMessage);
    }
  };

  return {
    cardNumbers,
    errorMessage,
    handleCardNumberChange,
  };
};
