import { useState } from 'react';
import { isContainsNonNumeric } from '../../utils/number';

import { isValidCardPasswordLength } from './useCardPassword.util';
import { CARD_PASSWORD_ERROR_TYPE } from './useCardPassword.constant';

const useCVCNumberValidation = () => {
  const [cardPasswordError, setCardPasswordError] = useState({ isError: false, errorMessage: '' });

  const validateCardPassword = (value: string) => {
    if (isContainsNonNumeric(value)) {
      setCardPasswordError({ isError: true, errorMessage: '숫자만 입력 가능합니다.' });
      return CARD_PASSWORD_ERROR_TYPE.nonNumeric;
    }

    if (!isValidCardPasswordLength(value)) {
      setCardPasswordError({ isError: true, errorMessage: '카드 비밀번호 2자리를 입력해주세요.' });
      return CARD_PASSWORD_ERROR_TYPE.invalidCardPasswordLength;
    }

    setCardPasswordError({ isError: false, errorMessage: '' });
    return CARD_PASSWORD_ERROR_TYPE.notError;
  };

  return { cardPasswordError, validateCardPassword } as const;
};

export default useCVCNumberValidation;
