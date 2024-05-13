import { useState } from 'react';
import { getInputStatus, useInput } from './useInput';
import { ERROR_MESSAGE } from '../shared/errorMessages';
import validator from '../shared/utils/validator/validator';
import { Status } from '../shared/types';
import { VALID_LENGTH } from '../shared/constants';

type UseInputCVCNumberReturn = [
  value: string,
  status: Status,
  errorMessage: string,
  handleChange: (value: string) => void,
  handleBlur: () => void
];

const useInputCVCNumber = (): UseInputCVCNumberReturn => {
  const { value, status, setValue, setStatus } = useInput('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (value: string) => {
    //  status 업데이트
    setStatus(getInputStatus(value, VALID_LENGTH.cvcNumber));

    // Default인 경우 : Error 검사
    if (status !== 'default') {
      const [isValid, errorMessage] = validator.cvcNumber.isValidInput(value);

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
  };

  const handleBlur = () => {
    // 미완성인 경우 : Error 상태로 판단
    if (['default', 'pending'].includes(status)) {
      setStatus('error');
      setErrorMessage(ERROR_MESSAGE.cvcNumber.isNotFulfilled);
    }
  };

  return [value, status, errorMessage, handleChange, handleBlur];
};

export default useInputCVCNumber;
