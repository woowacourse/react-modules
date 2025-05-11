import { useState } from 'react';

import { cardBrandInfo } from '../../utils/cardBrandInfo';
import { formatWithPattern } from '../../utils/formatWithPattern';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

/**
 * @description
 * 카드 번호 입력을 관리하는 커스텀 훅입니다.
 * 카드 번호의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @returns 카드 번호 입력 상태와 핸들러를 반환합니다.
 * @returns {string} cardNumbers 카드 번호 입력 상태
 * @returns {string} cardType 카드 브랜드 정보
 * @returns {boolean} isValid 카드 번호 유효성 검사 결과
 * @returns {string} errorMessage 카드 번호 입력 오류 메시지
 * @returns {function} handleCardNumberChange 카드 번호 입력 핸들러
 * @example
 * const { cardNumbers, cardType, isValid, errorMessage, handleCardNumberChange } = useCardNumber();
 * <input
 *   type="text"
 *   value={cardNumbers}
 *   onChange={handleCardNumberChange}
 *   placeholder="카드 번호를 입력하세요"
 * />
 * <span>{cardType}</span>
 * <span>{errorMessage}</span>
 */
export const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, '');
    const currentCardInfo = cardBrandInfo(newValue);

    const limitedValue = newValue.slice(0, currentCardInfo?.maxLength ?? 16);
    const formatted = formatWithPattern(limitedValue, currentCardInfo?.pattern ?? [4, 4, 4, 4]);

    const { isValid, errorMessage: validationError } = validateCardInput(
      limitedValue,
      currentCardInfo?.maxLength ?? 16
    );

    setErrorMessage(isValid ? '' : validationError);
    setCardNumbers(formatted);
  };

  return {
    cardNumbers,
    cardType: cardBrandInfo(cardNumbers)?.brand,
    isValid: !Boolean(errorMessage),
    errorMessage,
    handleCardNumberChange,
  };
};
