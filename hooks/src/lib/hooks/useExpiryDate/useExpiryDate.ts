import { useState } from 'react';

import { CardInputItem } from '../../types/cardInputItem.types';
import { EXPIRE_DATE_INDEX, validateExpiryDate } from '../../validation/expiryDate';

const EXPIRY_DATE_INPUTS_LENGTH = 2;

/**
 * @returns
 * @description
 * useExpiryDate 훅은 카드 만료일 입력을 관리하는 커스텀 훅입니다.
 * 카드 만료일의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @param  validLength 카드 만료일의 유효 길이
 * @returns 카드 만료일 입력 상태와 핸들러를 반환합니다.
 * @returns expiryDate 카드 만료일 입력 상태
 * @returns errorMessage 카드 만료일 입력 오류 메시지
 * @returns handleExpiryDateChange 카드 만료일 입력 핸들러
 * @example
 * const { expiryDate, errorMessage, handleExpiryDateChange } = useExpiryDate();
 * <input
 *   type="text"
 *   value={expiryDate[0].value}
 *   onChange={(e) => handleExpiryDateChange(e, 0)}
 *   placeholder="MM"
 * />
 * <input
 *  type="text"
 *  value={expiryDate[1].value}
 *  onChange={(e) => handleExpiryDateChange(e, 1)}
 *  placeholder="YY"
 * />
 */
export const useExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<CardInputItem[]>(
    Array.from({ length: EXPIRY_DATE_INPUTS_LENGTH }, () => ({ value: '', isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    const { isValid, isExpired, errorMessage } = validateExpiryDate(expiryDate, newValue, index);

    setExpiryDate((prev) => {
      const newExpiryDate = [...prev];
      newExpiryDate[index].value = newValue;
      if (index === EXPIRE_DATE_INDEX.YEAR && isExpired) {
        newExpiryDate[0].isValid = false;
      }
      if (!(index === EXPIRE_DATE_INDEX.YEAR && isExpired)) {
        newExpiryDate[index].isValid = isValid;
      }
      return newExpiryDate;
    });

    setErrorMessage(isValid ? '' : errorMessage);
  };

  return {
    expiryDate,
    errorMessage,
    handleExpiryDateChange,
  };
};
