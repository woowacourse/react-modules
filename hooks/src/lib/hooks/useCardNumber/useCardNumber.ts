import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';
import { getCardBrand } from './cardBrand/getCardBrand';
import type { CardBrand } from './cardBrand/constant';
import { formatCardNumber } from './cardBrand/formatCardNumber';

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
  const [cardType, setCardBrand] = useState<CardBrand>('Unknown');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 카드 번호가 들어오면 카드의 타입과 카드 길이를 반환한다.
    // 카드 타입과 카드 길이를 받으면 해당 카드 타입의 카드 길이가 유효한지를 검사한다.
    const newCardNumbers = value.replace(/\s/g, '');

    const { type, numberLengths } = getCardBrand({
      cardNumber: newCardNumbers,
    });
    const { errorMessage } = validateCardInput(newCardNumbers, numberLengths);

    if (newCardNumbers.length > numberLengths) {
      return;
    }

    setCardNumbers(newCardNumbers);
    setCardBrand(type);

    setErrorMessage(errorMessage);
  };

  return {
    cardNumber: {
      raw: cardNumbers,
      formatted: formatCardNumber({ type: cardType, cardNumber: cardNumbers }),
    },
    errorMessage,
    isValid: cardNumbers !== '' && errorMessage === '',
    cardType: cardType,
    handleCardNumberChange,
  };
};
