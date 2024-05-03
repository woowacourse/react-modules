import { useState } from 'react';
import { isContainsNonNumeric } from '../../utils/number';
import { isLessThenCVCNumberLength, isValidCVCNumberLength } from './useCVCNumber.util';
import { CVC_NUMBER_ERROR_TYPE } from './useCVCNumber.constant';

const useCVCNumberValidation = () => {
  const [cvcError, setCVCError] = useState({ isError: false, errorMessage: '' });

  const validateCVCNumber = (value: string) => {
    if (isContainsNonNumeric(value)) {
      setCVCError({ isError: true, errorMessage: '숫자만 입력 가능합니다.' });
      return CVC_NUMBER_ERROR_TYPE.nonNumeric;
    }

    if (!isValidCVCNumberLength(value)) {
      const isShortCVCNumberLength = isLessThenCVCNumberLength(value);
      setCVCError({
        isError: isShortCVCNumberLength,
        errorMessage: isShortCVCNumberLength ? 'cvc 번호 3자리를 입력해주세요.' : '',
      });

      return CVC_NUMBER_ERROR_TYPE.invalidCVCNumberLength;
    }

    setCVCError({ isError: false, errorMessage: '' });
    return CVC_NUMBER_ERROR_TYPE.notError;
  };

  return { cvcError, validateCVCNumber };
};

export default useCVCNumberValidation;
