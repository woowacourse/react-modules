import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

const CARD_NUMBER_INPUTS_LENGTH = 16; // 카드 번호의 길이 (16자리)

/**
 *
 * @description
 * useCardNumber 훅은 카드 번호 입력을 관리하는 커스텀 훅입니다.
 * 카드 번호의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @returns 카드 번호 입력 상태와 핸들러를 반환합니다.
 * @returns cardNumbers - 카드 번호 입력 상태 배열 (4개 항목)
 * @returns errorMessage 카드 번호 입력 오류 메시지
 * @returns isValid 카드 번호 입력 유효성 검사 결과
 * @returns handleCardNumberChange 카드 번호 입력 핸들러
 * @example
 * const { cardNumbers, errorMessage, isValid, handleCardNumberChange } = useCardNumber();
 * <input
 *   type="text"
 *   value={cardNumbers}
 *   onChange={(e) => handleCardNumberChange(e)}
 *   placeholder="카드 번호를 입력하세요"
 * />
 */
export const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateCardInput(newValue, CARD_NUMBER_INPUTS_LENGTH);

    setCardNumbers(newValue);

    if (!isValid) {
      setErrorMessage(errorMessage);
    } else {
      setErrorMessage('');
    }
  };

  return {
    cardNumbers,
    errorMessage,
    isValid: errorMessage === '',
    handleCardNumberChange,
  };
};
