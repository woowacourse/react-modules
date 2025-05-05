import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

import { CardInputItem } from '../../types/cardInputItem.types';

/**
 * @description
 * useSingleCardInput 훅은 카드 번호 입력을 관리하는 커스텀 훅입니다.
 * 카드 번호의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @param  validLength 카드 번호의 유효 길이
 * @returns 카드 번호 입력 상태와 핸들러를 반환합니다.
 * @returns singleCardInput 카드 번호 입력 상태
 * @returns errorMessage 카드 번호 입력 오류 메시지
 * @returns handleSingleCardInputChange 카드 번호 입력 핸들러
 * @example
 * const { singleCardInput, errorMessage, handleSingleCardInputChange } = useSingleCardInput(16);
 * <input
 *   type="text"
 *   value={singleCardInput.value}
 *   onChange={handleSingleCardInputChange}
 *   placeholder="카드 번호를 입력하세요"
 *  />
 */

export const useSingleCardInput = (validLength: number) => {
  const [singleCardInput, setSingleCardInput] = useState<CardInputItem>({
    value: '',
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSingleCardInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateCardInput(newValue, validLength);

    setSingleCardInput({
      value: newValue,
      isValid,
    });

    setErrorMessage(isValid ? '' : errorMessage);
  };

  return {
    singleCardInput,
    errorMessage,
    handleSingleCardInputChange,
  };
};
