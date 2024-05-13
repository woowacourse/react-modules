import { useState } from 'react';
import { getInputStatus, useInput } from './useInput';
import { ERROR_MESSAGE } from '../shared/errorMessages';
import { VALID_LENGTH } from '../shared/constants';
import validator from '../shared/utils/validator/validator';
import { ExpiryDateType, Status } from '../shared/types';

type UseInputExpiryDateReturn = [
  values: { month: string; year: string },
  status: { month: Status; year: Status },
  errorMessage: string,
  handleChange: (value: string, type: ExpiryDateType) => void,
  handleBlur: (monthValidLength: number) => void
];

const useInputExpiryDate = (): UseInputExpiryDateReturn => {
  const states = {
    month: useInput(''),
    year: useInput(''),
  };
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (value: string, type: ExpiryDateType) => {
    // 연/월 status 업데이트
    const status = {
      year: getInputStatus(states.year.value, VALID_LENGTH.expiryDate.year),
      month: getInputStatus(states.month.value, VALID_LENGTH.expiryDate.month),
      [type]: getInputStatus(value, VALID_LENGTH.expiryDate[type]),
    };
    console.log(status.month, status.year);

    let errorMessage = '';

    // Default가 아닌 경우 : Error 검사
    if (status[type] !== 'default') {
      const [isValid, errorMessage] = validator.expiryDate.isValidInput(value, type);

      // Error인 경우 : 에러 발생
      if (!isValid) {
        states[type].setStatus('error');
        setErrorMessage(errorMessage);
        return;
      }
    }

    // 월 입력 중, 연도가 미완성인 경우 : Error 상태로 판단
    if (type === 'month' && status.year === 'pending') {
      status.year = 'error';
      errorMessage = ERROR_MESSAGE.expiryDate.year.isNotFulfilled;
    }

    // Error가 아닌 경우 : 값 업데이트
    console.log(status.month, status.year);
    states[type].setValue(value);
    states.year.setStatus(status.year);
    states.month.setStatus(status.month);
    setErrorMessage(errorMessage);
  };

  const handleBlur = (monthValidLength: number) => {
    // 월 Pending인 경우 : status 업데이트
    states.month.setStatus(getInputStatus(states.month.value, monthValidLength));

    // 월 완성인 경우 : Complete 상태로 판단
    if (states.month.status === 'pending') {
      states.month.setStatus('complete');
      setErrorMessage('');
    }

    // 연도 미완성인 경우 : Error 상태로 판단
    if (states.year.status === 'pending') {
      states.year.setStatus('error');
      setErrorMessage(ERROR_MESSAGE.expiryDate.year.isNotFulfilled);
    }

    // 모두 완성인 경우 : 유효기간 만료 검사
    if (states.month.status === 'complete' && states.year.status === 'complete') {
      const [isValid, errorMessage] = validator.expiryDate.isValidDate(states.month.value, states.year.value);
      console.log(isValid);

      // Error인 경우 : 에러 발생
      if (!isValid) {
        states.month.setStatus('error');
        states.year.setStatus('error');
        setErrorMessage(errorMessage);
      }
    }
  };

  return [
    { month: states.month.value, year: states.year.value },
    { month: states.month.status, year: states.year.status },
    errorMessage,
    handleChange,
    handleBlur,
  ];
};

export default useInputExpiryDate;
